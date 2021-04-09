## Installation 

Depuis le dossier racine de votre projet 

```bash
composer require symfony/webpack-encore-bundle
npm install
npm uninstall stimulus @symfony/stimulus-bridge
rm -rf assets/controllers assets/controllers.json assets/bootstrap.js
```

Si `rm -rf assets/controllers assets/controllers.json assets/bootstrap.js` ne marche pas,

Supprimer le dossier assets/controllers, puis le fichier assets/controllers.json, puis le fichier assets/bootstrap.js

Ouvrir le fichier `webpack.config.js` et **supprimer** les lignes 25-26 :

```jsx
// enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
.enableStimulusBridge('./assets/controllers.json')
```

Un peu plus bas, **retirer le commentaire** ligne 64 :

```jsx
// uncomment if you use React
.enableReactPreset()
```


Installer React 
`npm install @babel/preset-react@^7.0.0 --save-dev`

Puis 
`npm install --dev react react-dom`


Ouvrir le fichier `assets/app.js` et remplacer par les lignes suivantes : 

```js
import './styles/app.css';
import React from "react";
import ReactDOM from 'react-dom';
import App from "./js/App";

// start the Stimulus application
// import './bootstrap';

ReactDOM.render(<App/>, document.getElementById('root'));

```

Créer un fichier `js/App.jsx` et ajoutez-y le code suivant : 

```js
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        Bonjour
      </div>
    )
  }
}
```

Dans un controller, celui de votre choix, créer cette méthode avec la route `/`
```php
<?php
    /**
     * @Route("/", name="base")
     */
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
?>
```


Dans `templates/base.html.twig`
```HTML
{# templates/base.html.twig #}
<!DOCTYPE html>
<html>
    <head>
        <!-- ... -->

        {% block stylesheets %}
            {# 'app' must match the first argument to addEntry() in webpack.config.js #}
            {{ encore_entry_link_tags('app') }}

            <!-- Renders a link tag (if your module requires any CSS)
                 <link rel="stylesheet" href="/build/app.css"> -->
        {% endblock %}

        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}

            <!-- Renders app.js & a webpack runtime.js file
                <script src="/build/runtime.js" defer></script>
                <script src="/build/app.js" defer></script>
                See note below about the "defer" attribute -->
        {% endblock %}
    </head>
    <body>
      <div id="root"></div>
    </body>
</html>
```



Lancer l'application BACK avec `symfony server:start`, ou `MAMP, XAMP, etc`
Lancer l'application front avec `npm run watch`



## Installer un système de routage sur React avec Symfony 

### Etape 1, séparer nos routes d'affichage et nos routes d'API

Ici, on décide que les routes d'affichages seront sous la forme `/maRoute`

Les routes qui fournissent les données seront sous la forme `/api/maRoute`

Cela permet à Symfony de faire la différence entre les deux. 

### Etape 2, autoriser la navigation côté back

Dans le Controller qui affiche `base.html.twig`, 
modifier le code de manière à ce que sa route ressemble à ceci : 

```php 
    /**
     * @Route("/{reactRouting}", name="homepage", defaults={"reactRouting": null})
     */
    public function base(): Response
    {
        return $this->render('base.html.twig');
    }
```

Cela permet d'afficher la page `base.html.twig` peu importe l'adresse sur laquelle on se trouve. 

### Etape 3, autoriser les CORS

Les cors sont des requêtes qui viennent d'une autre source, ici elles viennent de l'application React, donc il faut les 
autoriser. Pour cela, installer :

`composer require cors`.
Plus d'informations [ici](https://github.com/nelmio/NelmioCorsBundle).

### Etape 4, Installer le système de route sur votre application React 

Consulter la documentation ici : https://reactrouter.com/web/guides/quick-start

Installer react router :

`npm install react-router-dom`

#### Utilisation basique du router 

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav> {/* Il s'agit de la navigation */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About /> {/* Considérez que About est la page /about, c'est un composant entier !*/}
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```


Il est désormais possible d'utiliser `fetch` en utilisant une route de type `http://localhost/api/maRoute`. 


## Créer un CRUD avec React et Symfony 

(Optionnel), vous pouvez télécharger l'application [Postman](https://www.postman.com/) pour vous faciliter la tâche. 

Dans votre `composer.json`, ajouter les lignes suivantes dans la zone de `require` : 

```json
{
  "require": {
    /* ... */
    "ext-json": "*",
    "ext-http": "*"
  }
}
```

Installer le package `cors`. 

`composer require cors`

### Create 

Pour créer une entité. Cela se fait en deux étapes. 

#### Depuis le Back

Accueillir les paramètres de la requête avec json_decode, décodez-les, et utilisez-les pour modifier vos entitiés en base.

```php
    /**
     * @param Request $request
     * @return Response
     * @Route("/api/miel/create", name="create-miel")
     */
    public function createMiel(Request $request): Response
    {
        $content = $request->getContent();
        $jsonParameters = json_decode($content, true);
        $name = $jsonParameters['name']; // 'name' et 'price' sont les champs envoyés depuis CreateMielPage dans la méthode submitForm
        $price = $jsonParameters['price'];

        // Faire ce que vous voulez des paramètres, stockez en base, ... etc.

        // Envoyez une réponse si vous le souhaitez.
        return new JsonResponse($jsonParameters);
    }

```

#### Depuis le Front 

Créer un formulaire `html` dans votre composant React, et des states pour chaque champ. 

Créez une fonction submit qui permette d'envoyer les données au serveur via une méthode POST

```js
  /**
   * Envoie les données au back-office avec la méthode POST en se basant sur les valeurs qui sont dans le state
   */
  submitForm() {
    fetch('localhost:8000/api/miel/create',
      { // Ceci est un objet qui permet de renseigner tous les détails de la requête
        headers: { // Garder toujours les mêmes headers
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST", // POST, PUT, ou DELETE en fonction des besoins
        body: JSON.stringify({
          // Cet objet contient tous nos paramètres
          name: this.state.name,
          price: this.state.price,
        })
      }
    )
  }

```



#### Avec PostMan 

Créer une nouvelle requête de type POST avec les détails suivants : 
![image](https://user-images.githubusercontent.com/16031936/114188056-00cc8d80-9949-11eb-9f17-be3c9ca2a7d6.png)

Puis remplir le formulaire dans l'onglet Body
![image](https://user-images.githubusercontent.com/16031936/114188120-180b7b00-9949-11eb-9a3c-a79e2bb21667.png)


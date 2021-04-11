<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MielController
 * @package App\Controller
 */
class MielController extends AbstractController
{
    /**
     * Renvoie une liste des miels disponibles.
     * @Route("/api/miel", name="miel")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {

        // Récupération des miels en base de données (Ici c'est des données en dur)
        $miels = [
            'bio',
            'chataignes',
            'ornithorinque',
            'baba',
            'bibi',
            'bobo',
            'un autre petit miel',
            'Miel des ours',
            'Winnie pas content',
            'Coco veut du gâteau',
            'Papy en met dans son thé et on adore',
            'Wouhou bilou',
            "C'est trop l'éclate",
        ];

        $content = $request->getContent();
        $jsonParameters = json_decode($content, true);
        $hasParameters = isset($jsonParameters['search']) && $jsonParameters['search'];

        $results = $miels;

        if ($hasParameters) {
            $search = $jsonParameters['search'];
            $results = array_filter($miels, function($miel) use ($search) {
                // Si miel contient la chaîne de caractères
                if (str_contains($miel, $search)) {
                    // On le garde
                    return true;
                }
                // Sinon, on ne le garde pas
                else {
                    return false;
                }
            });
        }

        return new JsonResponse([
            'data' => $results,
            'paramaters' => $jsonParameters,
            'A des paramètres ? ' => $hasParameters,
            'message' => 'coucou',
        ]);
    }

    /**
     * Renvoie une liste des miels disponibles.
     * @Route("/api/mielbio", name="mielbio")
     */
    public function mielbio(): Response
    {
        $miels = ['superbio', 'megabio', 'biornithorinque'];

        return new JsonResponse($miels);
    }

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
}

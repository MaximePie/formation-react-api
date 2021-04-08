class Miel extends React.Component {
  render() {
    return (
      <div className="example-wrapper">
        <h1>Hello {{controller_name}}! ✅</h1>

        This friendly message is coming from:
        <ul>
          <li>Your controller at <code><a
            href="{{ 'D:/Programmation/La Plateforme/React/jour-1-2/symfony-reacto/src/Controller/MielController.php'|file_link(0) }}">src/Controller/MielController.php</a></code>
          </li>
          <li>Your template at <code><a
            href="{{ 'D:/Programmation/La Plateforme/React/jour-1-2/symfony-reacto/templates/miel/index.html.twig'|file_link(0) }}">templates/miel/index.html.twig</a></code>
          </li>
        </ul>
      </div>
    )
  }
}

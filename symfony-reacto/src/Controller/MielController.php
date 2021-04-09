<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
     */
    public function index(): Response
    {
        $miels = ['bio', 'chataignes', 'ornithorinque'];

        return new JsonResponse([
            'data' => $miels,
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

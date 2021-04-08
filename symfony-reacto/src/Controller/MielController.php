<?php

namespace App\Controller;

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
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PopcornController
 * @package App\Controller
 */
class PopcornController extends AbstractController
{
    /**
     * @Route("/api/popcorn", name="popcorn")
     */
    public function index(): Response
    {
        $myPopcorns = ["Bibi", "bobo", "baba"];
        return new JsonResponse([$myPopcorns]);

// Exemple pour un vrai projet
//        /**
//         * @var $users User[]
//         */
//        $users = $this->repository->findAll();
//
//        return new JsonResponse($users);
    }

    /**
     * @Route("/api/popcorn/create", name="popcorn")
     */
    public function create(Request $request): Response
    {
        $content = $request->getContent();
        $jsonParameters = json_decode($content, true);
        $name = $jsonParameters['name'];
        $taste = $jsonParameters['taste'];

        return new JsonResponse([
            'name' => $name,
            'Tasty' => $taste,
        ]);
    }
}

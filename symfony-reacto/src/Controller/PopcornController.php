<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PopcornController extends AbstractController
{
    /**
     * @Route("/popcorn", name="popcorn")
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
}

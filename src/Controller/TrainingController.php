<?php

namespace App\Controller;

use App\Entity\Training;
use App\Form\TrainingType;
use App\Repository\TrainingRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/trainings", name="admin_trainings_")
 */
class TrainingController extends AbstractController
{
    /**
     * @Route("/", name="list")
     */
    public function index(TrainingRepository $trainingRepo, Request $request)
    {
        $trainings = $trainingRepo->findAll();

        $training = new Training();

        $form = $this->createForm(TrainingType::class, $training);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($training);
            $em->flush();

            $this->addFlash('success', 'Training ajoutée');

            return $this->redirectToRoute('admin_home');
        }

        return $this->render('admin/training/index.html.twig', [
            'trainings' => $trainings,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET", "POST"}, requirements={"id"="\d+|new"})
     */
    public function show($id, Training $training = null, Request $request)
    {
        if(is_null($training)) $training = new Training();

        $form = $this->createForm(TrainingType::class, $training);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($training);
            $em->flush();

            $this->addFlash('success', 'Training mis à jour');

            return $this->redirectToRoute('admin_home');
        }

        return $this->render('admin/training/show.html.twig', [
            'training' => $training,
            'form_training' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function delete(Training $training)
    {
        if(!$training) throw $this->createNotFoundException('Expérience introuvable');

        $em = $this->getDoctrine()->getManager();
        $em->remove($training);
        $em->flush();

        $this->addFlash('success', 'Training supprimée');

        return $this->redirectToRoute('admin_trainings_home');
    }
}

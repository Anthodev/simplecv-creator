<?php

namespace App\Controller;

use App\Document\Training;
use App\Form\TrainingType;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/trainings", name="admin_trainings_")
 */
class TrainingController extends AbstractController
{
    private $trainingRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->trainingRepo = $dm->getRepository(Training::class);
    }

    /**
     * @Route("/", name="list")
     */
    public function index(Request $request)
    {
        $trainings = $trainingRepo->findAll();

        $training = new Training();

        $form = $this->createForm(TrainingType::class, $training);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($training);
            $this->dm->flush();

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
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($training);
            $this->dm->flush();

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

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($training);
        $this->dm->flush();

        $this->addFlash('success', 'Training supprimée');

        return $this->redirectToRoute('admin_trainings_home');
    }
}

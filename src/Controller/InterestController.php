<?php

namespace App\Controller;

use App\Document\Interest;
use App\Form\InterestType;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin-cv/interests", name="admin_interests_")
 */
class InterestController extends AbstractController
{
    private $interestRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->interestRepo = $dm->getRepository(Interest::class);
    }
    /**
     * @Route("/", name="home")
     */
    public function index(Request $request)
    {
        $interests = $interestRepo->findAll();

        $interest = new Interest();

        $form = $this->createForm(InterestType::class, $interest);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($interest);
            $this->dm->flush();

            $this->addFlash('success', 'Interest ajoutée');

            return $this->redirectToRoute('admin_interests_home');
        }

        return $this->render('admin/interest/index.html.twig', [
            'interests' => $interests,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET", "POST"}, requirements={"id"="\d+"})
     */
    public function show(Interest $interest, Request $request)
    {
        if(!$interest) throw $this->createNotFoundException('Expérience introuvable');

        $form = $this->createForm(InterestType::class, $interest);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($interest);
            $this->dm->flush();

            $this->addFlash('success', 'Interest mis à jour');

            return $this->redirectToRoute('admin_home');
        }

        return $this->render('admin/interest/index.html.twig', [
            'interest' => $interest,
            'form_interest' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET", "POST"}, requirements={"id"="\d+"})
     */
    public function delete(Interest $interest)
    {
        if(!$interest) throw $this->createNotFoundException('Expérience introuvable');

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($interest);
        $this->dm->flush();

        $this->addFlash('success', 'Interest supprimée');

        return $this->redirectToRoute('admin_interests_home');
    }
}

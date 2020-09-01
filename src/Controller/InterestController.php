<?php

namespace App\Controller;

use App\Entity\Interest;
use App\Form\InterestType;
use App\Repository\InterestRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin-cv/interests", name="admin_interests_")
 */
class InterestController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(InterestRepository $interestRepo, Request $request)
    {
        $interests = $interestRepo->findAll();

        $interest = new Interest();

        $form = $this->createForm(InterestType::class, $interest);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($interest);
            $em->flush();

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
            $em = $this->getDoctrine()->getManager();
            $em->persist($interest);
            $em->flush();

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

        $em = $this->getDoctrine()->getManager();
        $em->remove($interest);
        $em->flush();

        $this->addFlash('success', 'Interest supprimée');

        return $this->redirectToRoute('admin_interests_home');
    }
}

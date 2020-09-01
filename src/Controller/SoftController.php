<?php

namespace App\Controller;

use App\Entity\Soft;
use App\Form\SoftType;
use App\Repository\SoftRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/softs", name="admin_softs_")
 */
class SoftController extends AbstractController
{
    /**
     * @Route("/", name="list")
     */
    public function index(SoftRepository $softRepo, Request $request)
    {
        $softs = $softRepo->findAll();

        $soft = new Soft();

        $form = $this->createForm(SoftType::class, $soft);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($soft);
            $em->flush();

            $this->addFlash('success', 'Soft ajoutée');

            return $this->redirectToRoute('admin_softs_list');
        }

        return $this->render('admin/soft/index.html.twig', [
            'softs' => $softs,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"}, requirements={"id"="\d+|new"})
     */
    public function show($id, Soft $soft = null, Request $request)
    {
        // if(!$soft) throw $this->createNotFoundException('Expérience introuvable');
        if(is_null($soft)) $soft = new Soft();

        $form = $this->createForm(SoftType::class, $soft);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($soft);
            $em->flush();

            $this->addFlash('success', 'Soft mis à jour');

            return $this->redirectToRoute('admin_softs_home');
        }

        return $this->render('admin/soft/show.html.twig', [
            'form_soft' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function delete(Soft $soft)
    {
        if(!$soft) throw $this->createNotFoundException('Expérience introuvable');

        $em = $this->getDoctrine()->getManager();
        $em->remove($soft);
        $em->flush();

        $this->addFlash('success', 'Soft supprimée');

        return $this->redirectToRoute('admin_softs_home');
    }
}

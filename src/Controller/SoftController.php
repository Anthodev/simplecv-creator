<?php

namespace App\Controller;

use App\Document\Soft;
use App\Form\SoftType;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/acv/softs", name="admin_softs_")
 */
class SoftController extends AbstractController
{
    private $softRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->softRepo = $dm->getRepository(Soft::class);
    }
    /**
     * @Route("/", name="list")
     */
    public function index(Request $request)
    {
        $softs = $softRepo->findAll();

        $soft = new Soft();

        $form = $this->createForm(SoftType::class, $soft);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($soft);
            $this->dm->flush();

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
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($soft);
            $this->dm->flush();

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

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($soft);
        $this->dm->flush();

        $this->addFlash('success', 'Soft supprimée');

        return $this->redirectToRoute('admin_softs_home');
    }
}

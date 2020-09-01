<?php

namespace App\Controller;

use App\Entity\Aptitude;
use App\Form\AptitudeType;
use App\Repository\AptitudeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin-cv/aptitudes", name="admin_aptitudes_")
 */
class AptitudeController extends AbstractController
{
    /**
     * @Route("/", name="list")
     */
    public function index(AptitudeRepository $aptitudeRepo, Request $request)
    {
        $aptitudes = $aptitudeRepo->findAll();

        $aptitude = new Aptitude();

        $form = $this->createForm(AptitudeType::class, $aptitude);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($aptitude);
            $em->flush();

            $this->addFlash('success', 'Aptitude ajoutée');

            return $this->redirectToRoute('admin_aptitudes_list');
        }

        return $this->render('admin/aptitude/index.html.twig', [
            'aptitudes' => $aptitudes,
        ]);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"}, requirements={"id"="\d+|new"})
     */
    public function show($id, Aptitude $aptitude = null, Request $request)
    {
        // if(!$aptitude) throw $this->createNotFoundException('Expérience introuvable');
        if(is_null($aptitude)) $aptitude = new Aptitude();

        $form = $this->createForm(AptitudeType::class, $aptitude);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($aptitude);
            $em->flush();

            $this->addFlash('success', 'Aptitude mis à jour');

            return $this->redirectToRoute('admin_aptitudes_home');
        }

        return $this->render('admin/aptitude/show.html.twig', [
            'form_aptitude' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/delete", name="delete", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function delete(Aptitude $aptitude)
    {
        if(!$aptitude) throw $this->createNotFoundException('Expérience introuvable');

        $em = $this->getDoctrine()->getManager();
        $em->remove($aptitude);
        $em->flush();

        $this->addFlash('success', 'Aptitude supprimée');

        return $this->redirectToRoute('admin_aptitudes_home');
    }
}

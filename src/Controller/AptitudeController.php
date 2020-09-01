<?php

namespace App\Controller;

use App\Document\Aptitude;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin-cv/aptitudes", name="admin_aptitudes_")
 */
class AptitudeController extends AbstractController
{
    private $aptitudeRepo;
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->aptitudeRepo = $dm->getRepository(Aptitude::class);
    }
    /**
     * @Route("/", name="list")
     */
    public function index(Request $request)
    {
        $aptitudes = $this->aptitudeRepo->findAll();

        $aptitude = new Aptitude();

        $form = $this->createForm(AptitudeType::class, $aptitude);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($aptitude);
            $this->dm->flush();

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
            $this->dm = $this->getDoctrine()->getManager();
            $this->dm->persist($aptitude);
            $this->dm->flush();

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

        $this->dm = $this->getDoctrine()->getManager();
        $this->dm->remove($aptitude);
        $this->dm->flush();

        $this->addFlash('success', 'Aptitude supprimée');

        return $this->redirectToRoute('admin_aptitudes_home');
    }
}

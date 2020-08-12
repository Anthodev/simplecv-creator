<?php

namespace App\Controller;

use App\Entity\Portfolio;
use App\Form\PortfolioType;
use App\Repository\PortfolioRepository;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

/**
* @Route("/acv/portfolios", name="admin_portfolio_")
*/
class PortfolioController extends AbstractController
{
    /**
    * @Route("/", name="list", methods={"GET", "POST"})
    */
    public function index(PortfolioRepository $expRepo, Request $request)
    {
        $portfolios = $expRepo->findAll();

        $portfolio = new Portfolio();

        $form = $this->createForm(PortfolioType::class, $portfolio);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($portfolio);
            $em->flush();

            $this->addFlash('success', 'Portfolio added');

            return $this->redirectToRoute('admin_portfolios_list');
        }

        return $this->render('admin/portfolio/index.html.twig', [
            'portfolios' => $portfolios,
        ]);
    }

    /**
    * @Route("/{id}", name="show", methods={"GET", "POST"}, requirements={"id"="\d+|new"})
    */
    public function show($id, Portfolio $portfolio = null, Request $request)
    {
        if(is_null($portfolio)) $portfolio = new Portfolio();

        $oldImage = $portfolio->getImage();

        $form = $this->createForm(PortfolioType::class, $portfolio);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $description = $portfolio->getDescription();

            if(\strpos($description, 'https://www.youtube.com/watch?v=') || \strpos($description, 'https://youtu.be')) {
                dump($description);
                if(\strpos($description, 'https://www.youtube.com/watch?v=')) {
                    $pattern = "/(watch\?v=)/";
                    $description = \preg_replace($pattern, 'embed/', $description);
                } else {
                    $pattern = "/(https:\/\/youtu.be)/";
                    $description = \preg_replace($pattern, 'https://www.youtube.com/embed', $description);
                }

                $description = \str_replace('<p>', '', $description);
                $description = \str_replace('</p>', '', $description);

                $portfolio->setDescription($description);
            }

            $file = $portfolio->getImage();

            if (!is_null($file)) {
                $filename = $this->generateUniqueFilename() . '.' . $file->guessExtension();

                try {
                    $file->move(
                        $this->getParameter('portfolio_directory'),
                        $filename
                    );
                } catch (FileException $e) {
                    dump($e);
                }
                if ($oldImage != null || $oldImage != '') {
                    $filesystem = new Filesystem();
                    $filesystem->remove($this->getParameter('portfolio_directory') . '/' . $oldImage);
                }
                $portfolio->setImage($filename);
            } else {
                $portfolio->setImage($oldImage);
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($portfolio);
            $em->flush();

            $this->addFlash('success', 'Portfolio entry updated');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-portfolio',
            ]);
        }

        return $this->render('admin/portfolio/show.html.twig', [
            'portfolio' => $portfolio,
            'form_portfolio' => $form->createView(),
        ]);
    }

    /**
    * @Route("/{id}/delete", name="delete", methods={"GET", "POST"}, requirements={"id"="\d+"})
    */
    public function delete(Portfolio $portfolio)
    {
        if(!$portfolio) throw $this->createNotFoundException('Expérience introuvable');

        $em = $this->getDoctrine()->getManager();
        $em->remove($portfolio);
        $em->flush();

        $this->addFlash('success', 'Portfolio deleted');

        return $this->redirectToRoute('admin_home', [
            '_fragment' => 'list-portfolio',
        ]);
    }
}

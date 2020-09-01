<?php

namespace App\Controller;

use App\Document\Aptitude;
use App\Document\Contact;
use App\Document\Experience;
use App\Document\Interest;
use App\Document\Portfolio;
use App\Document\Skill;
use App\Document\Soft;
use App\Document\Training;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

/**
 * @Route("/acv", name="admin_")
 */
class AdminController extends AbstractController
{
    private $expRepo;
    private $contactRepo;
    private $trainingRepo;
    private $portfolioRepo;
    private $aptRepo;
    private $skillRepo;
    private $softRepo;
    private $interestRepo;
    private $dm;
    
    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->expRepo = $dm->getRepository(Experience::class);
        $this->contactRepo = $dm->getRepository(Contact::class);
        $this->trainingRepo = $dm->getRepository(Training::class);
        $this->portfolioRepo = $dm->getRepository(Portfolio::class);
        $this->aptRepo = $dm->getRepository(Aptitude::class);
        $this->skillRepo = $dm->getRepository(Skill::class);
        $this->softRepo = $dm->getRepository(Soft::class);
        $this->interestRepo = $dm->getRepository(Interest::class);
        // $this->serializer = $serializer;
    }

    /**
     * @Route("/", name="home")
     */
    public function index(Request $request)
    {
        $experiences = $this->expRepo->findBy([], ['list_order' => 'ASC']);
        $contacts = $this->contactRepo->findBy([], ['contactOrder' => 'ASC']);
        $trainings = $this->trainingRepo->findBy([], ['list_order' => 'ASC']);
        $portfolios = $this->portfolioRepo->findBy([], ['type' => 'DESC', 'list_order' => 'ASC']);
        $aptitudes = $this->aptRepo->findAll();
        $skills = $this->skillRepo->findBy([], ['level' => 'DESC']);
        $softs = $this->softRepo->findAll();
        $interests = $this->interestRepo->findBy([], ['list_order' => 'ASC']);

        $contact = new Contact();
        $portfolio = new Portfolio();
        $aptitude = new Aptitude();
        $skill = new Skill();
        $soft = new Soft();
        $interest = new Interest();
        $info = [];

        $info = file_get_contents($this->getParameter('data_directory') . '/data.json');
        $info = \json_decode($info);

        $form_contact = $this->createForm(ContactType::class, $contact);
        $form_contact->handleRequest($request);

        if($form_contact->isSubmitted() && $form_contact->isValid()) {
            $this->dm->persist($contact);
            $this->dm->flush();

            $this->addFlash('success', 'Contact added');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-contacts',
            ]);
        }

        $form_portfolio = $this->createForm(PortfolioType::class, $portfolio);
        $form_portfolio->handleRequest($request);

        if($form_portfolio->isSubmitted() && $form_portfolio->isValid()) {
            $description = $portfolio->getDescription();

            if (\strpos($description, 'https://www.youtube.com/watch?v=') || \strpos($description, 'https://youtu.be')) {
                if (\strpos($description, 'https://www.youtube.com/watch?v=')) {
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

            $file = $form_portfolio->get('image')->getData();

            if(!is_null($portfolio->getImage())) {
                $filename = $this->generateUniqueFileName().'.'.$file->guessExtension();

                try {
                    $file->move(
                        $this->getParameter('portfolio_directory'),
                        $filename
                    );
                } catch (FileException $e) {
                    dump($e);
                }

                $portfolio->setImage($filename);
            }

            $this->dm->persist($portfolio);
            $this->dm->flush();

            $this->addFlash('success', 'Portfolio added');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-portfolio',
            ]);
        }

        $form_aptitude = $this->createForm(AptitudeType::class, $aptitude);
        $form_aptitude->handleRequest($request);

        if($form_aptitude->isSubmitted() && $form_aptitude->isValid()) {
            $this->dm->persist($aptitude);
            $this->dm->flush();

            $this->addFlash('success', 'Aptitude added');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-aptitudes',
            ]);
        }

        $form_skill = $this->createForm(SkillType::class, $skill);
        $form_skill->handleRequest($request);

        if($form_skill->isSubmitted() && $form_skill->isValid()) {
            $this->dm->persist($skill);
            $this->dm->flush();

            $this->addFlash('success', 'Skill added');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-skills',
            ]);
        }

        $form_soft = $this->createForm(SoftType::class, $soft);
        $form_soft->handleRequest($request);

        if($form_soft->isSubmitted() && $form_soft->isValid()) {
            $this->dm->persist($soft);
            $this->dm->flush();

            $this->addFlash('success', 'Soft skill added');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-softs',
            ]);
        }

        $form_interest = $this->createForm(InterestType::class, $interest);
        $form_interest->handleRequest($request);

        if($form_interest->isSubmitted() && $form_interest->isValid()) {
            $this->dm->persist($interest);
            $this->dm->flush();

            $this->addFlash('success', 'Interest added');

            return $this->redirectToRoute('admin_home', [
                '_fragment' => 'list-interests',
            ]);
        }

        return $this->render('admin/index.html.twig', [
            'info' => $info,
            'experiences' => $experiences,
            'contacts' => $contacts,
            'trainings' => $trainings,
            'portfolios' => $portfolios,
            'aptitudes' => $aptitudes,
            'skills' => $skills,
            'softs' => $softs,
            'interests' => $interests,
            'form_contact' => $form_contact->createView(),
            'form_portfolio' => $form_portfolio->createView(),
            'form_aptitude' => $form_aptitude->createView(),
            'form_skill' => $form_skill->createView(),
            'form_soft' => $form_soft->createView(),
            'form_interest' => $form_interest->createView(),
        ]);
    }

    /**
     * @Route("/info/update", name="info_update")
     */
    public function updateInfo(Request $request)
    {
        $info = [];

        if(!is_null(file_get_contents($this->getParameter('data_directory') . '/data.json'))) $oldInfo = file_get_contents($this->getParameter('data_directory') . '/data.json');
        else $oldInfo = null;

        $name = $request->request->get('name');
        $title = $request->request->get('title');
        
        $photo = $request->files->get('photo');

        if(!is_null($name)) $info['name'] = $name;
        else if(!is_null($oldInfo)) $info['name'] = $oldInfo['name'];
        else $info['name'] = null;

        if(!is_null($title)) $info['title'] = $title;
        else if(!is_null($oldInfo)) $info['title'] = $oldInfo['title'];
        else $info['title'] = null;

        if(!is_null($photo)) {
            $filename = $this->generateUniqueFilename() . '.' . $photo->guessExtension();
            // $filename = $this->generateUniqueFilename() . '.' . \substr($photo, strpos($photo, '.', -1), strlen($photo));

            try {
                $photo->move(
                    $this->getParameter('photo_directory'),
                    $filename
                );
            } catch (FileException $e) {
                dump($e);
            }

            $info['photo'] = $filename;
        }

        $info = json_encode($info);

        $infoJson = file_put_contents($this->getParameter('data_directory') . '/data.json', $info);
        
        return $this->redirectToRoute('admin_home', [
            '_fragment' => 'list-interests',
        ]);
    }

    private function generateUniqueFileName()
    {
        // md5() reduces the similarity of the file names generated by
        // uniqid(), which is based on timestamps
        return md5(uniqid());
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}

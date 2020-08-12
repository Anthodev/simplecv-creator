<?php

namespace App\Controller;

use Exception;
use App\Document\Role;
use App\Document\User;
use JMS\Serializer\SerializerInterface;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/user")
 * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
 * @package App\Controller
 */
class UserController extends AbstractController
{

    private $userRepository;
    private $roleRepository;
    private $dm;
    private $serializer;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
        $this->userRepository = $dm->getRepository(User::class);
        $this->roleRepository = $dm->getRepository(Role::class);
        // $this->serializer = $serializer;
    }

    /**
     * @Route("/new", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
     * @param Request $request 
     * @return JsonResponse|void 
     */
    public function new(Request $request)
    {
        $username = '';
        $email = '';
        $password = '';
        $roleUser = '';

        $data = $request->getContent();

        if (!empty($data)) {
            $decodedData = \json_decode($data, true);

            $username = $decodedData['username'];
            $password = $decodedData['password'];
            $roleUser = $decodedData['roleUser'];
        }

        $role = $this->getUserRole($roleUser);

        $user = new User();
        $user->setPlainPassword($password);

        $user->setRole($role);
        $role->addUser($user);

        try {
            $this->dm->persist($user);
            $this->dm->flush();

            return new JsonResponse($user, 200);
        } catch (Exception $e) {
            return new JsonResponse(\json_encode($e), 403);
        }
    }

    /**
     * @Route("/countUsers", methods={"GET"})
     * @IsGranted("IS_AUTHENTICATED_ANONYMOUSLY")
     */
    public function getUsersCount()
    {
        return new JsonResponse(count($this->userRepository->findAll()), 200);
    }

    /**
     * 
     * @param mixed $roleCode 
     * @return mixed|Role 
     */
    public function getUserRole($roleCode)
    {
        $role = $this->roleRepository->findOneBy(['name' => $roleCode]);

        if (is_null($role)) {
            $role = new Role();

            if ($roleCode === 'User') {
                $role->setName('User');
                $role->setCode('ROLE_USER');
            } else {
                $role->setName('Admin');
                $role->setCode('ROLE_ADMIN');
            }

            $this->dm->persist($role);
            $this->dm->flush();
        }

        return $role;
    }

    /**
     * User login route
     * 
     * @Route("/login", name="login", methods={"POST"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function login()
    {
        $user = $this->getUser();

        return new JsonResponse([
            'id' => $user->getId(),
            'username' => $user->getUsername(),
            'role' => $user->getRole()->getName()
        ], 200);
    }

    /**
     * Return user info
     * 
     * @Route("/profile", methods={"GET"})
     * @IsGranted("IS_AUTHENTICATED_FULLY")
     */
    public function getUserInfo()
    {
        $user = $this->getUser();

        // $response = new Response();

        // $serializedUser = $this->serializer->serialize($user, 'json');
        $serializedUser = $this->get('jms_serializer')->serialize($user, 'json');

        $response = new Response($serializedUser);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}

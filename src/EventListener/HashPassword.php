<?php

namespace App\EventListener;

use App\Document\User;
use Doctrine\ODM\MongoDB\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class HashPassword
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $user = $args->getDocument();

        if (!$user instanceof User) {
            return;
        }

        $this->encodePassword($user);
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $user = $args->getDocument();

        if (!$user instanceof User) {
            return;
        }

        $this->encodePassword($user);
    }

    public function encodePassword(User $user)
    {
        if (!$user->getPlainPassword()) {
            return;
        }

        $encoded = $this->passwordEncoder->encodePassword(
            $user,
            $user->getPlainPassword()
        );

        $user->setPassword($encoded);

        $user->eraseCredentials();
    }
}

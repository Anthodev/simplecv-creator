<?php

namespace App\EventListener;

use Doctrine\ODM\MongoDB\Event\LifecycleEventArgs;

class AppSetData
{
    public function prePersist(LifecycleEventArgs $args)
    {
        $entity = $args->getDocument();

        $entity->setCreatedAt(new \DateTime());
        $entity->setUpdatedAt(new \DateTime());
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $entity = $args->getDocument();

        $entity->setUpdatedAt(new \DateTime());
    }
}

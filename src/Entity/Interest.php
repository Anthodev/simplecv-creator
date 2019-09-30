<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InterestRepository")
 */
class Interest
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=16)
     */
    private $icon;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $list_order;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }

    public function getListOrder(): ?int
    {
        return $this->list_order;
    }

    public function setListOrder(?int $list_order): self
    {
        $this->list_order = $list_order;

        return $this;
    }
}

<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 * @MongoDB\HasLifecycleCallbacks()
 */
class Interest
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @var mixed
     */
    protected $id;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $name;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $icon;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    protected $createdAt;

    /**
     * @MongoDB\Field(type="date")
     * @var mixed
     */
    protected $updatedAt;

    /**
     * Get the value of id
     *
     * @return  mixed
     */ 
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Get the value of name
     *
     * @return  mixed
     */ 
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param  mixed  $name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of icon
     *
     * @return  mixed
     */ 
    public function getIcon(): ?string
    {
        return $this->icon;
    }

    /**
     * Set the value of icon
     *
     * @param  mixed  $icon
     *
     * @return  self
     */ 
    public function setIcon($icon)
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Get the value of createdAt
     *
     * @return  mixed
     */ 
    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    /**
     * Set the value of createdAt
     *
     * @param  mixed  $createdAt
     *
     * @return  self
     */ 
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get the value of updatedAt
     *
     * @return  mixed
     */ 
    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    /**
     * Set the value of updatedAt
     *
     * @param  mixed  $updatedAt
     *
     * @return  self
     */ 
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}

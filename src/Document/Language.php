<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 * @MongoDB\HasLifecycleCallbacks()
 */
class Language
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
    protected $level;

    /**
     * @MongoDB\Field(type="string")
     * @var mixed
     */
    protected $description;

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
     * Get the value of level
     *
     * @return  mixed
     */ 
    public function getLevel(): ?int
    {
        return $this->level;
    }

    /**
     * Set the value of level
     *
     * @param  mixed  $level
     *
     * @return  self
     */ 
    public function setLevel($level)
    {
        $this->level = $level;

        return $this;
    }

    /**
     * Get the value of description
     *
     * @return  mixed
     */ 
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @param  mixed  $description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

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

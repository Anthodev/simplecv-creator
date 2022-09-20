<?php

declare(strict_types=1);

namespace App\Enums;

enum SkillTypeCodeEnum: string
{
    case HARD = 'hard';
    case SOFT = 'soft';
    case PROGRAMMING_LANGUAGE = 'programming_language';
    case LANGUAGE = 'language';
    case INTEREST = 'interest';
    case CONTACT = 'contact';
    case EXTRA = 'extra';
}

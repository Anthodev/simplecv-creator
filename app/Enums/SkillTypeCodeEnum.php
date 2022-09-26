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
    case EXTRA = 'extra';

    public static function getValues(): array
    {
        return [
            self::HARD->value,
            self::SOFT->value,
            self::PROGRAMMING_LANGUAGE->value,
            self::LANGUAGE->value,
            self::INTEREST->value,
            self::EXTRA->value,
        ];
    }
}

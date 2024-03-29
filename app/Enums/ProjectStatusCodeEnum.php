<?php

declare(strict_types=1);

namespace App\Enums;

enum ProjectStatusCodeEnum: int
{
    case IN_PROGRESS = 1;
    case MAINTAINED = 2;
    case NOT_MAINTAINED = 0;

    public static function toSimpleArray(): array
    {
        return [
            'Non maintenu',
            'En développment',
            'Actif',
        ];
    }
}

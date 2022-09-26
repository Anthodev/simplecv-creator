<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\SkillTypeCodeEnum;
use App\Models\SkillType;
use Illuminate\Database\Seeder;

class SkillTypeSeeder extends Seeder
{
    public function run(): void
    {
        SkillType::factory()->create(
            [
                'label' => 'Hard Skill',
                'code' => SkillTypeCodeEnum::HARD->value,
            ],
        );

        SkillType::factory()->create(
            [
                'label' => 'Soft Skill',
                'code' => SkillTypeCodeEnum::SOFT->value,
            ],
        );

        SkillType::factory()->create(
            [
                'label' => 'Programming Language',
                'code' => SkillTypeCodeEnum::PROGRAMMING_LANGUAGE->value,
            ],
        );

        SkillType::factory()->create(
            [
                'label' => 'Language',
                'code' => SkillTypeCodeEnum::LANGUAGE->value,
            ],
        );

        SkillType::factory()->create(
            [
                'label' => 'Interest',
                'code' => SkillTypeCodeEnum::INTEREST->value,
            ],
        );

        SkillType::factory()->create(
            [
                'label' => 'Extra',
                'code' => SkillTypeCodeEnum::EXTRA->value,
            ],
        );
    }
}

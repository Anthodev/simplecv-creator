<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\ExperienceTypeCodeEnum;
use App\Models\ExperienceType;
use Illuminate\Database\Seeder;

class ExperienceTypeSeeder extends Seeder
{
    public function run(): void
    {
        ExperienceType::factory()->create(
            [
                'label' => 'Job',
                'code' => ExperienceTypeCodeEnum::JOB->value,
            ],
        );

        ExperienceType::factory()->create(
            [
                'label' => 'Education',
                'code' => ExperienceTypeCodeEnum::EDUCATION->value,
            ],
        );
    }
}

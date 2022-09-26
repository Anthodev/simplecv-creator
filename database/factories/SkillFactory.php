<?php

namespace Database\Factories;

use App\Models\SkillType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Skill>
 */
class SkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(2, true),
            'icon' => $this->faker->imageUrl,
            'url' => $this->faker->url,
            'display_order' => $this->faker->numberBetween(0, 100),
            'skill_type_id' => SkillType::factory()->create()->id,
        ];
    }
}

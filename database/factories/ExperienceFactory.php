<?php

namespace Database\Factories;

use App\Models\ExperienceType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Experience>
 */
class ExperienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title,
            'description' => $this->faker->paragraph,
            'location' => $this->faker->city,
            'company' => $this->faker->company,
            'company_url' => $this->faker->url,
            'start_date' => $this->faker->date,
            'end_date' => $this->faker->date,
            'display_order' => $this->faker->numberBetween(1, 10),
            'experience_type_id' => ExperienceType::factory()->create()->id,
        ];
    }
}

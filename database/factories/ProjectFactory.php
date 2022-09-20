<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->title,
            'description' => $this->faker->paragraph,
            'url' => $this->faker->url,
            'repo_url' => $this->faker->url,
            'image' => $this->faker->imageUrl,
            'status' => $this->faker->numberBetween(0, 2),
            'display_order' => $this->faker->numberBetween(0, 100),
        ];
    }
}

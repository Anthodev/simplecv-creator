<?php

declare(strict_types=1);

namespace Tests\Feature\Experience;

use App\Models\Experience;
use App\Models\ExperienceType;
use App\Models\User;

it('can create an experience', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('experiences.store'), [
        'title' => 'Test Experience',
        'description' => 'Test Description',
        'location' => 'Test Location',
        'company' => 'Test Company',
        'company_url' => 'https://test.com',
        'start_date' => '2021-01-01',
        'end_date' => '2021-01-02',
        'display_order' => 1,
        'experience_type_id' => ExperienceType::factory()->create()->id,
    ]);

    $experience = Experience::first();

    expect($response)
        ->status()->toBe(302)
        ->and($experience)
            ->title->toBe('Test Experience')
            ->description->toBe('Test Description')
            ->location->toBe('Test Location')
            ->company->toBe('Test Company')
            ->company_url->toBe('https://test.com')
            ->start_date->toBe('2021-01-01')
            ->end_date->toBe('2021-01-02')
            ->display_order->toBe(1)
            ->experience_type_id->toBeInt();
});

<?php

declare(strict_types=1);

namespace Tests\Feature\Experience;

use App\Models\Experience;
use App\Models\User;

beforeEach(function () {
    $this->experience = Experience::factory()->create([
        'title' => 'Test Experience',
        'description' => 'Test Description',
        'location' => 'Test Location',
        'company' => 'Test Company',
        'company_url' => 'https://test.com',
        'start_date' => '2021-01-01',
        'end_date' => '2021-01-02',
        'display_order' => 1,
        'experience_type_id' => 1,
    ]);
});

it('update an experience', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->patch(route('experiences.update', $this->experience->id), [
        'id' => $this->experience->id,
        'title' => 'Test Experience Updated',
        'description' => 'Test Description Updated',
        'location' => 'Test Location Updated',
        'company' => 'Test Company Updated',
        'company_url' => 'https://test-updated.com',
        'start_date' => '2021-01-03',
        'end_date' => '2021-01-04',
        'display_order' => 2,
        'experience_type_id' => 2,
    ]);

    $experience = Experience::first();

    expect($response)
        ->status()->toBe(302)
        ->and($experience)
            ->title->toBe('Test Experience Updated')
            ->description->toBe('Test Description Updated')
            ->location->toBe('Test Location Updated')
            ->company->toBe('Test Company Updated')
            ->company_url->toBe('https://test-updated.com')
            ->start_date->toBe('2021-01-03')
            ->end_date->toBe('2021-01-04')
            ->display_order->toBe(2)
            ->experience_type_id->toBe(2);
});

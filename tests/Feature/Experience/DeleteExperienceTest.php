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

it('can delete an experience', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('experiences.delete', $this->experience->id));

    expect($response)
        ->status()->toBe(302)
        ->and(Experience::find($this->experience->id))->toBeNull();
});

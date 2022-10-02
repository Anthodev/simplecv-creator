<?php

declare(strict_types=1);

namespace Tests\Feature\Experience;

use App\Models\Experience;
use App\Models\User;

beforeEach(function () {
    $this->experience = Experience::factory()->create();
});

it('can delete an experience', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('experiences.delete', $this->experience->id))->assertOk();

    expect(Experience::find($this->experience->id))->toBeNull();
});

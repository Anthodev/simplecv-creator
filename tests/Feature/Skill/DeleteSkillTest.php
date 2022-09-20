<?php

declare(strict_types=1);

namespace Tests\Feature\Skill;

use App\Models\Skill;
use App\Models\User;

beforeEach(function () {
    $this->skill = Skill::factory()->create();
});

it('can delete a skill', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('skills.delete', $this->skill->id));

    expect($response)
        ->status()->toBe(302)
        ->and(Skill::find($this->skill->id))->toBeNull();
});

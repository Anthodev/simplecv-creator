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

    $this->actingAs($user)->delete(route('skills.delete', $this->skill->id))->assertOk();

    expect(Skill::find($this->skill->id))->toBeNull();
});

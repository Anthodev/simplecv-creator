<?php

declare(strict_types=1);

namespace Tests\Feature\Skill;

use App\Models\Skill;
use App\Models\User;

beforeEach(function () {
    $this->skill = Skill::factory()->create();
});

it('can get a skill', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('skills.index', $this->skill->id))->assertOk();

    $skillsProps = $response->original->getData()['page']['props']['skills'][0];

    expect($skillsProps['name'])->toBe($this->skill->name)
        ->and($skillsProps['icon'])->toBe($this->skill->icon)
        ->and($skillsProps['url'])->toBe($this->skill->url)
        ->and($skillsProps['display_order'])->toBe($this->skill->display_order)
        ->and($skillsProps['skill_type_id'])->toBe($this->skill->skill_type_id);
});

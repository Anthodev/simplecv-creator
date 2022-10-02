<?php

declare(strict_types=1);

namespace Tests\Feature\Skill;

use App\Models\Skill;
use App\Models\SkillType;
use App\Models\User;

beforeEach(function () {
    $this->skill = Skill::factory()->create();
});

it('it can update a skill', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->patch(route('skills.update', $this->skill->id), [
        'id' => $this->skill->id,
        'name' => 'Test Skill',
        'icon' => 'Test Icon',
        'url' => 'https://test.com',
        'display_order' => 1,
        'skill_type_id' => SkillType::factory()->create()->id,
    ])->assertOk();

    $skill = Skill::first();

    expect($skill)
        ->name->toBe('Test Skill')
        ->icon->toBe('Test Icon')
        ->url->toBe('https://test.com')
        ->display_order->toBe(1)
        ->skill_type_id->toBeInt();
});

<?php

declare(strict_types=1);

namespace Tests\Feature\Project;

use App\Enums\ProjectStatusCodeEnum;
use App\Models\Project;
use App\Models\User;

it('can create a project', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('projects.store'), [
        'title' => 'Test Project',
        'description' => 'Test Description',
        'url' => 'https://test.com',
        'repo_url' => 'https://test.com',
        'image' => 'https://test.com',
        'status' => ProjectStatusCodeEnum::NOT_MAINTAINED->value,
        'display_order' => 1,
    ]);

    $project = Project::first();

    expect($response)
        ->status()->toBe(302)
        ->and($project)
            ->title->toBe('Test Project')
            ->description->toBe('Test Description')
            ->url->toBe('https://test.com')
            ->repo_url->toBe('https://test.com')
            ->image->toBe('https://test.com')
            ->status->toBe(ProjectStatusCodeEnum::NOT_MAINTAINED->value)
            ->display_order->toBe(1);
});

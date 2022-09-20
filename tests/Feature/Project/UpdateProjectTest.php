<?php

declare(strict_types=1);

namespace Tests\Feature\Project;

use App\Enums\ProjectStatusCodeEnum;
use App\Models\Project;
use App\Models\User;

beforeEach(function () {
    $this->project = Project::factory()->create();
});

it('can update a project', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->patch(route('projects.update', $this->project->id), [
        'id' => $this->project->id,
        'title' => 'Test Project Updated',
        'description' => 'Test Description Updated',
        'url' => 'https://test-updated.com',
        'repo_url' => 'https://test-updated.com',
        'image' => 'https://test-updated.com',
        'status' => ProjectStatusCodeEnum::MAINTAINED->value,
        'display_order' => 2,
    ]);

    $project = Project::first();

    expect($response)
        ->status()->toBe(302)
        ->and($project)
            ->title->toBe('Test Project Updated')
            ->description->toBe('Test Description Updated')
            ->url->toBe('https://test-updated.com')
            ->repo_url->toBe('https://test-updated.com')
            ->image->toBe('https://test-updated.com')
            ->status->toBe(ProjectStatusCodeEnum::MAINTAINED->value)
            ->display_order->toBe(2);
});

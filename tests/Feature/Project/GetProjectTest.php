<?php

declare(strict_types=1);

namespace Tests\Feature\Project;

use App\Models\Project;
use App\Models\User;

beforeEach(function () {
    $this->project = Project::factory()->create();
});

it('can get a project', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('projects.index', $this->project->id))->assertOk();

    $projectsProps = $response->original->getData()['page']['props']['projects'][0];

    expect($projectsProps['title'])->toBe($this->project->title)
        ->and($projectsProps['description'])->toBe($this->project->description)
        ->and($projectsProps['url'])->toBe($this->project->url)
        ->and($projectsProps['repo_url'])->toBe($this->project->repo_url)
        ->and($projectsProps['status'])->toBe($this->project->status)
        ->and($projectsProps['display_order'])->toBe($this->project->display_order);
});

<?php

declare(strict_types=1);

namespace Tests\Feature\Project;

use App\Models\Project;
use App\Models\User;

beforeEach(function () {
    $this->project = Project::factory()->create();
});

it('can delete a project', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('projects.delete', $this->project->id));

    expect($response)
        ->status()->toBe(302)
        ->and(Project::find($this->project->id))->toBeNull();
});

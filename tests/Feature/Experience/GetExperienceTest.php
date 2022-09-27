<?php

declare(strict_types=1);

namespace Tests\Feature\Experience;

use App\Models\Experience;
use App\Models\User;

beforeEach(function () {
    $this->experience = Experience::factory()->create();
});

it('can return a list of experiences', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('experiences.index'))->assertOk();

    $experiencesProps = $response->original->getData()['page']['props']['experiences'][0];

    expect($experiencesProps['title'])->toBe($this->experience->title)
        ->and($experiencesProps['description'])->toBe($this->experience->description)
        ->and($experiencesProps['location'])->toBe($this->experience->location)
        ->and($experiencesProps['company'])->toBe($this->experience->company)
        ->and($experiencesProps['company_url'])->toBe($this->experience->company_url)
        ->and($experiencesProps['start_date'])->toBe($this->experience->start_date)
        ->and($experiencesProps['end_date'])->toBe($this->experience->end_date)
        ->and($experiencesProps['display_order'])->toBe($this->experience->display_order)
        ->and($experiencesProps['experience_type_id'])->toBe($this->experience->experience_type_id);
});

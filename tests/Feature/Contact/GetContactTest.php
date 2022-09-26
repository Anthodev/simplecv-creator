<?php

declare(strict_types=1);

namespace Tests\Feature\Contact;

use App\Models\Contact;
use App\Models\User;

beforeEach(function () {
    $this->contact = Contact::factory()->create();
});

it('can get a contact', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('contacts.index', $this->contact->id))->assertOk();

    $contactProps = $response->original->getData()['page']['props']['contacts'][0];

    expect($contactProps['name'])->toBe($this->contact->name)
        ->and($contactProps['icon'])->toBe($this->contact->icon)
        ->and($contactProps['url'])->toBe($this->contact->url)
        ->and($contactProps['display_order'])->toBe($this->contact->display_order);
});

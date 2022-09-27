<?php

declare(strict_types=1);

namespace Tests\Feature\Contact;

use App\Models\Contact;
use App\Models\User;

it('can create a contact', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('contacts.store'), [
        'name' => 'test',
        'icon' => 'test',
        'url' => 'http://test.io',
        'display_order' => 1,
    ])->assertRedirect(route('contacts.index'));

    $contact = Contact::first();

    expect($contact->name)->toBe('test')
        ->and($contact->icon)->toBe('test')
        ->and($contact->url)->toBe('http://test.io')
        ->and($contact->display_order)->toBe(1);
});

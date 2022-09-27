<?php

declare(strict_types=1);

namespace Tests\Feature\Contact;

use App\Models\Contact;
use App\Models\User;

beforeEach(function () {
    $this->contact = Contact::factory()->create();
});

it('can delete a contact', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->delete(route('contacts.delete', $this->contact->id))->assertRedirect(route('contacts.index'));

    expect(Contact::count())->toBe(0);
});

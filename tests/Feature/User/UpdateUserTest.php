<?php

declare(strict_types=1);

namespace Tests\Feature\User;

use App\Models\User;

it('can update a user', function (): void {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('users.update', $user->id), [
        'id' => $user->id,
        'display_name' => 'Test User',
        'description' => 'Test de texte de description',
    ]);

    $user = User::first();

    expect($response)
        ->status()->toBe(302)
        ->and($user)
            ->display_name->toBe('Test User')
            ->description->toBe('Test de texte de description');
});

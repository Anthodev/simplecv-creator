<?php

declare(strict_types=1);

namespace Tests\Feature\User;

use App\Models\User;

it('can update a user', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)->post(route('users.update', $user->id), [
        'id' => $user->id,
        'display_name' => 'Test User',
        'description' => 'Test de texte de description',
    ])->assertOk();

    $user = User::first();

    expect($user)
        ->display_name->toBe('Test User')
        ->description->toBe('Test de texte de description');
});

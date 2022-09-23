<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class UserController extends Controller
{
    public function update(UpdateUserRequest $request): RedirectResponse
    {
        $user = User::find($request->request->get('id'));
        $user->update($request->validated());

        return redirect()->route('dashboard')->with('message', 'User updated successfully.');
    }
}

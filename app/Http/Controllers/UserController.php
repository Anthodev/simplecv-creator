<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function update(UpdateUserRequest $request): RedirectResponse
    {
        $user = User::find($request->request->get('id'));

        $picturePath = $request->file('picture_path');

        if (null !== $picturePath) {
            $picturePath = Storage::putFileAs('files', $request->file('picture_path'), 'photo.'.$picturePath->extension());
        }

        $user->update([
            'display_name' => $request->request->get('display_name'),
            'description' => $request->request->get('description'),
            'picture_path' => $picturePath ?? $user->picture_path,
        ]);

        return redirect()->route('dashboard')->with('message', 'User updated successfully.');
    }
}

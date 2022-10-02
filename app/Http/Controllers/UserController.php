<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function update(UpdateUserRequest $request): Response
    {
        $user = User::find($request->request->get('id'));

        $picturePath = $request->file('picture_path');

        if (null !== $picturePath) {
            $picturePath = Storage::putFileAs('files', $request->file('picture_path'), 'photo.'.$picturePath->extension());
        }

        $user->update([
            'display_name' => $request->request->get('display_name'),
            'description' => $request->request->get('description'),
            'title' => $request->request->get('title'),
            'picture_path' => $picturePath ?? $user->picture_path,
        ]);

        return new JsonResponse();
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return \Auth::user()->id === User::first()->id;
    }

    public function rules(): array
    {
        return [
            'display_name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
        ];
    }
}

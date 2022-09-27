<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreExperienceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return \Auth::user()->id === User::first()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'location' => ['required', 'string', 'max:255'],
            'company' => ['required', 'string', 'max:255'],
            'company_url' => 'nullable|url',
            'start_date' => ['required', 'date'],
            'end_date' => 'nullable|date',
            'display_order' => ['required', 'integer'],
            'experience_type_id' => ['required', 'integer'],
        ];
    }
}

<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property string $title
 * @property string $description
 * @property string $location
 * @property string $company
 * @property string $company_url
 * @property string $start_date
 * @property string $end_date
 * @property int    $display_order
 * @property int    $experience_type_id
 */
class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'location',
        'company',
        'company_url',
        'start_date',
        'end_date',
        'display_order',
        'experience_type_id',
    ];
}

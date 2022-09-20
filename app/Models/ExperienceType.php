<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int     $id
 * @property string  $label
 * @property string  $code
 * @property HasMany $experiences
 */
class ExperienceType extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'code',
    ];
}

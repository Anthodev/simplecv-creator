<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int      $id
 * @property string   $name
 * @property string   $icon
 * @property string   $url
 * @property int      $display_order
 */
class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'icon',
        'url',
        'display_order',
    ];
}

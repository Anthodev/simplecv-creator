<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\ProjectStatusCodeEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int    $id
 * @property string $title
 * @property string $description
 * @property string $url
 * @property string $repo_url
 * @property string $image
 * @property int    $status
 * @property int    $display_order
 */
class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'url',
        'repo_url',
        'image',
        'status',
        'display_order',
    ];

    protected $casts = [
        'status' => ProjectStatusCodeEnum::class,
    ];
}

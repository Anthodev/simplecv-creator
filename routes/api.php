<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(ExperienceController::class)->group(function () {
        Route::post('experiences/add', 'store')->name('experiences.store');
        Route::patch('experiences/{id}/update', 'update')->name('experiences.update');
        Route::delete('experiences/{id}/delete', 'destroy')->name('experiences.delete');
    });

    Route::controller(ContactController::class)->group(function () {
        Route::post('contacts/add', 'store')->name('contacts.store');
        Route::patch('contacts/{id}/update', 'update')->name('contacts.update');
        Route::delete('contacts/{id}/delete', 'destroy')->name('contacts.delete');
    });

    Route::controller(ProjectController::class)->group(function () {
        Route::post('projects/add', 'store')->name('projects.store');
        Route::post('projects/{id}/update', 'update')->name('projects.update');
        Route::delete('projects/{id}/delete', 'destroy')->name('projects.delete');
    });

    Route::controller(SkillController::class)->group(function () {
        Route::post('skills/add', 'store')->name('skills.store');
        Route::patch('skills/{id}/update', 'update')->name('skills.update');
        Route::delete('skills/{id}/delete', 'destroy')->name('skills.delete');
    });
});

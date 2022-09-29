<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Controller::class, 'home'])->name('home');

Route::post('users/{id}/update', [UserController::class, 'update'])->middleware(['auth', 'api'])->name('users.update');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('experiences', [ExperienceController::class, 'index'])->middleware(['auth', 'verified'])->name('users.index');
Route::controller(ExperienceController::class)->middleware(['auth', 'api'])->group(function () {
    Route::post('experiences/add', 'store')->name('experiences.store');
    Route::patch('experiences/{id}/update', 'update')->name('experiences.update');
    Route::delete('experiences/{id}/delete', 'destroy')->name('experiences.delete');
});

Route::get('contacts', [ContactController::class, 'index'])->middleware(['auth', 'verified'])->name('contacts.index');
Route::controller(ContactController::class)->middleware(['auth', 'api'])->group(function () {
    Route::post('contacts/add', 'store')->name('contacts.store');
    Route::patch('contacts/{id}/update', 'update')->name('contacts.update');
    Route::delete('contacts/{id}/delete', 'destroy')->name('contacts.delete');
});

Route::get('projects', [ProjectController::class, 'index'])->middleware(['auth', 'verified'])->name('projects.index');
Route::controller(ProjectController::class)->middleware(['auth', 'api'])->group(function () {
    Route::post('projects/add', 'store')->name('projects.store');
    Route::post('projects/{id}/update', 'update')->name('projects.update');
    Route::delete('projects/{id}/delete', 'destroy')->name('projects.delete');
});

Route::get('skills', [SkillController::class, 'index'])->middleware(['auth', 'verified'])->name('skills.index');
Route::controller(SkillController::class)->middleware(['auth', 'api'])->group(function () {
    Route::post('skills/add', 'store')->name('skills.store');
    Route::patch('skills/{id}/update', 'update')->name('skills.update');
    Route::delete('skills/{id}/delete', 'destroy')->name('skills.delete');
});

require __DIR__.'/auth.php';

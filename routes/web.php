<?php

use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Models\User;
use Illuminate\Foundation\Application;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register') && User::count() === 0,
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::controller(ExperienceController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('experiences', 'index')->name('experiences.index');
    Route::post('experiences/add', 'store')->name('experiences.store');
    Route::patch('experiences/{id}/update', 'update')->name('experiences.update');
    Route::delete('experiences/{id}/delete', 'destroy')->name('experiences.delete');
});

Route::controller(ProjectController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('projects', 'index')->name('projects.index');
    Route::post('projects/add', 'store')->name('projects.store');
    Route::patch('projects/{id}/update', 'update')->name('projects.update');
    Route::delete('projects/{id}/delete', 'destroy')->name('projects.delete');
});

require __DIR__.'/auth.php';

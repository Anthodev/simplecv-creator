<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RefreshCsrfTokenController;
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

Route::get('/csrf-token', RefreshCsrfTokenController::class);

Route::get('/', [Controller::class, 'home'])->name('home');

Route::post('users/{id}/update', [UserController::class, 'update'])->middleware(['auth.session'])->name('users.update');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth.session'])->name('dashboard');

Route::get('experiences', [ExperienceController::class, 'index'])->middleware(['auth.session'])->name(
    'experiences.index',
);

Route::get('contacts', [ContactController::class, 'index'])->middleware(['auth.session'])->name('contacts.index');
Route::get('projects', [ProjectController::class, 'index'])->middleware(['auth.session'])->name('projects.index');
Route::get('skills', [SkillController::class, 'index'])->middleware(['auth.session'])->name('skills.index');

require __DIR__.'/auth.php';

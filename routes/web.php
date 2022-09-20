<?php

use App\Http\Controllers\ExperienceController;
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

Route::get('experiences', [ExperienceController::class, 'index'])->middleware(['auth', 'verified'])->name('experiences.index');
Route::post('experiences/add', [ExperienceController::class, 'store'])->middleware(['auth', 'verified'])->name('experiences.store');
Route::patch('experiences/{id}/update', [ExperienceController::class, 'update'])->middleware(['auth', 'verified'])->name('experiences.update');
Route::delete('experiences/{id}/delete', [ExperienceController::class, 'destroy'])->middleware(['auth', 'verified'])->name('experiences.delete');

require __DIR__.'/auth.php';

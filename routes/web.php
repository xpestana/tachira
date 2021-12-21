<?php

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
    return Inertia::render('Front/Home');
})->name('home');
Route::get('home-2', function () {
    return Inertia::render('Front/Home-2');
})->name('home.2');
Route::get('home-3', function () {
    return Inertia::render('Front/Home-3');
})->name('home.3');
Route::get('nuestra-empresa', function () {
    return Inertia::render('Front/Company');
})->name('about.us');
Route::get('servicios/{service}', function ($service) {
    return Inertia::render('Front/Services', compact('service'));
})->name('services');

/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
*/
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|

Route::get('/', function () {
    return view('welcome');
});
*/
Route::get('/p', function () {
    return view('principal');
})->name('principal');

Route::get('/', function () {
    return view('inicial');
})->name('inicial');
Route::get('/product', function () {
    return view('product');
})->name('product');

Route::get('/create', function () {
    return view('create');
})->name('create');

Route::resource('/producti', ProductController::class);
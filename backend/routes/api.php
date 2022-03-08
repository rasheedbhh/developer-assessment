<?php

use App\Http\Controllers\UserController;
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
Route::get('/', 'UserController@index');
Route::get('/user', function(Request $request){
    return $request->user();
})->middleware('auth:api');
Route::get('/getUsers','UserController@getUsers' )->middleware('auth:api');
Route::get('/chat/{id}','UserController@chat' )->middleware('auth:api');
Route::post('/directMessage', 'MessageController@sendDirectMessage')->middleware('auth:api');

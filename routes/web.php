<?php

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
    return view('contenido/contenido');
});
Route::get('/herramienta','herramientaController@index');
Route::post('/herramienta/registrar','herramientaController@store');
Route::put('/herramienta/actualizar','herramientaController@update');
Route::put('/herramienta/desactivar','herramientaController@desactivar');
Route::put('/herramienta/activar','herramientaController@activar');

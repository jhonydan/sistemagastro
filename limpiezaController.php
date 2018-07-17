<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Limpieza;

class limpiezaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!$request->ajax())return redirect('/');
        $buscar = $request->buscar;
        $criterio = $request->criterio;

           if($buscar ==''){
            $limpieza = Limpieza::orderBy('id_plimpieza','desc')->paginate(10);
            }else{
               $limpieza = Limpieza::where($criterio,'like','%'.$buscar.'%')->orderBy('id_plimpieza','desc')->paginate(10);
           }

        return [
          'pagination'=>[
              'total' => $limpieza->total(),
              'current_page' => $limpieza->currentPage(),
              'per_page' => $limpieza->perPage(),
              'last_page' => $limpieza->LastPage(),
              'from' => $limpieza->firstItem(),
              'to' => $limpieza->LastItem(),
          ],
            'limpieza'=>$limpieza
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!$request->ajax())return redirect('/');
        $limpieza = new Limpieza();
        $limpieza->nombre=$request->nombre;
        $limpieza->cantidad=$request->cantidad;
        $limpieza->descripcion=$request->descripcion;

        $limpieza->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!$request->ajax())return redirect('/');
        $limpieza = Limpieza::findOrFail($request->id_plimpieza);
        $limpieza->nombre=$request->nombre;
        $limpieza->cantidad=$request->cantidad;
        $limpieza->descripcion=$request->descripcion;

        $limpieza->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $limpieza = Limpieza::findOrFail($id);

        $limpieza->delete();

    }
    public function desactivar(Request $request)
    {
        $limpieza = Limpieza::findOrFail($request->id_plimpieza);
        $limpieza->condicion ='0';
        $limpieza->save();
    }
    public function activar(Request $request)
    {
        $limpieza = Limpieza::findOrFail($request->id_plimpieza);
        $limpieza->condicion ='1';
        $limpieza->save();
    }
}

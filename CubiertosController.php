<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cubiertos;

class CubiertosController extends Controller
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
            $cubiertos = Cubiertos::orderBy('id_cubiertos','desc')->paginate(10);
            }else{
               $cubiertos = Cubiertos::where($criterio,'like','%'.$buscar.'%')->orderBy('id_cubiertos','desc')->paginate(10);
           }

        return [
          'pagination'=>[
              'total' => $cubiertos->total(),
              'current_page' => $cubiertos->currentPage(),
              'per_page' => $cubiertos->perPage(),
              'last_page' => $cubiertos->LastPage(),
              'from' => $cubiertos->firstItem(),
              'to' => $cubiertos->LastItem(),
          ],
            'cubiertos'=>$cubiertos
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
        $cubiertos = new Cubiertos();
        $cubiertos->nombre=$request->nombre;
        $cubiertos->cantidad=$request->cantidad;
        $cubiertos->descripcion=$request->descripcion;

        $cubiertos->save();
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
        $cubiertos = Cubiertos::findOrFail($request->id_cubiertos);
        $cubiertos->nombre=$request->nombre;
        $cubiertos->cantidad=$request->cantidad;
        $cubiertos->descripcion=$request->descripcion;

        $cubiertos->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cubiertos = Cubiertos::findOrFail($id);

        $cubiertos->delete();

    }
    public function desactivar(Request $request)
    {
        $cubiertos = Cubiertos::findOrFail($request->id_cubiertos);
        $cubiertos->condicion ='0';
        $cubiertos->save();
    }
    public function activar(Request $request)
    {
        $cubiertos = Cubiertos::findOrFail($request->id_cubiertos);
        $cubiertos->condicion ='1';
        $cubiertos->save();
    }
}

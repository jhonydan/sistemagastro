<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\DB;
use App\Herramientas_Cocina;


class herramientaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!$request->ajax())return redirect('/');
        $herramientas = Herramientas_Cocina::paginate(10);
        return [
          'pagination'=>[
              'total' => $herramientas->total(),
              'current_page' => $herramientas->currentPage(),
              'per_page' => $herramientas->perPage(),
              'last_page' => $herramientas->LastPage(),
              'from' => $herramientas->firstItem(),
              'to' => $herramientas->LastItem(),
          ],
            'herramientas'=>$herramientas
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
        $herramienta = new Herramientas_Cocina();
        $herramienta->nombre=$request->nombre;
        $herramienta->cantidad=$request->cantidad;

        $herramienta->save();
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
    public function update(Request $request)
    {
        if (!$request->ajax())return redirect('/');
        $herramienta = Herramientas_Cocina::findOrFail($request->id_herramienta);
        $herramienta->nombre=$request->nombre;
        $herramienta->cantidad=$request->cantidad;

        $herramienta->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $herramienta = Herramientas_Cocina::findOrFail($id);

        $herramienta->delete();


    }
    public function desactivar(Request $request)
    {
        $herramienta = Herramientas_Cocina::findOrFail($request->id_herramienta);
        $herramienta->condicion ='0';
        $herramienta->save();
    }
    public function activar(Request $request)
    {
        $herramienta = Herramientas_Cocina::findOrFail($request->id_herramienta);
        $herramienta->condicion ='1';
        $herramienta->save();
    }
}

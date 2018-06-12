 @extends('principal')

 @section('contenido')
     <template v-if="menu==0">
         <br><br><br> <br><br><br>
         <h1>bienvenido al panel de inicio del administrador</h1>


     </template>

     <template v-if="menu==1">
         <br><br><br> <br><br><br>
    <herramientas></herramientas>
     </template>

     <template v-if="menu==2">
         <h1></h1>
     </template>
 @endsection

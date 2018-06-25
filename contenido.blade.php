 @extends('principal')

 @section('contenido')


     <template v-if="menu==1">
    <herramientas></herramientas>
     </template>

     <template v-if="menu==2">
         <h1></h1>
     </template>
 @endsection

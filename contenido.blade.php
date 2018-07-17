 @extends('principal')

 @section('contenido')

     <template v-if="menu==0">
        <usuarios></usuarios>
     </template>

     <template v-if="menu==1">
        <herramientas></herramientas>
     </template>

     <template v-if="menu==2">
         <equipos></equipos>
     </template>

     <template v-if="menu==3">
         <cristaleria></cristaleria>
     </template>

     <template v-if="menu==4">
         <mueble></mueble>
     </template>

     <template v-if="menu==5">
         <cubiertos></cubiertos>
     </template>

     <template v-if="menu==6">
         <limpieza></limpieza>
     </template>
     
 @endsection

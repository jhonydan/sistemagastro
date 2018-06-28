<template>
    <div class="main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
            <div class="container-fluid">
                <!-- OVERVIEW -->
                <div class="panel panel-headline">
                    <div class="panel-heading">
                        <h3 class="pb-2 display-4">Registro de Herramientas</h3>
                        <p class="panel-subtitle">Period: Oct 14, 2018 - Oct 21, 2018</p>
                    </div>
                    <button type="button" class="btn btn-secondary mb-1" @click="AbrirModal('herramienta','registrar')"><i class="fa fa-plus"></i>
                        Agregar
                    </button>


                    <div class="modal fade" tabindex="-1"  :class="{'mostrar' : modal}" role="dialog" aria-labelledby="mediumModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="mediumModalLabel" v-text="tituloModal"></h5>
                                    <button type="button" class="close" @click="cerrarModal()" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label  class=" form-control-label">Nombre</label>
                                        <input type="text"   v-model="nombre" placeholder="Inserta Nombre de Herramienta" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label  class=" form-control-label">Cantidad</label>
                                        <input type="number"  v-model="cantidad" placeholder="Cantidad" class="form-control">
                                    </div>
                                    <div v-show="errorHerramienta" class="form-group row  div-error">
                                        <div class="text-center">
                                            <div v-for="error  in errorMostrarMsjHerramienta" :key="error" v-text="error">

                                            </div>

                                        </div>

                                    </div>
                                </div>


                                <div class="modal-footer">

                                    <button type="button" class="btn btn-secondary" @click="cerrarModal()">Cancelar</button>
                                    <button type="button" class="btn btn-primary" v-if="tipoAccion==1" @click="RegistrarHerramientas()">Aceptar</button>
                                    <button type="button" class="btn btn-primary" v-if="tipoAccion==2" @click="ActualizarCategoria()">Actualizar</button>


                                </div>


                            </div>

                        </div>
                    </div>

                    <div class="animated fadeIn">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <strong class="card-title">Data Table</strong>
                                    </div>
                                    <div class="card-body">

                                        <div class="col-lg-6">
                                        <div class="row form-group">
                                            <div class="col col-md-12">
                                                <div class="input-group">
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-primary">
                                                            <i class="fa fa-search"></i> Search
                                                        </button>
                                                    </div>
                                                    <input type="text" id="input1-group2" name="input1-group2" placeholder="Username" class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Cantidad</th>
                                                <th>Descripcion</th>
                                                <th>Acciones</th>
                                                <th>Estado</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(herramienta, index) in arrayHerramienta" :key="herramienta.id_herramienta">
                                                <td v-text="herramienta.id_herramienta"></td>
                                                <td v-text="herramienta.nombre"></td>
                                                <td v-text="herramienta.cantidad"></td>
                                                <td></td>
                                                <td>
                                                    <button  class="btn btn-warning" @click="AbrirModal('herramienta','actualizar',herramienta)">
                                                        <i class="fa  fa-pencil"></i>
                                                    </button>

                                                <template v-if="herramienta.id_herramienta">
                                                    <button type="button"  class="btn btn-danger" @click="eliminarHerramienta(herramienta.id_herramienta,index)">
                                                        <i class="fa  fa-trash-o"></i>
                                                    </button>
                                                </template>
                                                </td>
                                                <td>Altas y bajas</td>
                                            </tr>

                                            </tbody>
                                        </table>
                                        <nav>
                                            <ul class="pagination">
                                             <li class="page-item" v-if="pagination.current_page>1">
                                                 <a href="#" class="page-link" @click.prevent="cambiarPagina(pagination.current_page-1)">anterior</a>
                                             </li>
                                                <li class="page-item" v-for="page in pageNumber" :key='page' :class="[page== isActivated? 'active' : '']">
                                                    <a href="#" class="page-link" @click.prevent="cambiarPagina(page)" v-text="page">1</a>
                                                </li>

                                                <li class="page-item" v-if="pagination.current_page<pagination.last_page">
                                                    <a href="#" class="page-link"  @click.prevent="cambiarPagina(pagination.current_page+1)">siguiente</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div><!-- .animated -->
                </div>
                <!-- END OVERVIEW -->



            </div>
        </div>
        <!-- END MAIN CONTENT -->
    </div>

</template>

<script>

    export default {
        //Declarar variables
        data(){
            return {
                id: 0,
                nombre: '',
                cantidad: '',
                arrayHerramienta: [],
                modal: 0,
                tituloModal: '',
                tipoAccion: 0,
                errorHerramienta: 0,
                errorMostrarMsjHerramienta: [],
                pagination :{
                    "total": 0,
                    "per_page": 0,
                    "current_page": 0,
                    "last_page": 0,
                    "from": 0,
                    "to": 0,
                },
                offset:3
            }
        },
        computed:{
            isActivated:function () {
                return this.pagination.current_page;
            },
            pageNumber:function(){
               if (!this.pagination.to){
                   return[];
               }
               var from = this.pagination.current_page - this.offset;
               if (from < 1){
                   from = 1;
               }
               var to = from + (this.offset * 2);
               if (to >= this.pagination.last_page){
                   to = this.pagination.last_page;
               }
               var pagesArray =[];
               while (from <= to){
                   pagesArray.push(from);
                   from++;
               }
               return pagesArray;
             }


        },
        methods: {

          listarHerramientas(page){

              let me =this;
              var url='/herramienta?page='+page;
              axios.get(url).then(function (response) {
                  var  respuesta=response.data;
                    me.arrayHerramienta = respuesta.herramientas.data;
                    me.pagination=respuesta.pagination;


                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          },
            cambiarPagina(page){
              let me = this;
              me.pagination.current_page=page;
              me.listarHerramientas(page);

            },
            RegistrarHerramientas(){
                if (this.ValidarHerramientas()==0){
                    return;
                }

                let me =this;
                axios.post('/herramienta/registrar',{
                    'nombre':this.nombre,
                    'cantidad':this.cantidad
                }).then(function (response) {
                    me.cerrarModal();
                    me.listarHerramientas();
                    console.log(response);
                    swal("Exito", "Se inserto correctamente!", "success");
                })
                    .catch(function (error) {
                        console.log("es un error de post");
                    });

            },
            ActualizarCategoria(){

                let me =this;
                axios.put('/herramienta/actualizar',{
                    'nombre':this.nombre,
                    'cantidad':this.cantidad,
                    'id_herramienta': this.id
                }).then(function (response) {
                    me.cerrarModal();
                    me.listarHerramientas();
                    console.log(response);
                    swal("Exito", "Se Actualizo correctamente!", "success");
                })
                    .catch(function (error) {
                        console.log(error);
                    });

            },
            eliminarHerramienta(id_herramienta){
                swal({
                    title: 'Estas seguro?',
                    text: "No podras recuperar la informacin!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, deseo eliminarlo!'
                }).then((result) => {
                    if (result.value) {
                        let me =this;

                        axios.delete('/herramienta/'+id_herramienta).then(response=>{
                           id:id_herramienta
                            console.log(response);
                        }).then(function (response) {
                            me.listarHerramientas();
                            swal(

                                'Eliminado!',
                                'Tu fila a sido eliminada.',
                                'success'

                            );
                            console.log(response);
                        })
                            .catch(function (error) {
                                console.log("es un error de post");
                            });


                    }
                });



            },

            desactivarHerramienta(id_herramienta){
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        let me =this;
                        axios.delete('/herramienta/eliminar',{
                             'id':id_herramienta
                        }).then(function (response) {
                            me.listarHerramientas();
                            swal(

                                'Deleted!',
                                'Your file has been deleted.',
                                'success'

                            )
                        }).catch(function (error) {
                                console.log("es un error de post");
                            });


                    }
                });

            },


            ValidarHerramientas(){
              this.errorHerramienta=0;
              this.errorMostrarMsjHerramienta=[];

              if (!this.nombre)this.errorMostrarMsjHerramienta.push("El nombre no puede estar vacio");


                if (!this.errorMostrarMsjHerramienta.length)this.errorHerramienta=1;
                return this.errorHerramienta;
            },
            cerrarModal(){
              this.modal=0;
              this.tituloModal='';
              this.nombre='';
              this.cantidad='';

            },
            AbrirModal(modelo,accion,data=[]){
                    switch (modelo) {
                        case "herramienta":
                            {

                            switch (accion) {
                                case "registrar": {
                                    this.modal =1;
                                    this.tituloModal='Registrar Herramienta';
                                    this.nombre='';
                                    this.cantidad='';
                                    this.tipoAccion =1;
                                    break;
                                }

                                case 'actualizar': {
                                    this.modal =1;
                                    this.tituloModal='Actualizar categoria';
                                    this.tipoAccion =2;
                                    this.nombre=data['nombre'];
                                    this.cantidad=data['cantidad'];
                                    this.id=data['id_herramienta'];
                                    break;
                                }
                            }
                    }
                    }
            }
        },
        mounted() {
          this.listarHerramientas();

        }
    }





</script>
<style>
    .mostrar {
        display: list-item !important;
        opacity: 1 !important;
        position: absolute !important;
        background-color: #3c29297a !important;
    }
    .modal-content{
        width: 100% !important;
        position: absolute !important;
    }
    .div-error{
        display:flex;
        justify-content: center;
    }
    .text-error{
        color: red !important;
        font-weight:bold;
    }

</style>

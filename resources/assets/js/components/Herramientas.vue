<template>
    <div class="main">
        <!-- MAIN CONTENT -->
        <div class="main-content">
            <div class="container-fluid">
                <!-- OVERVIEW -->
                <div class="panel panel-headline">
                    <div class="panel-heading">
                        <h3 class="panel-title">Registro de Herramientas</h3>
                        <p class="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
                    </div>
                    <div class="animated fadeIn">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header">
                                        <strong class="card-title">Data Table</strong>
                                    </div>
                                    <div class="card-body">
                                        <table id="bootstrap-data-table" class="table table-striped table-bordered">
                                            <thead>
                                            <tr>

                                                <th>Nombre</th>
                                                <th>Imagen</th>
                                                <th>Cantidad</th>
                                                <th>Estado</th>
                                                <th>Accion</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="herramientas in arrayHerramienta" :key="herramientas.id">
                                                <td v-text="herramientas.nombre"></td>
                                                <td><span class="photo media-left"><img alt="avatar" src="images/admin.jpg"></span></td>
                                                <td v-text="herramientas.cantidad"></td>
                                                <td v-text="herramientas.condicion"></td>
                                                <td>
                                                    <a class="btn btn-primary" href="#" role="button"><i class="fa fa-pencil"></i></a>
                                                    <a class="btn btn-danger" href="#" role="button"><i class="fa fa-trash-o"></i></a>

                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
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
        data(){
            return{
                nombre : '',
                cantidad : '',
                arrayHerramienta: []
            }
        },
        methods: {
          listarHerramientas(){
              let me =this;
              axios.get('/herramienta').then(function (response) {
                    me.arrayHerramienta = response.data;
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          }
        },
        mounted() {
          this.listarHerramientas();
        }
    }





</script>

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
                    <div class="panel-body">
                        <div class="row">


                        </div>
                        <div class="row">
                            <div class="col-md-9">
                                <div id="headline-chart" class="ct-chart"></div>
                            </div>
                            <div class="panel">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Basic Table</h3>
                                </div>
                                <div class="panel-body">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Steve</td>
                                            <td>Jobs</td>
                                            <td>@steve</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Simon</td>
                                            <td>Philips</td>
                                            <td>@simon</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jane</td>
                                            <td>Doe</td>
                                            <td>@jane</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
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
                cantidad : ''
            }
        },
        methods: {
          listarHerramientas(){
              axios.get('/herramienta').then(function (response) {
                      console.log(response);
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
          }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

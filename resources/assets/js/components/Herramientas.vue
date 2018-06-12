<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
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

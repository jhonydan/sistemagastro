let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
'resources/assets/plantilla/css/main.css',
'resources/assets/plantilla/css/demo.css',
'resources/assets/plantilla/vendor/bootstrap/css/bootstrap.min.css',
'resources/assets/plantilla/css/font-awesome/css/font-awesome.min.css',
'resources/assets/plantilla/css/linearicons/style.css',
'resources/assets/plantilla/vendor/chartist/css/chartist-custom.css',
    
], 'public/css/plantilla.css');

mix.scripts([

'resources/assets/plantilla/vendor/jquery/jquery.min.js',
'resources/assets/plantilla/vendor/bootstrap/js/bootstrap.min.js',
'resources/assets/plantilla/vendor/jquery-slimscroll/jquery.slimscroll.min.js',
'resources/assets/plantilla/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js',
'resources/assets/plantilla/vendor/chartist/js/chartist.min.js',
'resources/assets/plantilla/js/klorofil-common.js',
    
], 'public/js/plantilla.js')
.js(['resources/assets/js/app.js' ],'public/js/app.js');
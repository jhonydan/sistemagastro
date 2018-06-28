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

    'resources/assets/plantilla/css/normalize.css',
    'resources/assets/plantilla/css/bootstrap.min.css',
    'resources/assets/plantilla/css/font-awesome.min.css',
    'resources/assets/plantilla/css/themify-icons.css',
    'resources/assets/plantilla/css/flag-icon.min.css',
    'resources/assets/plantilla/css/cs-skin-elastic.css',

], 'public/css/plantilla.css');

mix.scripts([


    'resources/assets/plantilla/js/plugins.js',
    'resources/assets/plantilla/js/main.js',
     'resources/assets/plantilla/js/vendor/jquery-2.1.4.min.js',
    'resources/assets/plantilla/js/lib/chart-js/Chart.bundle.js',
    'resources/assets/plantilla/js/dashboard.js',
    'resources/assets/plantilla/js/widgets.js',
    'resources/assets/plantilla/js/lib/vector-map/jquery.vmap.js',
    'resources/assets/plantilla/js/lib/vector-map/jquery.vmap.min.js',
    'resources/assets/plantilla/js/lib/vector-map/jquery.vmap.sampledata.js',
    'resources/assets/plantilla/js/lib/vector-map/country/jquery.vmap.world.js',
    'resources/assets/plantilla/js/sweetalert2.all.js',

], 'public/js/plantilla.js')

.js(['resources/assets/js/app.js' ],'public/js/app.js');


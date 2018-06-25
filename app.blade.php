<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/css/bootstrap.css">
    <title>Inicia sesión</title>
</head>
<body>
    <div class="container">
        <hr>
        @if (session() -> has('flash'))
        	<div class="alert alert-info">{{ session('flash') }}</div>
        @endif 
        @yield('content')
    </div>

</body>
</html>
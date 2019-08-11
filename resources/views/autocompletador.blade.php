<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <link rel="stylesheet" href="{{asset('css/app.css')}}">


    <title>Prueba de componentes</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->

</head>

<body>
    <div class="flex-center position-ref full-height">
        @if (Route::has('login'))
        <div class="top-right links">
            @auth
            <a href="{{ url('/home') }}">Home</a>
            @else
            <a href="{{ route('login') }}">Login</a>

            @if (Route::has('register'))
            <a href="{{ route('register') }}">Register</a>
            @endif
            @endauth
        </div>
        @endif

        <div class="top-left links">
            <a href="{{ url('/autocompletador') }}">Autocompletador</a>
            <a href="{{ url('/direccionrender') }}">Direccion</a>

            {{-- <a href="{{ route('login') }}">Login</a>
            <a href="{{ route('register') }}">Register</a> --}}
        </div>

        <div id="app">
            {{-- <autocomplete-component></autocomplete-component> --}}
            {{-- <maps-component></maps-component> --}}
            {{ csrf_field() }}
            <div class="col-sm-12">
                <data-table clase="table table-bordered table-sm table-hover table-centered">
                        {{-- <template #th>
                                <td>
                                    algo
                                </td>
                            </template>

                    <template #td>
                        <td>
                            Hola
                        </td>
                    </template> --}}
                    
                </data-table>

                {{-- <pruebas-com/> --}}

            </div>
        </div>
    </div>
</body>


<script src="{{asset('js/app.js')}}"></script>

</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Stock Management System</title>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    </head>
<body>
   
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <img width="5%" src="https://play-lh.googleusercontent.com/w_MdcOLs12BVtSC96znbLhJ6Lh-CIZ3jy0STwvkCIrYbQs7toORLWh6AbflkaaxnoTA" alt="Logo"> 
        &nbsp;
        <a class="navbar-brand" href="#"> <b> Stock</b> Management </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
           
                <li class="nav-item ">
                    <a class="nav-link" href="{{route('inicial')}}"> Home</a>
                </li>


            </ul>

                          

        </div>
    </nav>

    @if(session('mensagem'))

    <div class="alert alert-success">
        {{session('mensagem')}}
    </div>

    @endif

    @if(session('mensagem2'))

    <div class="alert alert-danger">
        {{session('mensagem2')}}
    </div>

    @endif

    

   

    @yield('conteudo')

   

  
   
  
    <br>
    <footer class="fixed-bottom">
        <div class="bg-info">
            <span class="text-white">TurnoverBnB - Fullstack - Icaro Quintão</span>
        </div>
    </footer>
    <script src="/js/app.js"></script>

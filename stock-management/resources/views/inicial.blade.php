@extends('principal')


@section('conteudo')

<!--<div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Doe sangue</h1>
      <p class="lead">Salve vidas!</p>
    </div>
  </div>-->
  <div class="row  bg-info">

    <div class="col-2">
        
    </div>
    <div class="col">
        <div class="jumbotron jumbotron-fluid bg-white">
            <div class="container">
              <h1 class="display-4 text-info"> Stock Management System</h1>
   
            </div>
          </div>
    </div>
    <div class="col-2">

    </div>
</div>

        <div class="container-fluid">
<br>
             <div class="row">
                <div class="col">
                    </div>
        
                <div class="col">
                    <p>  <a type="button" class="btn btn-info btn-lg btn-block" href="{{route('create')}}"><i class="far fa-list-alt"></i> Create a product</a></p>
               
                </div>
                <div class="col">
                     </div>
                
            </div>
        
            <div class="row">
                <div class="col">
                      </div>
        
                <div class="col">
                    <p> <a type="button" class="btn btn-info btn-lg btn-block" href="{{route('product')}}"> <i class="fas fa-users"></i> Products</a></p>
              
                </div>
                <div class="col">
                    </div>
                
            </div>
        
            <div class="row">
                <div class="col">
                   
                </div>
        
                <div class="col">
                    <p> <a type="button" class="btn btn-info btn-lg btn-block" href=""><i class="far fa-list-alt"></i> History of product</a></p>
                
                </div>
                <div class="col">
                     </div>
               
            </div>
            <div class="row">
                <div class="col">
                   
                </div>
        
                <div class="col">
                    <p> <a type="button" class="btn btn-info btn-lg btn-block" href=""> <i class="fas fa-map-marker-alt"></i> Bulk update feature</a></p>
               
                </div>
                <div class="col">
                     </div>
               
            </div>
        
 
        
        
            
            </div>
        
        </div>
        
        
    </div>
    
</div>

    
@endsection
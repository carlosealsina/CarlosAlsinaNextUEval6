//función para mostrar todos los datos
$(document).ready(function(){

  document.querySelector('#mostrarTodos').addEventListener('click', mostrarTodos);
  function mostrarTodos(){
    
    $.ajax({
      type:'GET',
      url:'./buscador.php?opcion=1',
      data:{},
      success: function(res){
        var datos = JSON.parse(res);
        //console.log(datos);
        let respuesta = document.querySelector('#respuesta');
          respuesta.innerHTML = '';
          for(let item of datos){
            respuesta.innerHTML += '<div class="tituloContenido"><div class=" card horizontal"><div class="card-image"><img src="img/home.jpg"></div><div class="card-stacked"><div class="card-content"><p><b>Dirección:</b> '+item.Direccion+'<br><b>Ciudad: </b>'+item.Ciudad+'<br><b>Teléfono: </b>'+item.Telefono+'<br><b>Código Postal:</b> '+item.Codigo_Postal+'<br><b>Tipo:</b> '+item.Tipo+'<br><b>Precio:</b> <div class="precioTexto" style="margin-left:50px; margin-top:-27px;">'+item.Precio+'</div></p></div><div class="card-action"><a style="color:black" href="#"><b>VER MÁS</b></a></div></div></div></div>';
          }
      }
    })

  }
  
  // consulta y cargue de selectCiudad
  $.ajax({
    url:'./buscador.php?opcion=2',
    type:'GET',
    data:{},
    success: function(res){
      let datos=JSON.parse(res);
      //console.log(datos);
      for (var i=0; i<=100; i++) {
        if(datos[i]!=undefined){
          //console.log(datos[i]);
          $("#selectCiudad").append("<option value="+datos[i]+">" + datos[i] + "</option>");
          $('select').formSelect();
        }
      }
    }
  })

  // consulta y cargue de selecTipo
  $.ajax({
    url:'./buscador.php?opcion=3',
    type:'GET',
    data:{},
    success: function(res){
      let datos=JSON.parse(res);
      //console.log(datos);
      for (var i=0; i<=100; i++) {
        if(datos[i]!=undefined){
          $("#selectTipo").append('<option value=' + datos[i] + '>' + datos[i] + '</option>');
          $('select').formSelect();
        }
      }
    }
  })

  $("#formulario").on('click', function(e){
    e.preventDefault();
    var precio = $("#rangoPrecio").data("ionRangeSlider");
    var minimo = precio.result.from;
    var maximo = precio.result.to;

    $.ajax({
      url:'./buscador.php?opcion=4',
      type:'GET',
      data:{minimo:minimo, maximo:maximo},
      success:function(res){
        console.log(res);
      }
    })

  })

})


/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
//playVideoOnScroll();



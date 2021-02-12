$(document).ready(function(){

	document.querySelector('#mostrarTodos').addEventListener('click', mostrarTodos);
	function mostrarTodos(){
		const xhttp = new XMLHttpRequest();
		xhttp.open('GET', './data-1.json', true);
		xhttp.send();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				let datos = JSON.parse(this.responseText);
				//console.log(datos);
				let respuesta = document.querySelector('#respuesta');
				respuesta.innerHTML = '';
				for(let item of datos){
					respuesta.innerHTML += '<div class="tituloContenido"><div class=" card horizontal"><div class="card-image"><img src="img/home.jpg"></div><div class="card-stacked"><div class="card-content"><p><b>Dirección:</b> '+item.Direccion+'<br><b>Ciudad: </b>'+item.Ciudad+'<br><b>Teléfono: </b>'+item.Telefono+'<br><b>Código Postal:</b> '+item.Codigo_Postal+'<br><b>Tipo:</b> '+item.Tipo+'<br><b>Precio:</b> <div class="precioTexto" style="margin-left:50px; margin-top:-27px;">'+item.Precio+'</div></p></div><div class="card-action"><a style="color:black" href="#"><b>VER MÁS</b></a></div></div></div></div>';

				}
				
				
			}
			
			
		}
	}


	
	
      

})
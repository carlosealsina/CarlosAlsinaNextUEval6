$(document).ready(function(){

	document.querySelector('#mostrarTodos').addEventListener('click', traerDatos);

	function traerDatos(){

		const xhttp = new XMLHttpRequest();
		xhttp.open('GET', './data-1.json', true);
		xhttp.send();
		xhttp.onreadystatechange = function(){

			if(this.readyState == 4 && this.status == 200){

				let datos = JSON.parse(this.responseText);
				console.log(datos);
				let respuesta = document.querySelector('#respuesta');
				respuesta.innerHTML = '';

				for(let item of datos){
					//console.log(item.Ciudad);
					respuesta.innerHTML += '<div class="itemMostrado"><img width="250" height="150" src="img/home.jpg"><div class="card-stacked"><div style="margin-left:20px"><h6>Dirección: '+item.Direccion+'<br>Ciudad: '+item.Ciudad+'<br>Teléfono: '+item.Telefono+'<br>Código Postal: '+item.Codigo_Postal+'<br>Tipo: '+item.Tipo+'<br>Precio: <p class="precioTexto">'+item.Precio+'</p></h6></div></div></div>'
					//$("#selectCiudad").append("<option>"+item.Ciudad+"</option>");
				}

				

			}

		}

	}



})
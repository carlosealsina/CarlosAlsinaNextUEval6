<?php

$mt=fopen("data-1.json", "r");
$mostrar_todos=fread($mt, filesize("data-1.json"));

if(isset($_GET['opcion'])){
	$opcion=$_GET['opcion'];

	if($opcion==1){
		echo ($mostrar_todos);
	}

	if($opcion==2){
		$ciudades=array();
		$nciudades=array();
		$array_mostrar_todos=json_decode($mostrar_todos, true);
		foreach ($array_mostrar_todos as $int) {	
			$ciudades[]=$int['Ciudad'];
		}
		$array_ciudades=array_unique($ciudades);
		echo (json_encode($array_ciudades));
	}

	if($opcion==3){
		$tipo=array();
		$ntipo=array();
		$array_mostrar_todos=json_decode($mostrar_todos, true);
		foreach ($array_mostrar_todos as $int) {
			$tipo[]=$int['Tipo'];
		}
		$array_tipo=array_unique($tipo);
		echo (json_encode($array_tipo));
	}

	if($opcion==4){
		$precio=array();
		$minimo=$_GET['minimo'];
		$minimo=$minimo/1000;
		$maximo=$_GET['maximo'];

		$array_mostrar_todos=json_decode($mostrar_todos, true);
		foreach ($array_mostrar_todos as $int) {
			$precio=$int['Precio'];
			echo $precio;
			//echo $minimo;
			/*if($precio>$minimo){
				echo $precio;
			}*/
		}
		//echo (json_encode($ciudad));
	}



fclose($mt);
}


?>
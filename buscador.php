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
		$res_rang=array();
		$precio=array();
		$minimo=$_GET['minimo'];
		$maximo=$_GET['maximo'];
		$ciudadf=$_GET['ciudad'];
		$tipof=$_GET['tipo'];

		$array_mostrar_todos=json_decode($mostrar_todos, true);
		foreach ($array_mostrar_todos as $int) {
			$precio=$int['Precio'];
			$precio=substr($precio, 1);
			$precio=str_replace(',', '', $precio);
			$Ciudad=$int['Ciudad'];

			$Tipo=$int['Tipo'];
			if($precio>$minimo && $precio<$maximo && $ciudadf==$Ciudad && $tipof==$Tipo){
				
				$res_rang[]=array("Id"=>$int['Id'],"Direccion"=>$int['Direccion'],"Ciudad"=>$int['Ciudad'],"Telefono"=>$int['Telefono'],"Codigo_Postal"=>$int['Codigo_Postal'],"Tipo"=>$int['Tipo'],"Precio"=>$int['Precio']);

			}
			if($precio>$minimo && $precio<$maximo && $ciudadf==$Ciudad && $tipof==''){
				
				$res_rang[]=array("Id"=>$int['Id'],"Direccion"=>$int['Direccion'],"Ciudad"=>$int['Ciudad'],"Telefono"=>$int['Telefono'],"Codigo_Postal"=>$int['Codigo_Postal'],"Tipo"=>$int['Tipo'],"Precio"=>$int['Precio']);

			}
			if($precio>$minimo && $precio<$maximo && $ciudadf=='' && $tipof==$Tipo){
				
				$res_rang[]=array("Id"=>$int['Id'],"Direccion"=>$int['Direccion'],"Ciudad"=>$int['Ciudad'],"Telefono"=>$int['Telefono'],"Codigo_Postal"=>$int['Codigo_Postal'],"Tipo"=>$int['Tipo'],"Precio"=>$int['Precio']);

			}


		}
		echo (json_encode($res_rang));
	}



fclose($mt);
}


?>
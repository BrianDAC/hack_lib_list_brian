function hack_delete(posicion, arreglo) {
	var arreglo_nuevo = [];
	for (var i = 0; i < arreglo.length; i++) {
		if(i!=posicion){
			arreglo_nuevo.push(arreglo[i])
		}
	}
	return arreglo_nuevo
}





function hack_pop(arreglo) {
		var arreglo_nuevo1 = [];
	for (var i = 0; i < arreglo.length; i++) {
		if(i!=0){
			arreglo_nuevo1.push(arreglo[i])
		}
	}
	return arreglo_nuevo1
}





function hack_push(elemento, arreglo){
 arreglo.push(elemento)
	return arreglo
}





function hack_search(elemento, arreglo) {
	var posicion = -1
	for(var i = 0;i<arreglo.length;i++){
		if(arreglo[i]==elemento){
			posicion=i
		} 
	}
	return posicion
}


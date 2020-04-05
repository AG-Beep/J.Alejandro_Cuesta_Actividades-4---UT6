'use strict;'
let cadena1 = prompt("Introduce una palabra")

function invertir(cadena) {
	
	let x = cadena1.length;
	let cadenaInvertida = "";

	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena1.charAt(x);
		x--;
	}
	
	return cadenaInvertida;
}


if ( cadena1!=invertir(cadena1) )
console.log("No es un palindromo")
else
console.log("Es un palindromo")
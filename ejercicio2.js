'use strict'

function palabra()
{
let cadena1 = prompt("Introduce una palabra")
console.log("La cadena " + cadena1 + " tiene " + cadena1.length + " caracteres")

console.log("La cadena en mayúsculas es: " + cadena1.toUpperCase())
console.log("La cadena en mayúsculas es: " + cadena1)

let contador= 0
for(let i=0;i<cadena1.length;i++)
{
    if (cadena1.charAt(i)=='a')
            contador++
    else if (cadena1.charAt(i)=='e')
            contador++
    else if (cadena1.charAt(i)=='i')
            contador++
    else if (cadena1.charAt(i)=='o')
            contador++
    else if (cadena1.charAt(i)=='u')
            contador++
}  console.log("La cadena " + cadena1 + " contiene " + contador + " vocales.")
}

palabra()
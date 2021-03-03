"use strict" //Obliga a usar buenas parcitas en declarar variables y palabras reservadas
// alert('Hola desde un archivo externo');
var name = 'Alejo';
console.log('Hola consola', name);
// Coment
/* Other coment*/
function saludo() {
    // name='ak47' asi se sobre escribe la variable global
    let name = 'ak47'; // de esta forma se mastiene 'Alejo' como global
    let age = 34; //let se usa para limitar el alcanze
    console.log(name);
    console.log(age); //age no aparece en la consola porque esta definido el alcanze
}

saludo();

const pi = 3.1416; // asi se define una constante
// pi = 5; //ERROR
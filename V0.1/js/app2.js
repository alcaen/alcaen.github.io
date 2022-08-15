"use strict";

var edad = 35;
var cantidad = '100';
var nuevaCantidad = Number(cantidad); // ayuda a convertir a numeros
//parseInt() A enteros
//parseFloat() A flotantes

var bebida = 'awa';
var comida = "ceviche"; //comilla doble o sencilla da lo mismo es string

var edadtxt = String(edad);
var action = false; // false
var state = Boolean(10 > 9); //true
var fecha = new Date(); //new date fecha actual nueva
console.log(fecha);
var simbolo1 = Symbol();
var ambiente = Symbol('dev');

//JSON

var persona = {
    nombre: 'Alejo',
    edad: 21
};
var personajson = JSON.stringify(persona); //TO JSON
var newpersona = JSON.parse(personajson); //TO Object
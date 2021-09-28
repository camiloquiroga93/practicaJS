// js //

// operaciones matematicas //

// suma //

function calcularSuma(params) {
    num1 = parseInt (document.getElementById('num1').value);
    num2 = parseInt (document.getElementById('num2').value);

     var resultado =  num1 + num2 ;
 
    mensaje ('El Resultado es: ' + resultado);

}

const mensaje = (mensaje) => document.getElementById("textResultado").value = mensaje; 

//fin suma //

//restar //

function CalcularRestar(params) {
    num1 = parseInt (document.getElementById('num1').value);
    num2 = parseInt (document.getElementById('num2').value);

     var resultado =  num1 - num2 ;
 
    mensaje ('El Resultado es: ' + resultado);

}
// fin restar // 

// multiplicar // 

function multiplicar(params) {
    num1 = parseInt (document.getElementById('num1').value);
    num2 = parseInt (document.getElementById('num2').value);

     var resultado =  num1 * num2 ;
 
    mensaje ('El Resultado es: ' + resultado);

}
// fin multiplicar // 

// Dividir // 


function dividir(params) {
    num1 = parseInt (document.getElementById('num1').value);
    num2 = parseInt (document.getElementById('num2').value);

     var resultado =  num1 / num2 ;
 
    mensaje ('El Resultado es: ' + resultado);

}
// fin dividir //

// concatenado //
   
function concatenar(params) {
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    var resultado = nombre + ' ' + apellido ;
    mensajeNombre ('Tu nombre concatenado es: ' + resultado); 
}

const mensajeNombre = (mensajeNombre) => document.getElementById("textConcatenado").value = mensajeNombre; 

// fin concatenado//

// contador // 


var contador = 0;

function incrementarClick() {
    updateDisplay(++contador);
}

function resetCounter() {
    contador = 0;
    updateDisplay(contador);
   
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

// fin contador //

// fin js //
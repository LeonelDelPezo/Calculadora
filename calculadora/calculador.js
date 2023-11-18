//Se declara tres variables operandoa, operandob, y operacion, estas se utilizarán 
//para almacenar los operandos y la operación en la calculadora.

var operandoa;
var operandob;
var operacion;


function init() {
 //decalracion de variables
 var resultado = document.getElementById('resultado');
 var reset = document.getElementById('reset');
 var suma = document.getElementById('suma');
 var resta = document.getElementById('resta');
 var multiplicacion = document.getElementById('multiplicacion');
 var division = document.getElementById('division');
 var igual = document.getElementById('igual');
 var uno = document.getElementById('uno');
 var dos = document.getElementById('dos');
 var tres = document.getElementById('tres');
 var cuatro = document.getElementById('cuatro');
 var cinco = document.getElementById('cinco');
 var seis = document.getElementById('seis');
 var siete = document.getElementById('siete');
 var ocho = document.getElementById('ocho');
 var nueve = document.getElementById('nueve');
 var cero = document.getElementById('cero');

//// Asignación de eventos de clic para los botones numéricos
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
  }
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
  }
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3"; 
  }
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
  }
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
  }
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
  }
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
  }
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
  }
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
  }
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
  }

// Asignación de eventos de clic para los botones de operación
reset.onclick = function(e){
    resetear();
  }
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
  }
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
  }
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
  }
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
  }
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
  }
}
// Función para limpiar el contenido del resultado
function limpiar(){
      resultado.textContent ="";

}
// Función para restablecer todas las variables a sus valores iniciales
function resetear(){
        resultado.textContent ="";
        operandoa = 0;
        operandob = 0;
        operacion = "";
}
// Función para realizar la operación y mostrar el resultado
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}

        


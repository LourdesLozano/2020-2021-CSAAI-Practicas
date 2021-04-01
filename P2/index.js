console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
 
 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos
function digito(ev)
{
  
    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else {
       
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;

    } 
    
}

//-- Obtener una colección con todos los elementos
//-- de la clase digito
digitos = document.getElementsByClassName("digito")

for (let boton of digitos) {

    boton.onclick = digito;
}


//-- Operación de sumar
suma.onclick = (ev) => {

    //-- Insertar simbolo de sumar
    display.innerHTML += ev.target.value;

}

//-- Evaluar la expresion
igual.onclick = () => {
  
    //-- Calcular la expresión y añadirla al display
    display.innerHTML = eval(display.innerHTML);
  
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}
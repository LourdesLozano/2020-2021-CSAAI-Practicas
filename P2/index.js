console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
option = document.getElementById("option")

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OP2: 2,
    OP3: 3,
    OP4: 4
}
 
 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos
function digito(bottom){
    if(estado == ESTADO.INIT){
        display.innerHTML = bottom;
        estado = ESTADO.OP1;
    }else if(estado == ESTADO.OP1){
        display.innerHTML += bottom;
    }else if(estado == ESTADO.OP2){
        display.innerHTML += bottom;
      estado = ESTADO.OP3;
    }else if (estado == ESTADO.OP3) {
      display.innerHTML +=  bottom;
      estado = ESTADO.OP4;
    }else if (estado == ESTADO.OP4){
      display.innerHTML += bottom;
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
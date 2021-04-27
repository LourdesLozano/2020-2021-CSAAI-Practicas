console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 600;

// Coordenadas
let X_bloque = 210;
let Y_bloque = 560;
let X_bola = 250;
let Y_bola = 380;

// Velocidades
let velocidad_X = 4;
let velocidad_Y = 2;

// para mover bloque
var evento = window.event;

// estados
const ESTADO = {
    INIT : 0,
    BEGIN : 1,
    JUEGO : 2,
}
    let estado = ESTADO.INIT

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// funcion dibujar bloque
function bloque(){
    ctx.beginPath();
        ctx.rect(X_bloque,Y_bloque, 80, 20);
        //-- Color de relleno del rectángulo
        ctx.fillStyle = 'white';
        //-- Mostrar el relleno
        ctx.fill();
        //-- Mostrar el trazo del rectángulo
        ctx.stroke();
    ctx.closePath();
}

// funcion dibujar bola
function bola(){
    ctx.beginPath();
        ctx.arc(X_bola, Y_bola, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.fillStyle = 'lightblue';
        //-- Dibujar el trazo
        ctx.stroke()
        //-- Dibujar el relleno
        ctx.fill()
    ctx.closePath();
}

function update(){

    console.log("test");
    // estado inicial
    inicio();

    if(estado == ESTADO.JUEGO){

        if(velocidad_X == 0 && velocidad_Y == 0){
            velocidad_X = 4;
            velocidad_Y = 2;
        }

        // Rebote vertical
        if (X_bola < 12 || X_bola >= (canvas.width - 10) ) {
            velocidad_X = -velocidad_X;
        }

        // Rebote horizontal
        if (Y_bola <= 12 || Y_bola > (canvas.height - 12)) {
            velocidad_Y = -velocidad_Y;
        }

        // Actualizamos posicion
        X_bola = X_bola + velocidad_X;
        Y_bola = Y_bola + velocidad_Y;

        // Choque con mi bloque
        if(X_bola >= X_bloque-10 && X_bola < (X_bloque+80+10) && Y_bola >= (Y_bloque-10) && Y_bola < (Y_bloque+20+10)){
            velocidad_X = -velocidad_X;
            velocidad_Y = -velocidad_Y;
        }

    }
    
    // Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujamos elementos visibles
    // Mi bloque
    bloque();

    // Mi bola
    bola();

    // Volver a ejecutar cuando toque
    requestAnimationFrame(update);

}


// mover bloque
window.onkeydown = (e) => {
    console.log();
    //-- Según la tecla se hace una cosa u otra
    switch (e.key) {
        case ".": // derecha
            X_bloque = X_bloque + 16;
            break;
        case ",": //izquierda
            X_bloque = X_bloque - 16; 
        case " ":
            estado = ESTADO.JUEGO;
            break;
    }
  }
// estado inicial
function inicio(){
    if(estado == ESTADO.INIT){
        X_bola = 250;
        Y_bola = 380;
        velocidad_X = 0;
        velocidad_Y = 0;
    }
}


// Empezamos funciton
update();



    


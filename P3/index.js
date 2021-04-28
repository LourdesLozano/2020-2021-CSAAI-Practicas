console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 800;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// Coordenadas
let X_bloque = 210;
let Y_bloque = 760;
let X_bola = 250;
let Y_bola = 720;

// Velocidades
let velocidad_X = 5;
let velocidad_Y = -3;

// para mover bloque
var evento = window.event;

// estados
const ESTADO = {
    INIT : 0,
    BEGIN : 1,
    JUEGO : 2,
}
    let estado = ESTADO.INIT

// puntos
let puntos = 0;

// vidas
let vidas = 3;

// ladrillos
let X_inicio = 14;
let Y_inicio = 80;

var color1 = 'rgb(255, 0, 0)';
var color2 = 'rgb(255, 255, 0)';
var color3 = 'purple';
var color4 = 'lightblue';
var A_colores = [color1,color2,color3,color4]

const LADRILLO = {
    FILA: 5,
    COLUMNA: 9,
    W: 35, //ancho
    H: 30, // alto
    PADDING: 20, // espacio alrededor del ladrillo
    VISIBLE: true // estado del ladrillo
}
const ladrillos = [];

// ladrillos
for(let i = 0; i < LADRILLO.FILA; i++){
    ladrillos[i] = []; // inicializamos filas
    for(let j = 0; j < LADRILLO.COLUMNA; j++){
        ladrillos[i][j] = {
            x: X_inicio + (LADRILLO.W + LADRILLO.PADDING) * j,
            y: Y_inicio + (LADRILLO.H + LADRILLO.PADDING) * i,
            W: LADRILLO.W,
            H: LADRILLO.H,
            PADDING: LADRILLO.PADDING,
            VISIBLE: LADRILLO.VISIBLE,
            color: A_colores[Math.floor(Math.random()*4)]
            
        };
    }
}

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

// funcion destruir ladrillo
function BYE_ladrillo(){
    for(let i = 0; i < LADRILLO.FILA; i++){
        for(let j = 0; j < LADRILLO.COLUMNA; j++){
            if(X_bola >= ladrillos[i][j].x && X_bola <= (ladrillos[i][j].x+35+10) && Y_bola >= ladrillos[i][j].y && Y_bola <= (ladrillos[i][j].y)+30+10 && ladrillos[i][j].VISIBLE){
                ladrillos[i][j].VISIBLE = false;
                velocidad_Y = -velocidad_Y;
                if(ladrillos[i][j].color == color1){
                    puntos = puntos + 1;
                }
                if(ladrillos[i][j].color == color2){
                    puntos = puntos + 1;
                }
                if(ladrillos[i][j].color == color3){
                    puntos = puntos + 1;
                }
                if(ladrillos[i][j].color == color4){
                    puntos = puntos + 1;
                }
            }
        }
    }  
}

function puntuacion(){
    
    ctx.fillStyle = 'black';
    ctx.fillText('Puntos: ', 10, 20);
    ctx.fillText(puntos, 50, 20);
}

function vidas_(){
    
    ctx.fillStyle = 'black';
    ctx.fillText('vidas: ', 400, 20);
    ctx.fillText(vidas, 450, 20);
}


// estado inicial
function inicio(){
    if(estado == ESTADO.INIT){
        X_bola = 250;
        Y_bola = 710;
        X_bloque = 210;
        Y_bloque = 760;
        velocidad_X = 0;
        velocidad_Y = 0;
    }
}

// mover bloque
window.onkeydown = (e) => {
    console.log();
    //-- Según la tecla se hace una cosa u otra
    switch (e.key) {
        case ".": // derecha
            X_bloque = X_bloque + 20;
            break;
        case ",": //izquierda
            X_bloque = X_bloque - 20; 
        case " ":
            estado = ESTADO.JUEGO;
            break;
    }
}



function update(){

    console.log("test");
    // estado inicial
    inicio();

    if(estado == ESTADO.JUEGO){

        if(velocidad_X == 0 && velocidad_Y == 0){
            velocidad_X = 5;
            velocidad_Y = -3;
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

        // si no golpeo, pierdo
        if(Y_bola > 770){
            estado = ESTADO.INIT;
            vidas = vidas - 1; // si no golpeo, resto una vida
        }

        // Que no desaparezca mi bloque
        if(X_bloque < 0){
            X_bloque = 0;
        }
        if(X_bloque > 420){
            X_bloque = 420;
        }

        BYE_ladrillo();
    }
    
    // Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // dibujamos los ladrillos
    for(let i = 0; i < LADRILLO.FILA; i++){
        for(let j = 0; j < LADRILLO.COLUMNA; j++){
            // si es viisble, se pinta
            if(ladrillos[i][j].VISIBLE){
                ctx.beginPath();
                ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.W, LADRILLO.H);
                ctx.fillStyle = ladrillos[i][j].color;
                ctx.fill();
                ctx.closePath;
            }
        }
    }

    // Dibujamos elementos visibles
    // Mi bloque
    bloque();

    // Mi bola
    bola();

    // puntos
    puntuacion();

    // vidas
    vidas_();

    // Volver a ejecutar cuando toque
    requestAnimationFrame(update);

}


// Empezamos funciton
update();

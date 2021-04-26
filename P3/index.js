console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 900;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// Mi bloque
ctx.beginPath();
    ctx.rect(210,840, 80, 20);
    //-- Color de relleno del rectángulo
    ctx.fillStyle = 'white';
    //-- Mostrar el relleno
    ctx.fill();
    //-- Mostrar el trazo del rectángulo
    ctx.stroke();
ctx.closePath();

// Mi bola
ctx.beginPath();
    ctx.arc(250, 680, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'lightblue';
    //-- Dibujar el trazo
    ctx.stroke()
    //-- Dibujar el relleno
    ctx.fill()
ctx.closePath();
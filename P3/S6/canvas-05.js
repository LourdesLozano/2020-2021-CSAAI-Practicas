console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    ctx.arc(100,50,20,0, 2 * Math.PI/2);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'yellow'
    

    //-- Dibujar el trazo
    ctx.stroke()
    ctx.fillStyle()
    
ctx.closePath()
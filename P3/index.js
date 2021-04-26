console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 900;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(225,840, 80, 20);
//-- Color de relleno del rectángulo
ctx.fillStyle = 'white';
//-- Mostrar el relleno
ctx.fill();
//-- Mostrar el trazo del rectángulo
ctx.stroke();
ctx.closePath();
console.log('Ejecutando JS...');

const canvas = document.getElementById("canvas");
const img = document.getElementById('original')
const ctx = canvas.getContext('2d');

img.onload = function () {
    console.log("Imagen cargada");

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0); //siturar original en el canvas
    
    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //-- Obtener el array con todos los píxeles
    let data = imgData.data
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}
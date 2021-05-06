console.log('Ejecutando JS...');

const canvas = document.getElementById("canvas");
const img = document.getElementById('original')
const ctx = canvas.getContext('2d');


// botones
const gris = document.getElementById('gris');


// Imagen cargada
img.onload = function () {
    console.log("Imagen cargada");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0); //siturar original en el canvas
}

// funcion para la eleccion de grises
gris.onclick = () => {
    var grises = 0;
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    // filtramos la imagen
    for (var i = 0; i < data.length; i+=4) {
        grises = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
        data[i] = grises;
        data[i+1] = grises;
        data[i+2] = grises;
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}




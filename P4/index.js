console.log('Ejecutando JS...');

const canvas = document.getElementById("canvas");
const img = document.getElementById('original')
const ctx = canvas.getContext('2d');


// botones
const gris = document.getElementById('gris');
const origen = document.getElementById('origen');
const rgb = document.getElementById('rgb');

// acceder a los deslizantes
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

// valor de los deslizantes
const valorR = document.getElementById('valorR');
const valorG = document.getElementById('valorV');
const valorA = document.getElementById('valorA');



// Imagen cargada
img.onload = function () {
    console.log("Imagen cargada");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0); //siturar original en el canvas
}

// Funcion volver a imagen original
origen.onclick = () => {
    console.log("Volvemos a la imagen original");
    ctx.drawImage(img, 0, 0);

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

// fucnion de los colores
function colores(){
    // ponemos la original en el canvas
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;

    // mostramos el valor de las barritas
    valorR.innerHTML = rojo.value;
    valorG.innerHTML = verde.value;
    valorB.innerHTML = azul.value;


    // obtenemos los umbrales de los colores
    umbralR = rojo.value;
    umbralG = verde.value;
    umbralB = azul.value;

    // Filtramos con nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
        if (data[i] > umbralR){
          data[i] = umbralR;
        }
        if (data[i+1] > umbralG){
          data[i+1] = umbralG;
        }
        if (data[i+2] > umbralB){
          data[i+2] = umbralB;
        }   
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

// llamamos  ala funcion

rojo.oninput = () => {
    colores();
}
verde.oninput = () => {
    colores();
}
azul.oninput = () => {
    colores();
}




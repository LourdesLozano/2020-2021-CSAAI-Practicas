console.log('Ejecutando JS...');

const canvas = document.getElementById("canvas");
const img = document.getElementById('original')
const ctx = canvas.getContext('2d');


// botones
const gris = document.getElementById('gris');
const origen = document.getElementById('origen');
const rgb = document.getElementById('rgb');
const espejo = document.getElementById('espejo');

// los deslizantes
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

const desliz = document.getElementById('desliz')

// valor de los deslizantes
const valorR = document.getElementById('valorR');
const valorG = document.getElementById('valorG');
const valorB = document.getElementById('valorB');



// Imagen cargada
img.onload = function () {
    desliz.style.display = "none";
    console.log("Imagen cargada");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0,0); //siturar original en el canvas
    
}

// Para seleccionar imágenes
img1.onclick = () => {
    img.src="imagen.jpg";
}
img2.onclick = () => {
    img.src="imagen2.jpeg";
}


// Funcion volver a imagen original
origen.onclick = () => {
    desliz.style.display = "none";
    console.log("Volvemos a la imagen original");
    ctx.drawImage(img, 0, 0);

}

// funcion para la eleccion de grises
gris.onclick = () => {
    desliz.style.display = "none";
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

// mostrar barra dslizantes
function mostrar(){
    var m = document.getElementById('desliz');
    if(m.style.display === "none"){
        m.style.display = "block";
    }else{
        m.style.display = "none";
    }
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
    //var umbralR = rojo.value;
    //var umbralG = verde.value;
    //var umbralB = azul.value;

    // Filtramos con nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
        if (data[i] > rojo.value){
          data[i] = rojo.value;
        }
        if (data[i+1] > verde.value){
          data[i+1] = verde.value;
        }
        if (data[i+2] > azul.value){
          data[i+2] = azul.value;
        }   
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

rgb.onclick = () => {
    mostrar();
    ctx.drawImage(img, 0, 0);
    rojo.oninput = () => {
        colores();
    }
    
    verde.oninput = () => {
        colores();
    }
    
    azul.oninput = () => {
        colores();
    }
}
 vvb
// funcion espejo
espejo.onclick = () => {
    desliz.style.display = "none";
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0,0);
    ctx.translate(2*(img.width)/2, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    ctx.putImageData(imgData, 0, 0);

}




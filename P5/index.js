//----- Obtener elemento de video y configurarlo
let directo = document.getElementById("directo");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const btn_video1 = document.getElementById("btn_video1");
const btn_video2 = document.getElementById("btn_video2");
const btn_video3 = document.getElementById("btn_video3");
const btn_video4 = document.getElementById("btn_video4");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");
const btn_src_off = document.getElementById("btn_src_off");


//-- Establecer las dimensiones de los vídeos
directo.width=600;
directo.height=400;
video1.width=300;  
video1.height=200;
video2.width=300;  
video2.height=200;
video3.width=300;  
video3.height=200;
video4.width=300;
video4.height=200;

//-- Imagen de Test usada
const TEST_IMAGE_URL = "test.webp";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
directo.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;
video4.poster = TEST_IMAGE_URL;

//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {
 
  //-- Establecer la fuente de las camras
  video1.src="https://github.com/LourdesLozano/Practica5/raw/main/pocoloco.mp4";
  video2.src="https://github.com/LourdesLozano/Practica5/raw/main/llorona.mp4";
  video3.src="https://github.com/LourdesLozano/Practica5/raw/main/noche.mp4";
  video4.src="https://github.com/LourdesLozano/Practica5/raw/main/latido.mp4";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video1.play();
  video2.currentTime = 0;
  video2.play();
  video3.currentTime = 0;
  video3.play();
  video4.currentTime = 0;
  video4.play();

  //-- Y en silencio...
  video1.muted = true;
  video2.muted = true;
  video3.muted = true;
  video4.muted = true;

  //-- En la emisión en directo ponemos la imagen de prueba
  directo.poster = TEST_IMAGE_URL;
};

//-- Boton de Fuentes-OFF
btn_src_off.onclick = () => {
    directo.src = null;
    directo.poster = TEST_IMAGE_URL;
    video1.src = null;
    video2.src = null;
    video3.src = null;
    video4.src = null;
};

//-- Botón de Test
btn_test.onclick = () => {
    directo.poster = TEST_IMAGE_URL;
    directo.src = null;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {
    directo.src = video1.src;
    directo.currentTime = video1.currentTime;
    directo.play();
    directo.poster=null;
};

//-- Botón de Selección de la cámara 2
btn_video2.onclick = () => {
    directo.src = video2.src;
    directo.currentTime = video2.currentTime;
    directo.play();
    directo.poster=null;
};

//-- Botón de Selección de la cámara 3
btn_video3.onclick = () => {
    directo.src = video3.src;
    directo.currentTime = video3.currentTime;
    directo.play();
    directo.poster=null;
};

//-- Botón de Selección de la cámara 4
btn_video4.onclick = () => {
    directo.src = video4.src;
    directo.currentTime = video4.currentTime;
    directo.play();
    directo.poster=null;
};
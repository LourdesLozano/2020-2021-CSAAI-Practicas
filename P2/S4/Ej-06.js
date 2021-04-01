//-- Manejador del evento click sobre el párrafo test
//-- Cada vez que se hace click en él se invoca a esta funcion
function manejador_parrafo()
{
  console.log("Click sobre el párrafo...")
}

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_parrafo()
test.onclick = manejador_parrafo;
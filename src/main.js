import { mostrarPeliculas } from './data.js';
const botonIr = document.getElementById('btn-ir');
const botonVolver = document.getElementById('btn-volver');
const peliculas = mostrarPeliculas();
console.log(peliculas);

function verPeliculas(dataghibli) {
  const contenedor = document.getElementById("contenedor-peliculas");
  for (let i = 0; i < dataghibli.length; i++) {
    const listaPeliculas = `<li><h1> ${peliculas[i].title}</h1>  <img src =${peliculas[i].poster}>  </img> ${peliculas[i].description}</li>`;
    contenedor.innerHTML += listaPeliculas;
  }
}
verPeliculas(peliculas);
//se crea escuchador de evento para los botones
botonIr.addEventListener('click', alternarPantallas);
botonVolver.addEventListener('click', alternarPantallas);

function alternarPantallas(e) {
  e.preventDefault();
  const primeraPantalla = document.getElementById("primera-pantalla");
  const segundaPantalla = document.getElementById("segunda-pantalla");

  if (window.getComputedStyle(primeraPantalla).display == "block") {
    primeraPantalla.style.display = "none";
    segundaPantalla.style.display = "block";
  } else if (window.getComputedStyle(segundaPantalla).display == "block") {
    segundaPantalla.style.display = "none";
    primeraPantalla.style.display = "block";
  }
}
/*const filtrarData = function (){
  peliculas.filter(pelicula => pelicula.title);
}
console.log(filtrarData);
function filtrarInformacion(data){
const ficha = document.getElementById("card-fichaTecnica");
for (let i = 0;i< data.length; i++) {
   const fichaTecnica = `<div>${peliculas[i].title} <br> ${peliculas[i].director} <br> ${peliculas[i].producer} <br> ${peliculas[i].release_date}</div>`;
   ficha.innerHTML += fichaTecnica;
}
}
filtrarInformacion(peliculas);*/

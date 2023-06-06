import { mostrarPeliculas } from './data.js';
const botonIr = document.getElementById('btn-ir');
const botonVolver = document.getElementById('btn-volver');
const peliculas = mostrarPeliculas();
console.log(peliculas);

function verPeliculas(dataghibli) {
  const contenedor = document.getElementById("contenedor-peliculas");
  for (let i = 0; i < dataghibli.length; i++) {
    const listaPeliculas = `<li><h1></h1> ${peliculas[i].title}  <img src =${peliculas[i].poster}>  </img> ${peliculas[i].description}</li>`;
    contenedor.innerHTML += listaPeliculas;
  }
}
verPeliculas(peliculas);
//se crea escuchador de evento para el boton
botonIr.addEventListener('click', alternarPantallas);
botonVolver.addEventListener('click', alternarPantallas);

function alternarPantallas(e) {
  e.preventDefault();
  const primeraPantalla = document.getElementById("primera-pantalla");
  const segundaPantalla = document.getElementById("segunda-pantalla");
  console.log(window.getComputedStyle(primeraPantalla).display);
  console.log(window.getComputedStyle(segundaPantalla).display);

  if (window.getComputedStyle(primeraPantalla).display == "block") {
    primeraPantalla.style.display = "none";
    segundaPantalla.style.display = "block";
  } else if (window.getComputedStyle(segundaPantalla).display == "block") {
    segundaPantalla.style.display = "none";
    primeraPantalla.style.display = "block";
  }
}

// mostrarSegundaPantalla(segundaPantalla);





//const boton = document.getElementById('btn')
//boton.addEventListener('click', segundaPantalla ( (e) =>
 // e.preventDefault()))
  //segundaPantalla.style.display = "block";//





/* const studio = films
data.filter(function(pelicula){
 return pelicula.title === 'title'
})
console.log(studio);
})



console.log(boton);*/

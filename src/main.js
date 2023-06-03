import { mostrarPeliculas } from './data.js';
const primeraPantalla = document.getElementById("primera-pantalla");
const segundaPantalla = document.getElementById("segunda-pantalla");
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
const boton = document.getElementById('btn')
boton.addEventListener('click',  (e) =>
  e.preventDefault())
if (primeraPantalla) {
  primeraPantalla.style.display = "block";
  segundaPantalla.style.display = "none";
} else {
  segundaPantalla.style.display = "block";
  primeraPantalla.style.display = "none";
}
        
     
     
   /* const studio = films
 data.filter(function(pelicula){
    return pelicula.title === 'title'
 })
 console.log(studio);
})



console.log(boton);*/

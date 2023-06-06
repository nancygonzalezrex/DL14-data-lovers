import { mostrarPeliculas } from "./data.js";
const peliculas = mostrarPeliculas();
console.log(peliculas);

function verPeliculas(dataghibli) {
  const contenedor = document.getElementById("contenedor-peliculas");
  for (let i = 0; i < dataghibli.length; i++) {
    const listaPeliculas = `
    <li class="pelicula">
      <h2>${peliculas[i].title}</h2>
      <img src =${peliculas[i].poster} class="imagen-pelicula" />
      <p>${peliculas[i].description}</p>
    </li>`;
    contenedor.innerHTML += listaPeliculas;
  }
}
verPeliculas(peliculas);
const boton = document.getElementById("btn");

boton.addEventListener("click", (e) => e.preventDefault());

/* const studio = films
 data.filter(function(pelicula){
    return pelicula.title === 'title'
 })
 console.log(studio);
})



console.log(boton);*/

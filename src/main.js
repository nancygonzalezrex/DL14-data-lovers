import { mostrarPeliculas } from "./data.js";
const botonIr = document.getElementById("btn-ir");
const botonVolver = document.getElementById("btn-volver");
const peliculas = mostrarPeliculas();

function verPeliculas(dataghibli) {
  const verOrden = dataghibli.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });
  verPeliculas(verOrden)
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
//se crea escuchador de evento para los botones
botonIr.addEventListener("click", alternarPantallas);
botonVolver.addEventListener("click", alternarPantallas);

function alternarPantallas(e) {
  e.preventDefault();
  const header = document.getElementById("header");
  const segundaPantalla = document.getElementById("segunda-pantalla");

  if (window.getComputedStyle(header).display === "block") {
    header.style.display = "none";
    segundaPantalla.style.display = "block";
  } else if (window.getComputedStyle(segundaPantalla).display === "block") {
    segundaPantalla.style.display = "none";
    header.style.display = "block";
  }
}

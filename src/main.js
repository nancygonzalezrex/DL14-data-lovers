import { mostrarPeliculas } from './data.js';
const botonIr = document.getElementById('btn-ir');
const botonVolver = document.getElementById('btn-volver');
const peliculas = mostrarPeliculas();
const filtrado = document.getElementById('input-busqueda-de-peliculas');

function verPeliculas(dataghibli) {
  const contenedor = document.getElementById("contenedor-peliculas");
  contenedor.innerHTML=''
  for (let i = 0; i < dataghibli.length; i++) {
    const listaPeliculas = `
    <li class="pelicula">
      <h2>${dataghibli[i].title}</h2>
      <img src =${dataghibli[i].poster} class="imagen-pelicula" />
      <p>${dataghibli[i].description}</p>
    </li>`;
    contenedor.innerHTML += listaPeliculas;
  }
}
verPeliculas(peliculas);
//se crea escuchador de evento para los botones
botonIr.addEventListener('click', alternarPantallas);
botonVolver.addEventListener('click', alternarPantallas);
filtrado.addEventListener('keyup', function (){
  const filtraPelicula = peliculas.filter((pelicula)=>{
return pelicula.title.toLowerCase().indexOf(filtrado.value.toLowerCase())!== -1
  })
  verPeliculas(filtraPelicula);
});


function alternarPantallas(e) {
  console.log(e)
  e.preventDefault();
  const header = document.getElementById("header");
  const segundaPantalla = document.getElementById("segunda-interfaz");

  if (window.getComputedStyle(header).display == "block") {
    header.style.display = "none";
    segundaPantalla.style.display = "block";
  } else if (window.getComputedStyle(segundaPantalla).display == "block") {
    segundaPantalla.style.display = "none";
    header.style.display = "block";
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

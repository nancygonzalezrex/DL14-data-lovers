import { mostrarPeliculas } from './data.js';
const peliculas = mostrarPeliculas();
console.log(peliculas);

function verPeliculas (dataghibli) {
    const contenedor =document.getElementById("contenedor-peliculas");
    for (let i = 0; i < dataghibli.length; i++) {
        const listaPeliculas = `<li><h1></h1> ${peliculas[i].title}  <img src =${peliculas[i].poster}>  </img> ${peliculas[i].description}</li>`;
        contenedor.innerHTML += listaPeliculas;
    }
}
verPeliculas(peliculas);
const boton=document.getElementById('btn')

boton.addEventListener('click', (e) => 
     e.preventDefault());
     
   /* const studio = films
 data.filter(function(pelicula){
    return pelicula.title === 'title'
 })
 console.log(studio);
})



console.log(boton);*/

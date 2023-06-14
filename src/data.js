import data from './data/ghibli/ghibli.js';
export function mostrarPeliculas() {
  return data.films;
}

export function ordenarPeliculas(dataghibli, orden) {
  if (orden === 'a-z') {
    return dataghibli.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  } else {
    return dataghibli.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }
}

export function filtrarPeliculas(dataghibli, valorAFiltrar) {
  const peliculasFiltradas = dataghibli.filter((pelicula) => {
    return pelicula.title.toLowerCase().indexOf(valorAFiltrar.toLowerCase()) !== -1
  })
  const peliculasOrdenadas = ordenarPeliculas(peliculasFiltradas);
  return peliculasOrdenadas;
}

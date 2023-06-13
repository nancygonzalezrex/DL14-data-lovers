import { filtrarPeliculas, mostrarPeliculas, ordenarPeliculas } from '../src/data.js';
//aqui va NOMBRE de la vista que va a testear

describe('pruebas de peliculas ghibli ', () => {
  it('mostrar peliculas y que hayan 20', () => {
    const resultado = mostrarPeliculas();
    expect(resultado.length).toBe(20);
  });

  it('filtrar peliculas y que me arroje 2 peliculas', () => {
    const todasLasPeliculas = mostrarPeliculas();
    const resultado = filtrarPeliculas(todasLasPeliculas, 'castle');
    expect(resultado.length).toBe(2);
  });

  it('filtrar peliculas y que no haya peliculas', () => {
    const todasLasPeliculas = mostrarPeliculas();
    const resultado = filtrarPeliculas(todasLasPeliculas, 'castle34o8589304098');
    expect(resultado.length).toBe(0);
  });

  it('ordenar peliculas y que ordene de a hasta z', () => {
    const resultado = ordenarPeliculas();
    expect(resultado.length).toBe('a-z');
  });
});

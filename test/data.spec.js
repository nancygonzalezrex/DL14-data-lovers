import {
  filtrarPeliculas,
  mostrarPeliculas,
  ordenarPeliculas,
} from "../src/data.js";

describe("pruebas de peliculas ghibli ", () => {
  it("mostrar peliculas y que hayan 20", () => {
    const resultado = mostrarPeliculas();
    expect(resultado.length).toBe(20);
  });
  it("filtrar peliculas y que me arroje 2 peliculas", () => {
    const todasLasPeliculas = mostrarPeliculas();
    const resultado = filtrarPeliculas(todasLasPeliculas, "castle");
    expect(resultado.length).toBe(2);
  });

  it("filtrar peliculas y que no haya peliculas", () => {
    const todasLasPeliculas = mostrarPeliculas();
    const resultado = filtrarPeliculas(
      todasLasPeliculas,
      "castle34o8589304098"
    );
    expect(resultado.length).toBe(0);
  });

  it("ordenar peliculas y que ordene de z hasta a", () => {
    const dataghibli = mostrarPeliculas();

    const orden = "z-a";
    const resultado = ordenarPeliculas(dataghibli, orden);

    expect(resultado[0].title).toBe("Whisper of the Heart");
  });
  it("ordenar peliculas y que ordene de a hasta z", () => {
    const dataghibli = mostrarPeliculas();

    const orden = "a-z";
    const resultado = ordenarPeliculas(dataghibli, orden);

    expect(resultado[0].title).toBe("Castle in the Sky");
  });
});

document.getElementById("botonmajor").addEventListener("click", function () {
  window.open("https://rickandmortyapi.com/", "_blank");
});

document.getElementById("itemboostrap").addEventListener("click", function () {
  window.open("https://getbootstrap.com/", "_blank");
});

document.getElementById("itemdocs").addEventListener("click", function () {
  window.open(
    "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    "_blank"
  );
});

document.getElementById("itemexamples").addEventListener("click", function () {
  window.open("https://getbootstrap.com/docs/5.3/examples/", "_blank");
});

document.getElementById("itemicons").addEventListener("click", function () {
  window.open("https://icons.getbootstrap.com/", "_blank");
});

document.getElementById("itemthemes").addEventListener("click", function () {
  window.open("https://themes.getbootstrap.com/", "_blank");
});

document.getElementById("itemblog").addEventListener("click", function () {
  window.open("https://blog.getbootstrap.com/", "_blank");
});

const cartaPorId = document.getElementById("cardguia");
const sectionPorClass = document.getElementsByClassName("sectiondad");

async function cargarCartas() {
  try {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");

    if (!respuesta.ok) {
      throw new Error("Hubo un error");
    }

    const data = await respuesta.json();

    data.results.forEach((personaje) => {
      console.log(personaje);
      const personajeCarta = document.getElementById("cardPorId");
      personajeCarta.querySelector("img").setAttribute("src", personaje.image);
      personajeCarta.querySelector("h3").innerHTML = personaje.name;
      personajeCarta.querySelector("p").innerHTML = personaje.status;

      sectionPorClass.appendChild("");
    });
  } catch (error) {
    console.error("Hubo un problema con la peticion", error);
  }
}
cargarCartas();

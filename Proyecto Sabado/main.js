window.onload = function() {
  console.log("Iniciando Slider");

  var sliderAr = document.getElementsByClassName("slider-contenedor");

  console.log("# Sliders");
  console.log("Size: " + sliderAr.length);

  let identificador = 0;

  //# Inicio for Padre
  for (let pos = 0; pos < sliderAr.length; pos++) {
    let slider = sliderAr[pos];
    let sliderInd = slider.querySelectorAll(".slider-test");
    let contador = 1;
    let tamañoWidth = sliderInd[0].clientWidth;
    let intervalo = 3500;
    let longitud = sliderInd.length;

    console.log("--> Iniciando Estructura");
    for (let k = 0; k < sliderInd.length; k++) {
      let botonId = sliderInd[k].getElementsByClassName("myBtn");

      if (botonId[0] != this.undefined) {
        sliderInd[k].id = "id" + identificador;
        botonId[0].title = "" + identificador;
      }

      identificador++;
    }

    console.log("# Titulo");
    console.log(sliderInd[0].title);

    console.log("# Sliders");
    console.log("# Sliders Ind");
    console.log("Size S: " + longitud);

    window.addEventListener("resize", function() {
      let tamañoWidth = sliderInd[0].clientWidth;
    });

    let contadorNumero = 1;
    setInterval(function() {
      proceso(pos, longitud, slider, tamañoWidth, intervalo);
    }, intervalo);

    function proceso(pos, size, slider, tamañoWidth, intervalo) {
      slider.style.transform =
        "translate(" + -tamañoWidth * contadorNumero + "px)";
      slider.style.transition = "transform 0.5s";
      contadorNumero++;
      console.log("Length [" + pos + "] :" + contadorNumero);
      if (contadorNumero === size) {
        contadorNumero = 0;
        setTimeout(function() {
          slider.style.transform = "translate(0px)";
          slider.style.transition = "transform 0.5s";
        }, intervalo);
      }
    }
  }
  // -> Fin for Padre

  //->Guarda style de recuadros
  console.log("\n\n# Paneles");
  var acc = document.getElementsByClassName("panel");
  console.log("Longitud: " + acc.length);
  for (let i = 0; i < acc.length; i++) {
    console.log("Elmenento");
    let panel = acc[i];
    panel.style.display = "block";
  }

  ini();
  //->Captura de datos de cada persona
  function ini() {
    console.log("********************************");

    var ventana = document.getElementById("ventana");

    var cerrar = document.getElementById("cerrar");

    cerrar.addEventListener("click", function() {
      ventana.style.display = "none";
    });

    var detalleAr = document.getElementsByClassName("myBtn");

    var picture = document.getElementById("foto"); /*-----*/

    for (let pos = 0; pos < detalleAr.length; pos++) {
      detalleAr[pos].addEventListener("click", function() {
        let idElemento = "id" + this.title;
        console.log("ID: " + idElemento);
        let contenido = document.getElementById(idElemento);
        console.log(contenido);

        let cargo = contenido.querySelectorAll("p")[0].innerHTML;
        let nombre = contenido.querySelectorAll("h3")[0].innerHTML;

        let img = contenido.querySelectorAll("img")[0].src; /*-----*/
        console.log(img); /*-----*/
        let picture = document.getElementById("foto"); /*-----*/
        picture.style.backgroundImage = "url('" + img + "')"; /*-----*/

        document.getElementById("nombre_persona").innerHTML = nombre;

        document.getElementById("cargo").innerHTML = cargo;

        let datos = contenido.querySelectorAll("input");
        console.log("Datos");
        let info = "";
        for (let j = 0; j < detalleAr.length; j++) {
          let texto = datos[j];
          if (texto != this.undefined) info += texto.value + "<br><br>";
        }
        console.log(info);
        document.getElementById("informacion").innerHTML = info;
        ventana.style.display = "flex";
      });
    }

    console.log("********************************");
  }
};

import {
  textoIngresado,
  textoResultado,
  contenedorResult,
  draw,
  ningunMensaje,
  message
} from "./modules/elementos.js";
import {
  botonDesencriptar,
  botonEncriptar,
  btnCopiar
} from "./modules/elementos-button.js";
import desencriptar from "./modules/desencriptador.js";
import encriptarTexto from "./modules/encriptador.js";

textoIngresado.addEventListener("click", () => {
  textoIngresado.value = "";  
});
textoIngresado.addEventListener('keyup', () => {
    if (textoIngresado.value.length > 0) {
        draw.style.display = "none";
        ningunMensaje.style.display = "none";
        contenedorResult.style.display = "inline";
    } else {
        draw.style.display = "inline";
        ningunMensaje.style.display = "inline";
        // message.style.display = "none";
        contenedorResult.style.display = "none";
    }
})

botonEncriptar.addEventListener("click", () => {
  textoResultado.innerText = encriptarTexto(textoIngresado.value);
});

botonDesencriptar.addEventListener("click", () => {
  textoResultado.innerText = desencriptar(textoIngresado.value);
});

btnCopiar.addEventListener("click", () => {
  if (!navigator.clipboard) {
    // use old commandExec() way
    textoResultado.select();
    document.execCommand("copy");
    alert("El texto a sido copiado!");
  } else {
    navigator.clipboard
      .writeText(textoResultado.innerText)
      .then(function () {
        alert("El texto a sido copiado!"); // success
      })
      .catch(function () {
        alert("Error al copiar texto!"); // error
      });
  }
});

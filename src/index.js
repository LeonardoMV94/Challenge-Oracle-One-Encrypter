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
  draw.style.display = "none";
  ningunMensaje.style.display = "none";
  message.style.display = "none";
  contenedorResult.style.display = "inline";
});

botonEncriptar.addEventListener("click", () => {
  textoResultado.innerText = encriptarTexto(textoIngresado.value);
});

botonDesencriptar.addEventListener("click", () => {
  textoResultado.innerText = desencriptar(textoIngresado.value);
});

btnCopiar.addEventListener("click", () => {
  if (!navigator.clipboard) {
    // use old commandExec() way
  } else {
    navigator.clipboard.writeText(textoResultado.innerText)
    .then(function () {
        alert("el texto a sido copiado!"); // success
    })
    .catch(function () {
        alert("error al copiar texto!"); // error
    });
  }
});

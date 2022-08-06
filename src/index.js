import { textoIngresado, textoResultado, 
    draw, ningunMensaje } from "./modules/elementos.js";
import { 
    botonDesencriptar, botonEncriptar} from "./modules/elementos-button.js";
import desencriptar from "./modules/desencriptador.js";
import encriptarTexto from "./modules/encriptador.js";

textoIngresado.addEventListener('click', () => {
    textoIngresado.value = ''
    draw.style.display = 'none'
    ningunMensaje.style.display = 'none'
})

botonEncriptar.addEventListener('click', () => {
    console.log("funciona")
})

botonDesencriptar.addEventListener('click', () => {
    console.log("funciona")
})
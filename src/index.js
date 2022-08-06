import { textoIngresado, textoResultado } from "./modules/elementos";
import { 
    botonDesencriptar, botonEncriptar, 
    draw, ningunMensaje} from "./modules/elementos-button";
import desencriptar from "./modules/desencriptador";
import encriptarTexto from "./modules/encriptador";

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
/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
 */
const VOCALES = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

const encriptarTexto = (textoUsuario) => {
    const texto = textoUsuario.toLowerCase()
    const textoAEncriptar = texto.split("")
    console.log(textoAEncriptar)
    const result = textoAEncriptar.map(e => VOCALES[e] ? VOCALES[e] : e)
    return result.join('')    
}

export default encriptarTexto
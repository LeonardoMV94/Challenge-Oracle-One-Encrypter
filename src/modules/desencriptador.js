const desencriptar = (textoUsuario) => {
  const texto = textoUsuario.toLowerCase()
  console.log(`Encriptado: ${texto}`)
  const result =  texto
                    .replaceAll("ai", "a")
                    .replaceAll("enter", "e")
                    .replaceAll("imes", "i")
                    .replaceAll("ober", "o")
                    .replaceAll("ufat", "u")
  console.log(`Desencriptado: ${result}`)
  return result
}

export default desencriptar
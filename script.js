var botonEncriptar = document.querySelector(".btn-encrypt");
var botonDesencriptar = document.querySelector(".btn-decrypt");
var picture = document.querySelector(".content-picture");
var contenedor = document.querySelector(".content-parrafo");
var resultado = document.querySelector(".content-result");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var boxtext = recuperarTexto()
    resultado.textContent = encriptarTexto(boxtext);
}

function desencriptar(){
    ocultarAdelante();
    var boxtext = recuperarTexto()
    resultado.textContent = desencriptarTexto(boxtext);
}

function recuperarTexto(){
    var boxtext = document.querySelector(".boxtext")
    return boxtext.value
}

function ocultarAdelante(){
    picture.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    const vocales = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    mensaje = mensaje.toLowerCase(); 

    let textoFinal = "";
    for (let i = 0; i < mensaje.length; i++) {
        textoFinal += vocales[mensaje[i]] || mensaje[i];
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    mensaje = mensaje.toLowerCase(); 
    var textoDesencriptado = mensaje.replace(/ai/g, "a")
                                    .replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");

    return textoDesencriptado;
}

  
  var btnCopy = document.querySelector(".btn-copy");
  btnCopy.addEventListener("click", copiar = () => {
      var contenido = document.querySelector(".content-result").textContent;
      navigator.clipboard.writeText(contenido);
      console.log("hola");
  });
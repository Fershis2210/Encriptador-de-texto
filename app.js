//Globales
let textoSucess = "";
let textoUsuario = "";
// Eventos
const textarea = document.getElementById("textoUsuario");
const resultado = document.getElementById("resultadoEncriptado")
const backResultado = document.getElementById("backResultado")
const btnEncriptar = document.getElementById("btnEncriptar")
const btnDesencriptar = document.getElementById("btnDesencriptar")
const btnCopy = document.getElementById("btnCopy")
//Llaves

let vocales = [
    ["e", "enter"], //La letra "e" es convertida para "enter"
    ["i", "imes"], //La letra "i" es convertida para "imes"
    ["a", "ai"], //La letra "a" es convertida para "ai"
    ["o", "ober"], //La letra "o" es convertida para "ober"
    ["u", "ufat"], //La letra "u" es convertida para "ufat"
];

const init = () => {
    textarea.addEventListener("input", function (event) {
        textoUsuario = event.target.value;

    });
    // Boton de encriptar
    btnEncriptar.addEventListener("click", (e) => {
        const textEncriptar = encriptar(textoUsuario);
        //poner un Div, oculto, cuando el boton se ejecute, mostrarlo
        backResultado.innerHTML=textEncriptar
        textoSucess = textEncriptar;
        resultado.classList.remove("textCenter");
        resultado.classList.add("textStart");
        btnCopy.classList.remove("hiddenCopy");
        btnCopy.classList.add("showCopy");
        console.log(btnCopy);
        
    });

    //Boton de desencriptar
    btnDesencriptar.addEventListener("click", (e) => {
        const textDesencriptar = desencriptar(textoUsuario);
        textoSucess = textDesencriptar;
        backResultado.innerHTML = textDesencriptar;
        resultado.classList.remove("textCenter");
        resultado.classList.add("textStart");
        btnCopy.classList.remove("hiddenCopy");
        btnCopy.classList.add("showCopy");
    });

    // Boton de copiar
    btnCopy.addEventListener("click", (e) => {
        console.log("click");
        navigator.clipboard.writeText(textoSucess).then(
            () => {
              console.log("sucess");
              
            },
            () => {
                console.log("no sirve");
            },
          );
        
        
    }
    )
};

// Función encriptar
const encriptar = (text) => {
    text = text.toLowerCase();
    console.log(vocales);

    for (let index = 0; index < vocales.length; index++) {
        if (text.includes(vocales[index][0])) {
            text = text.replaceAll(
                vocales[index][0],
                vocales[index][1]
            );
        }
    }
    return text
};

//Función desencriptar
const desencriptar = (text) => {
    text = text.toLowerCase();
    console.log(vocales);

    for (let index = 0; index < vocales.length; index++) {
        if (text.includes(vocales[index][1])) {
            text = text.replaceAll(
                vocales[index][1],
                vocales[index][0]
            );
        }
    }
    console.log(text);
    return text
};
init();
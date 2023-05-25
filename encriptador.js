
function limitarCaracteres(textareaId) {
    var textarea = document.getElementById(textareaId);

    textarea.addEventListener("input", function () {
        var texto = textarea.value;
        texto = texto.toLowerCase();
        texto = texto.normalize("NFC").replace(/[\u0300-\u036f]/g, "");
        var caracteresInvalidos = texto.match(/[^a-zA-Z0-9\s]/g);
        if (caracteresInvalidos) {
            texto = texto.replace(/[^a-zA-Z0-9\s]/g, "");
            alert("Se ha ingresado un carácter inválido: " + caracteresInvalidos.join(", "));
            // Mostrar mensaje de alerta
        }// Verificar si hay caracteres inválidos  
        textarea.value = texto;
    });
}
/* comentario funcion Limitar Caracteres
Modifica la función limitarCaracteres para que reciba el id del textarea como parámetro
utiliza el evento "input", que se activa cuando se produce un cambio en el valor del textarea,
ya sea por ingreso de texto 
La función function() { ... } es el callback o la función de manejo del evento. 
Es decir, es el código que se ejecutará cuando se dispare el evento "input". 
Dentro de esta función.
Cada vez que se produzca un cambio en el valor del textarea, se ejecutará la función definida 
en el callback. 
Esto asegura que el texto ingresado se procese y se actualice en el textarea de acuerdo con las 
condiciones especificadas.
La función normalize("NFD") se utiliza para descomponer los caracteres Unicode que tienen 
diacríticos en una secuencia de dos caracteres el carácter base y el diacrítico por separado. 
Esto significa que los caracteres con acentos, tildes, diéresis u otros diacríticos se 
descomponen en sus componentes individuales.
Luego, la expresión regular /[\u0300-\u036f]/g se utiliza para encontrar y reemplazar todos 
los caracteres diacríticos en el texto.
La función replace se encarga de reemplazar los caracteres no deseados por una cadena vacía.
/g =  es una bandera que se utiliza en JS para indicar que la coincidencia de la expresión 
regular debe ser global8, es decir, que debe buscar y reemplazar todas las coincidencias
Eliminar caracteres especiales y acentos
*/


function encriptar() {
    var textoNormal = document.getElementById("inputText").value
    var vocales = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    } // objeto para definir los String para cada vocal
    var textoCifrado = "";

    for (var i = 0; i < textoNormal.length; i++) {
        var char = textoNormal[i];

        if (vocales.hasOwnProperty(char)) {
            textoCifrado += vocales[char];
            // Agregar el string correspondiente a la vocal
        } else {
            textoCifrado += char;
            // Mantener el caracter original si no es una vocal
        }

    }
    document.getElementById("outputText").value = textoCifrado
    inputText.value = ""; 
    /*
    inputText.value = "";  = limpia el textarea
    La función hasOwnProperty* es una función incorporada de JavaScript que se 
    utiliza para determinar si un objeto tiene una propiedad con el 
    nombre especificado
    */
}

function desencriptar() { 
   

}


function copiar(text) {
    var textarea = document.getElementById("outputText");
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    // Para dispositivos móviles 

    if (document.execCommand("copy")) {
        alert("Copiado al portapapeles");
    } else {
        alert("No se pudo copiar. Su navegador actual no es compatible con esta accion")
    }

    /*
    primero selecciona el texto del textarea y luego intenta copiarlo al portapapeles utilizando document.execCommand("copy"). 
    Si la copia al portapapeles es exitosa, muestra un mensaje de confirmación.
    De lo contrario, muestra un mensaje indicando que la copia al portapapeles no es compatible con el navegador.
    */
}



// invocacion de las funciones

limitarCaracteres("inputText");
limitarCaracteres("outputText");



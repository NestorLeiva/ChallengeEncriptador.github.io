function soloLectura() {
    var textarea = document.getElementById("outputText");
    textarea.readOnly = true;
    // Obtener una referencia al elemento textarea
    // Bloquear la opción de escritura
}

function limitarCaracteres() {
    var textarea = document.getElementById("inputText");
    textarea.addEventListener("input", function () {
        var texto = inputText.value;
        texto = texto.toLowerCase()
        // Convertir todas las letras a minúsculas
        texto = texto.normalize("NFC").replace(/[\u0300-\u036f]/g, "");
        /* La función replace se encarga de reemplazar los caracteres no deseados por una cadena vacía.
        /g =  es una bandera que se utiliza en JS para indicar que la coincidencia de la expresión regular debe ser global8, es decir, que debe buscar y reemplazar todas las coincidencias
        Eliminar caracteres especiales y acentos */
        var caracteresInvalidos = texto.match(/[^a-zA-Z0-9\s]/g);
        if (caracteresInvalidos) {
            texto = texto.replace(/[^a-zA-Z0-9\s]/g, "");
            // \s en la expresión regular permite que se acepte el carácter de espacio
            alert("Se ha ingresado un carácter inválido: " + caracteresInvalidos.join(", "));
            // Mostrar mensaje de alerta
        }// Verificar si hay caracteres inválidos        
        inputText.value = texto;
    })
}
/* comentario funcion Limitar Caracteres
utiliza el evento "input", que se activa cuando se produce un cambio en el valor del textarea, ya sea por ingreso de texto 
La función function() { ... } es el callback o la función de manejo del evento. Es decir, es el código que se ejecutará cuando se dispare el evento "input". Dentro de esta función.
Cada vez que se produzca un cambio en el valor del textarea, se ejecutará la función definida en el callback. 
Esto asegura que el texto ingresado se procese y se actualice en el textarea de acuerdo con las condiciones especificadas.

La función normalize("NFD") se utiliza para descomponer los caracteres Unicode que tienen diacríticos en una secuencia de dos caracteres: 
el carácter base y el diacrítico por separado. 
Esto significa que los caracteres con acentos, tildes, diéresis u otros diacríticos se descomponen en sus componentes individuales.
Luego, la expresión regular /[\u0300-\u036f]/g se utiliza para encontrar y reemplazar todos los caracteres diacríticos en el texto.
*/


// invocacion de las funciones

document.addEventListener("DOMContentLoaded", soloLectura);
document.addEventListener("DOMContentLoaded", limitarCaracteres);

/* comentario funcion limitar Caracteres
controlador de eventos en el evento input. Dentro del controlador de eventos, se obtiene el valor actual del textarea y se realiza el procesamiento necesario.
Para eliminar los caracteres especiales y los acentos, se utiliza el método normalize* 
junto con la expresión regular [\u0300-\u036f] para eliminar los caracteres diacríticos. 
A continuación, se utiliza otra expresión regular [^a-z] para eliminar todos los caracteres que no sean letras minúsculas.
*/

/* comentario DOM 
llamado de la funcion para solo lectura
DOM significa "Document Object Model" (Modelo de Objetos del Documento, en español), que permite a los programas acceder y manipular su contenido de manera dinámica.
Al utilizar el evento "DOMContentLoaded" y agregar un controlador de eventos, aseguras de que el código JavaScript se ejecute solo cuando el  DOM esté 
completamente cargado, lo que garantiza que los elementos HTML existan y sean accesibles antes de intentar manipularlos.
*/
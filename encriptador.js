
function soloLecturaTextarea() {
    var textarea2 = document.getElementById("textarea2");
    // Obtener una referencia al elemento textarea
    textarea2.readOnly = true;
    // Bloquear la opción de escritura
}

function limitarCaracteres() {
    var textarea1 = document.getElementById("textarea1");
    textarea1.addEventListener("input", function () {
        var texto = textarea1.value;
        texto = texto.toLowerCase();
        // Convertir todas las letras a minúsculas
        texto = texto.normalize("NFC").replace(/[\u0300-\u036f]/g, "");
        // Eliminar caracteres especiales y acentos

        // texto = texto.replace(/[^a-z]/g, "");

        textarea1.value = texto
    })
}
/* comentario funcion Limitar Caracteres
utiliza el evento "input", que se activa cuando se produce un cambio en el valor del textarea, ya sea por ingreso de texto 
La función function() { ... } es el callback o la función de manejo del evento. Es decir, es el código que se ejecutará cuando se dispare el evento "input". Dentro de esta función.
Cada vez que se produzca un cambio en el valor del textarea, se ejecutará la función definida en el callback. 
Esto asegura que el texto ingresado se procese y se actualice en el textarea de acuerdo con las condiciones especificadas.
*/



document.addEventListener("DOMContentLoaded", limitarCaracteres);
/* comentario funcion limitar Caracteres
controlador de eventos en el evento input. Dentro del controlador de eventos, se obtiene el valor actual del textarea y se realiza el procesamiento necesario.
Para eliminar los caracteres especiales y los acentos, se utiliza el método normalize* 
junto con la expresión regular [\u0300-\u036f] para eliminar los caracteres diacríticos. 
A continuación, se utiliza otra expresión regular [^a-z] para eliminar todos los caracteres que no sean letras minúsculas.
*/
document.addEventListener("DOMContentLoaded", soloLecturaTextarea);
/* comentario DOM 
llamado de la funcion para solo lectura
DOM significa "Document Object Model" (Modelo de Objetos del Documento, en español), que permite a los programas acceder y manipular su contenido de manera dinámica.
Al utilizar el evento "DOMContentLoaded" y agregar un controlador de eventos, aseguras de que el código JavaScript se ejecute solo cuando el  DOM esté 
completamente cargado, lo que garantiza que los elementos HTML existan y sean accesibles antes de intentar manipularlos.
*/



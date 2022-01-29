// let = variable local.
// var = variable global.
// template string(``).
// interpolación = une cadena de texto con variable.
// .tofixed(2) = redondea a los decimales indicados en los parentesis.
// typeof(variable) = muestra el tipo de dato de una variable.
// undefined = variable que no se le ha asignado algun valor; null = significa que esta vacia intencionalmente.
//NaN = significa que uno de los valores en una operacion aritmetica no es un numero.
//document.write() = muestra en pantalla.
//nota = se puede definir el valor de parametros en funciones o metodos.
//funcion expresiva = La función expresiva es una variable que contiene adentro una función.
//push() = añade uno o más elementos al final de un array.
//pop() = borra uno o más elementos al final de un array.
// for in = recorre las propiedades de un objeto.
// for of = Le permite recorrer estructuras de datos iterables como matrices, cadenas, mapas, listas de nodos y más.
//foreach = recorre un array.
// throw = crear un error en el bloque try.
// continue = se salta una iteracion.
// metodos estaticos = se pueden usar fuera de una clase sin necesidad de instanciarlos.
// math.ceil = redondea al numero entero siguiente.
// math.floor = redondea al numero entero anterior.
//math.round = retorna el valor de un número redondeado al entero más cercano.
// math.sign = retorna -1 si el valor es negativo y si es positivo retorna 1 y si es  0 retorna 0.
// expresion regular = Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto.
// funcion anonima = permite crear una funcion sin darle nombre y se ejecuta sin necesidad de invocarla.
// split() = convierte una cadena en un array y la separa.
//slice = devuelve el numero de caracteres que se deseen en una cadena, variable.slice(numInicial,Numfinal)
//observacion(prototipos) = no usar funciones flechas.
// math.sqrt(valor) = retorna la raiz cuadrada de el valor dado por parametros.
// funciones asincronas = Las funciones asíncronas (async / await) surgen para simplificar el manejo de las promesas.
// symbol = Symbol es un tipo de datos cuyos valores son únicos e immutables.
// Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos
// set = El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
// Map = El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// indexOf() = retorna el primero indice en el que se puede encontrar un elemento dado en un array o -1 si el elemento no existe
//functionName.call(). Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
//functionName.apply(). Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
//functionName.bind(). Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.
//JSON = sirve para intercambiar datos entre diferentes lenguajes de programacion.
//JSON.parse() = convierte JSON a javascript
//JSON.stringify(datos) = convierte javascript a JSON
//document.querySelector('a') = captura selectores de html.
//document.documentElement.getAttribute('atributo') = captura el elemento seleccionado.
//document.documentElement.setAttribute('lang','es-CL') = cambia el atributo del primer parametro, pasado por el segundo parametro.
//document.getElementsByTagName() = selecciona los elementos tipo name
//document.querySelector() = selecciona los elementos por su selector
//document.querySelectorAll()= selecciona todos los elementos por su selector
// nota DOM = declarar variables con $variable
//variable.removeAttribute = remueve un atributo
//Los atributos data-*  permiten almacenar información adicional sobre un elemento HTML cualquiera sin tener que recurrir a artilugios tales como la utilización de atributos no estándar
// dataset = muestra los dataAtributos.
//La CSSStyleDeclaration.setProperty()interfaz del método establece un nuevo valor para una propiedad en un objeto de declaración de estilo CSS.
//variable.getComputedStyle = devuelve un objeto de solo lectura de los estilos
//document.documentElement = devuelve la etiqueta html
//document = para acceder a todo el dom, ej: document.body, document.head, etc.
//acceder a las variables css = getComputedStyle(document.documentElement).getPropertyValue('--micolor')\
//classList = acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element.className.
//className = obtiene y establece el valor del atributo class del elemento especificado.
//toggle = si tiene una clase agregada se la quita y sino se la agrega, ej:btn.classList.toggle('fondobtn')
//nombreclase.add = agrega una clase
//nombreclase.remove = quita una clase
//nombreclase.replace('claseAreemplazar','claseQueReemplazara')
//innerHtml = Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
//textContent = estable el texto indicado
//firstChild = devuelve el primer hijo de un elemento
//lastchild = devuelve el ultimo hijo de un elemento
//children = devuleve todos los hijos de un elemento
//children[numero de hijo] = devuelve el hijo que se desea
//elemento.previousElementSibling = devuelve el hermano anterior
//elemento.nextElementSibling = devulve el hermano siguiente
//closest = devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector proporcionado por parámetro. Si no existe dicho ascendiente, devuelve null.
//createElement = crea elementos html eje:documnet.createElement('div'), esto crea un div
//documet.createTextNode(texto) = Crea un nuevo nodo de texto.
//elemento.appendchild = agrega un hijo al elemento seleccionado
//document.createDocumentFragment() = crea un nuevo fragmento, esto mejora el rendimiento del contenido ingresado al dom
//replaceChild() = reemplaza el hijo pasado por el segundo parametro por el del primero, padre.replaceChild(hijoReemplazador,hijoReemplazado)
//insertBefore = inserta un hijo antes del hijo pasado por el segundo parametro
//removeChild = elimina el hijo pasado por el parametro, padre.removeChild(padre.children[0])
//cloneNode = padre.cloneNode(true), esto clona el nodo seleccionado y al poner true tambien clona todos sus hijos.
//elemento.setAttribute = establece un atributo
//elemento.getAttribute = obtiene un atributo
//elemento.removeAttribute = remueve un atributo
//elemento.hasAttribute = devuelve true si el elemento tiene el atributo indicado, false si no lo tiene
//parentNode = devuelve el padre del elemento
//parentElement = devuelve el padre del elemento
//childNodes = devuelve todos los hijos del elemento
//childElementCount = devuelve el numero de hijos del elemento
/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
//prepend() = inserta un nodo antes del primer hijo del nodo padre, padre.prepend(p)
//append = inserta un nodo despues del ultimo hijo del nodo padre, padre.prepend(p)
//before = inserta un nodo antes del nodo seleccionado, padre.before(p)
//after = inserta un nodo despues del nodo seleccionado, padre.after(p)
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//nota eventos semanticos = solo se le puede agregar una fucion''metodo', element.onclick = ()=>{aqui va lo que hara el evento}
//Domcontentloaded = cuando el documento esta listo 
//load = cuando el documento esta cargado completamente
// nota 2 eventos = once = solo se ejecuta una vez, element.addEventListener('click',()=>{aqui va lo que hara el evento},{once:true})
// stopPropagation = detiene la propagacion de eventos, ej: element.addEventListener('click',()=>{aqui va lo que hara el evento},{stopPropagation:true})
//nota 3 eventos = capture = captura el evento en el elemento padre, ej: element.addEventListener('click',()=>{aqui va lo que hara el evento},{capture:true})
//nota 4 eventos = passive = permite que el navegador no ejecute el evento, ej: element.addEventListener('click',()=>{aqui va lo que hara el evento},{passive:true})
// preventDefault = detiene la accion por defecto del evento, ej: element.addEventListener('click',()=>{aqui va lo que hara el evento},{preventDefault:true})
//parentNode = devuelve el padre del elemento
//element.matches = devuelve true si el elemento cumple con el selector, ej: element.matches('div')
//event.target = devuelve el elemento que disparo el evento
//delegacion de eventos = seleccionar un elemento y agregar un evento a todos los hijos que cumplan con el selector
//windows.innerWidth = devuelve el ancho de la ventana
//windows.innerHeight = devuelve el alto de la ventana
//window.scrollX = devuelve la posicion en x de la ventana
//window.scrollY = devuelve la posicion en y de la ventana
//window.pageXOffset = devuelve la posicion en x de la ventana
//window.pageYOffset = devuelve la posicion en y de la ventana
//window.screenX = devuelve la posicion en x de la pantalla
//window.screenY = devuelve la posicion en y de la pantalla
//window.screenLeft = devuelve la posicion en x de la pantalla
//window.screenTop = devuelve la posicion en y de la pantalla
//window.screenWidth = devuelve el ancho de la pantalla
//window.screenHeight = devuelve el alto de la pantalla
//window.outerWidth = devuelve el ancho de la ventana
//window.outerHeight = devuelve el alto de la ventana
//window.devicePixelRatio = devuelve el ratio de pixeles de la pantalla
//window.navigator.language = devuelve el idioma del navegador
//window.navigator.userAgent = devuelve el navegador del usuario
//window.navigator.platform = devuelve el sistema operativo del usuario
//window.navigator.vendor = devuelve el navegador del usuario
//window.navigator.appVersion = devuelve la version del navegador
//window.navigator.appName = devuelve el nombre del navegador
//window.navigator.appCodeName = devuelve el codigo del navegador
//window.navigator.product = devuelve el producto del navegador
//window.navigator.cookieEnabled = devuelve true si el navegador tiene habilitado las cookies
//window.navigator.onLine = devuelve true si el navegador esta conectado a internet
//window.navigator.hardwareConcurrency = devuelve el numero de nucleos del procesador
//window.navigator.maxTouchPoints = devuelve el numero de puntos de toque del navegador
//window.navigator.doNotTrack = devuelve true si el navegador no esta trackeado
//window.navigator.geolocation = devuelve la geolocalizacion del navegador
//windows.location.href = devuelve la url actual
//windows.location.protocol = devuelve el protocolo de la url
//windows.location.host = devuelve el host de la url
//windows.location.hostname = devuelve el hostname de la url
//windows.location.port = devuelve el port de la url
//windows.location.pathname = devuelve el pathname de la url
//windows.location.search = devuelve el search de la url
//windows.location.hash = devuelve el hash de la url
//windows.location.reload = recarga la pagina
//windows.location.assign = carga una url
//windows.location.replace = reemplaza la url
//windows.location.reload(forceGet) = recarga la pagina
//windows.location.toString = devuelve la url actual
//windows.location.origin = devuelve la url actual
//windows.document.title = devuelve el titulo de la pagina
//windows.open(url, target, features, replace) = abre una ventana
//windows.close() = cierra la ventana
//windows.print() = imprime la pagina
//speechSynthesis.speak(utterance) = habla
//speechSynthesis.cancel() = cancela el habla
//speechSynthesis.pause() = pausa el habla
//speechSynthesis.resume() = reanuda el habla
//speechSynthesis.pending = devuelve true si el navegador esta hablando
//speechSynthesis.paused = devuelve true si el navegador esta pausado
//speechSynthesis.speaking = devuelve true si el navegador esta hablando
//serviceWorker.register(url) = registra el service worker
//matches = devuelve true si el elemento cumple con el selector, ej: element.matches('div')

//Importaciones de modulos js.
import reloj from './reloj.js';
import juego from './eventos_teclado.js';
let panel = document.querySelector('#panel');
document.addEventListener('click',(e)=>{
  //Si se hace click en el boton hamburguesa
 if(e.target.matches('#btn-amburguesa')||e.target.matches('.amburguesa')){
  return panel.classList.toggle('activo');
 }
 //Si se hace click los link del panel
 if(e.target.matches('#panel a')){
   return panel.classList.toggle('activo');
 }
});
reloj();
juego();
console.log(panel.children[0].id)
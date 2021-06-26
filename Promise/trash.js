console.log('Hola mundo! con JS');

// un aconstante en js no cambia
const noCambia = "Gustavo"
let cambia = "Qgustavo"

function cambiarNombre(nuevoNombre){
    cambia = nuevoNombre
}

// ---------------------
// Promesas
// ------------
/**
 *
 */


const getUser = new Promise (function(todoBien, TodoMal){
    // si llamo a una api puede demorar bastante para ello podemos utilizar
    setTimeout(function(){
        // Luego de 3 segundos
        todoBien('Se acabo el tiempo');
    }, 3000);
});

const getUser2 = new Promise (function(todoBien, TodoMal){
    // si llamo a una api puede demorar bastante para ello podemos utilizar
    setTimeout(function(){
        // Luego de 5 segundos
        TodoMal('Se acabo el tiempo');
    }, 5000);
});

// llamamos a getUser bamos a saber si nos fue bien en la promesa o mal en la promesa
// getUser 
//     .then (function(){
//         console.log('todo va bien en la vida');
//     })
//     // si a todo mal le agrego el argumento significa que el catcha debe llevar un parametro en este caso message
//     .catch(function (message) {
//         console.log(message)
//     })

// que pasaria si quiero recinir muchas promesas para ello existe un funcion de promise.all
Promise.all([
    getUser,
    getUser2,
])
.then(function(msg){
    console.log(msg)
})
.catch(function (msg) {
    console.log(msg);
})

// ---------------------
// ajax jquery
// ------------
/**
 *
 */

//  $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     },
//     error:function (error){
//         console.log(error)
//     }
//   });

// ---------------------
// ajax java script esto es un XMLHttpRequest
// ------------
/**
 * Para java script puro y duro Vanilla JS  utilizaremos fetch
 * fetch devuelve promesas con .then y nuestras respuesta tiene un metodo que se llama json
 * json puede devolver al igual que las promesas nuestro json y de la misma forma que una 
 * promeda necesita atrapar lo malo y lo bueno.
 */

fetch('https://randomuser.me/api/')
  .then(function(response){
    //   console.log(response)
     return response.json()
  })
  .then(function(user){
      console.log('user fetch', user.results[0].name.first)
  })
  .catch(function(){
      console.log('Algo falló')
  });

// ---------------------
// Funciones asincronas
// ------------

/** para esto se utiliza la palabra async y lleva un funcion
 *  dentro del async lleva una palabra reservada llamada await
 *  esto espera las petciones de una api por ejemplo
 * puedo llamar load de dos formas llamarla desde la funciona o bien envolverla
 * 
 */

/**
     *  el fetch por si solo debe utilizar un then y catch pero al estar dentro de una funcion asincrona 
     * podemos utilizar el await asignando a una variable. y lo que hara esto es esperar que acabe la llamada
     * de la peticion y luego ejecutar lo que coloque en las siguientes lineas
     * */ 

// (async function load(){
    
//     const response = await fetch('https://yts.mx/api/v2/list_movies.json?genre=action')
//     const data = await response.json()
//     console.log(data);
// })()

(async function load(){
   async function getData(url){
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
    // async await
    const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    // const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')

    // con promesas
    let dramaList;
    getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
    .then(function (data) {
        console.log('dramaList', data);
        dramaList = data;
      })
      .catch(function () {
          console.log('Algo fallo')
        })
    console.log('Listas: ' , actionList, animationList);
})()

// ---------------------
// Selectores con JS JQ
// ------------
/**
 * para seleccionar un selecter en jquery utilizamos $('selector')
 * se puede asiganr a una variable y ademas por convencion de algunos desarrolladores agregan un signo peso para indicar que esto va al dom
 * en la parte del selector podemos agregar varios selectores.
 */
const $home = $('.home .list #item');

const $home = document.getElementById('')
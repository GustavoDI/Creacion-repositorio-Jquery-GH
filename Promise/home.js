// api asincrona con fetch
(async function load() {
    async function getData(url) {
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
    console.log('Listas accion: ', actionList, 'Listas animacion: ', animationList);

    function ViewTemplates(movie) {
        return (

            `<div class="card-group">
            <div class="card-group"  id="action-movies">
                <img src="${movie.medium_cover_image}" class="card-img-top img-apis" alt="${movie.title}" id="img-apis">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.title_long}</p>
                </div>
            </div>
            </div>`
        )
    };

    const accion = document.getElementById('prueba');
    accion.innerHTML = '';
    actionList.data.movies.forEach((movie) => {
        const HTMLString = ViewTemplates(movie);
        // console.log(HTMLString);
        accion.innerHTML +=

            `<div class="card-group">
            <div class="card-group"  id="action-movies">
            <img src="${movie.medium_cover_image}" class="card-img-top img-apis" alt="${movie.title}" id='img-apis'>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${movie.title_long}</p>
            </div>
        </div>
        </div>`
    });

    // console.log(ViewTemplates());
})()


// filtrar
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
// const resultado = document.querySelector('#resultado');
const resultado = document.querySelector('#prueba');

// const filtrar = ()=> {
//     // console.log(formulario.value);
//     resultado.innerHTML = '';
//     const texto = formulario.value.toLowerCase();
//     for (let producto of productos){
//         let nombre = producto.nombre.toLowerCase();
//         if (nombre.indexOf(texto) !== -1){
//             resultado.innerHTML += `<li>${producto.nombre} - Valor: ${producto.valor}</li>`

//         }
//     }
//     if (resultado.innerHTML === ''){
//         resultado.innerHTML += `<li>Producto no encontrado</li>`
//     }
// }

// const filtrar = () => {
//     resultado.innerHTML = '';
//     const texto = formulario.value.toLowerCase();
//     for (let peli in actionList)
//         let nombre = peli.data.movies.title.toLowerCase();
//         if (nombre.indexOf(texto) !== -1) {
//             resultado.innerHTML += `
//         <div class="card-group">
//             <div class="card-group"  id="action-movies">
//                 <img src="${movie.medium_cover_image}" class="card-img-top img-apis" alt="${movie.title}" id='img-apis'>
//                 <div class="card-body">
//                     <h5 class="card-title">${movie.title}</h5>
//                     <p class="card-text">${movie.title_long}</p>
//                 </div>
//             </div>
//         </div>`
//     }
//     if (resultado.innerHTML ===''){
//         resultado.innerHTML += `<li>Producto no encontrado</li>`
//     }

// };
boton.addEventListener('click', filtrar);
// formulario.addEventListener('keyup', filtrar);

// creacion de lista de productos
// const productos = [
//     { nombre: 'Platanos', valor: 500 },
//     { nombre: 'Pera', valor: 500 },
//     { nombre: 'Sandia', valor: 500 },
//     { nombre: 'Melon', valor: 500 },
//     { nombre: 'Frutillas', valor: 500 },
// ]


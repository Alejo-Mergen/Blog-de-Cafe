//querySelector
// const heading = document.querySelector('.header__texto h2') // 0 o 1 Elemento
// heading.textContent = "Nuevo Heading";
// heading.classList.add('nueva-clase');
// console.log(heading)
// //querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo texto para Enlace';
// //getElementById

// const heading2 = document.getElementById('heading')

// //Generar un nuevo enlace
// const nuevoEnlace = document.createElement('A')
// // Agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html';
// // Agregar el texto
// nuevoEnlace.textContent = 'Tienda Virtual';
// // Agregar la clase
// nuevoEnlace.classList.add('navegacion__enlace'); 
// //Agregarlo al Documento
// const navegacion = document.querySelector('.navegacion')
// navegacion.appendChild(nuevoEnlace)
// console.log()

// //Eventos
// console.log(1)


// window.addEventListener('load', () => { //load esparar que los archivos se descargen
//     console.log(2)
// })

// window.onload =  () =>{
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', () => { //Solo espera a que se descarga el HTML, pero no al CSS o img 
//     console.log(4);
// });

// console.log(5);

// window.onscroll = () => {
//     console.log('scrolling...')
// }


//Seleccionar elementos y asociales un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('Enviar formulario');
// });
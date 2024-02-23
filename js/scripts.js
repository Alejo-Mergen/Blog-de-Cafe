
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);



//El Evento de Submit 
//Submit por el formulario

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    //Validacion

    const { nombre, email, mensaje } = datos; //Distrajeron
    if(nombre === '' || email === '' || mensaje === '') {
        enviarAlerta('Todos los campos son obligatorios', 'true');
        return;
    }

    enviarAlerta('Enviado correcto');
});

function leerTexto(e) {
    //console.log(e.target.value)
    datos[e.target.id] = e.target.value;

    console.log(datos)
}

function enviarAlerta(mensaje, error = null){
    const alert = document.createElement('P');
    alert.textContent = mensaje;
    if(error){
        alert.classList.add('error')
    }else {
        alert.classList.add('correcto')
    }

    formulario.appendChild( alert );

    //Desaparezca

    setTimeout(() =>{
        error.remove();
    }, 3000);

}

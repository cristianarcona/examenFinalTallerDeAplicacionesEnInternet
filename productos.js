const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
button1.addEventListener('click', mostrarMensaje)
button2.addEventListener('click', mostrarMensaje)

function mostrarMensaje(){
    alert("Tenemos Descuentos")
}
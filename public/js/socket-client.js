
/*html*/

const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')

const socket = io()
socket.on('connect', () => {
    console.log('conectado papu')
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    console.log('desconectado papu')
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})

socket.on('enviar-mensaje', (payload) => {
    console.log('el server mando algo papu', payload)
})

btnEnviar.addEventListener('click', () =>{
    const payload = {
        mensaje: txtMensaje.value,
        usuario: 'asdadasd',
        fecha : new Date()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server ', id)
    })
})
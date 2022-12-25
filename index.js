const button = document.getElementById('btn')
const eyeElement = document.querySelector('.fa-eye')
const passwordInput = document.querySelector('#password')
const testeInput = document.querySelector('#teste')
const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')


button.addEventListener('click', mostrarOcultarSenha)

function mostrarOcultarSenha () {
    const senha = document.getElementById("password")
    if (senha.type == 'password') {
        senha.type = 'text'
        eyeElement.classList.add('fa-eye-slash')
    } else {
        senha.type = 'password'
        eyeElement.classList.remove('fa-eye-slash')
    }
}


passwordInput.addEventListener('keydown', (e) => {
const capsLockIn = e.getModifierState('CapsLock')
testeInput.style.display = capsLockIn ? 'block' : 'none'

})


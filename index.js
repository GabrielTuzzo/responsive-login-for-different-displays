const button = document.getElementById('btn')
const eyeElement = document.querySelector('.fa-eye')
const name = document.getElementById('name')
const passwordInput = document.getElementById('password')
const form = document.getElementById('form')
const testeInput = document.querySelector('#teste')

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

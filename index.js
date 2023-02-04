const button = document.getElementById('btn')
const eyeElement = document.querySelector('.fa-eye')
const passwordInput = document.querySelector('#password')
const usernameInput = document.querySelector('#username')
const capslockInputpassword = document.querySelector('#capsLockinpassword')
const capslockInputusername = document.querySelector('#capsLockinname')
const name = document.getElementById('name')
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

usernameInput.addEventListener('keydown', (e) => {
    const capslockOn = e.getModifierState('CapsLock')
    capslockInputusername.style.display = capslockOn ? 'block' : 'none'
})
usernameInput.addEventListener('blur', () => {
    capslockInputusername.style.display = 'none'
})
usernameInput.addEventListener('click', (e) => {
    const capslockOn = e.getModifierState('CapsLock')
    capslockInputusername.style.display = capslockOn ? 'block' : 'none'
})

passwordInput.addEventListener('keydown', (e) => {
    const capslockOn = e.getModifierState('CapsLock')
    capslockInputpassword.style.display = capslockOn ? 'block' : 'none'
})
passwordInput.addEventListener('blur', () => {
    capslockInputpassword.style.display = 'none'
})
passwordInput.addEventListener('click', (e) => {
    const capslockOn = e.getModifierState('CapsLock')
    capslockInputpassword.style.display = capslockOn ? 'block' : 'none'
})



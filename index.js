const button = document.getElementById('btn')
const eyeElement = document.querySelector('.fa-eye')

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
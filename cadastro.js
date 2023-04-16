const senha = document.getElementById('senha')
const confirmarsenha = document.getElementById('confirmarsenha')
const eye = document.getElementById('eye')
const eye2 = document.getElementById('eye2')

eye.addEventListener('click', trocareye)
eye2.addEventListener('click',trocareye2)

function trocareye(){
    if(eye.classList.contains('fa-eye-slash')){
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        senha.type = 'text';
    } else{
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
        senha.type = 'password';
    }
}

function trocareye2(){
    if(eye2.classList.contains('fa-eye-slash')){
        eye2.classList.remove('fa-eye-slash');
        eye2.classList.add('fa-eye');
        confirmarsenha.type = 'text'
    } else {
        eye2.classList.remove('fa-eye');
        eye2.classList.add('fa-eye-slash');
        confirmarsenha.type = 'password';
    }
}
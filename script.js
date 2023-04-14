const icone = document.getElementById('eye');
const password = document.getElementById('senha');

icone.addEventListener('click', trocaricon);

function trocaricon() {
  if (icone.classList.contains('fa-eye-slash')) {
    icone.classList.remove('fa-eye-slash');
    icone.classList.add('fa-eye');
    password.type = 'text';
  } else {
    icone.classList.remove('fa-eye');
    icone.classList.add('fa-eye-slash');
    password.type = 'password';
  }
}
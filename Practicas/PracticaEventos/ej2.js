const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const boton = document.getElementById('enviar');


let emailValido = false;
let passwordValido = false;

function actualizarBoton() {
      if (emailValido && passwordValido) {
        boton.disabled = false;
        boton.classList.add('enabled');
      } else {
        boton.disabled = true;
        boton.classList.remove('enabled');
      }
    }

password.addEventListener('blur', function() {

    const value = password.value.trim();

    if (value.length < 8 || value.length >10) {
        passwordError.textContent = 'La contraseña debe tener entre 8 y 10 caracteres';
        passwordValido = false;
    }else{
        passwordError.textContent = '';
        passwordValido = true;
    }

    actualizarBoton();
});

email.addEventListener('blur', function() {

  const value = email.value.trim();

  if(value.includes('@')){
    emailValido = true;
    emailError.textContent = '';
  }else{
    emailValido = false;
    emailError.textContent = 'El email debe contener un @';
  }

  actualizarBoton();
});

email.addEventListener('focus', function(){
  emailError.textContent = '';
});

password.addEventListener('focus', function(){
  passwordError.textContent = '';
});

document.getElementById('formulario').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Formulario listo!");
});
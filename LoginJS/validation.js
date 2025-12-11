let botonMostrar = document.getElementById("mostrar");
let inputPass = document.getElementById("pass");
let botonLogin = document.getElementById("login");
let mensaje = document.getElementById("mensaje");

botonMostrar.onclick = function() {
    if (inputPass.type === "password") {
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
}

botonLogin.onclick = function() {
    mensaje.textContent = "Has iniciado sesión";
}

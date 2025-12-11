let botonMostrar = document.getElementById("mostrar");
let inputPass = document.getElementById("pass");
let botonLogin = document.getElementById("login");
let mensaje = document.getElementById("mensaje");

if (botonMostrar) {
    botonMostrar.onclick = function() {
        inputPass.type = inputPass.type === "password" ? "text" : "password";
    }
}

if (botonLogin) {
    botonLogin.onclick = function() {
        mensaje.textContent = "Has iniciado sesión";
        mensaje.style.color = "lightgreen";
    }
}

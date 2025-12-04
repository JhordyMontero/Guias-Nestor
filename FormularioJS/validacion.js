const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    let errores = [];

    if (nombre === "") {
        errores.push("El Nombre no puede estar vacío");
    }

    const regexCorreo = /\S+@\S+\.\S+/;
    if (!regexCorreo.test(correo)) {
        errores.push("El correo no es válido");
    }

    if (telefono.length < 10) {
        errores.push("El teléfono debe contener al menos 10 números");
    }

    if (contraseña.length < 6) {
        errores.push("La contraseña debe contener mínimo 6 caracteres");
    }

    if (errores.length > 0) {
        alert("Por favor, corrige lo siguiente: \n- " + errores.join("\n- "));
    } else {
        alert("Formulario exitoso");
        formulario.reset();
    }
}

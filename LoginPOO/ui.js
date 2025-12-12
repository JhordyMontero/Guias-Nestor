class UIManager {
    showLogin() {
        document.getElementById("form-title").innerText = "Iniciar Sesión";
        document.getElementById("login-form").classList.remove("hidden");
        document.getElementById("register-form").classList.add("hidden");
        document.getElementById("forgot-form").classList.add("hidden");
    }

    showRegister() {
        document.getElementById("form-title").innerText = "Crear Cuenta";
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("register-form").classList.remove("hidden");
        document.getElementById("forgot-form").classList.add("hidden");
    }

    showForgot() {
        document.getElementById("form-title").innerText = "Recuperar Contraseña";
        document.getElementById("login-form").classList.add("hidden");
        document.getElementById("register-form").classList.add("hidden");
        document.getElementById("forgot-form").classList.remove("hidden");
    }
}

const ui = new UIManager();

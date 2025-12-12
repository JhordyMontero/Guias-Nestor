class App {
    constructor() {
        this.users = [];
    }

    login() {
        let email = document.getElementById("login-email").value;
        let pass  = document.getElementById("login-password").value;

        const user = this.users.find(u => u.email === email && u.pass === pass);

        if (user) {
            alert(`Bienvenido ${user.name}`);
        } else {
            alert("Correo o contraseña incorrectos");
        }
    }

    register() {
        let name  = document.getElementById("reg-name").value;
        let email = document.getElementById("reg-email").value;
        let pass  = document.getElementById("reg-password").value;

        this.users.push({ name, email, pass });

        alert(`Cuenta creada para ${name}`);
        ui.showLogin(); 
    }

    recover() {
        let email = document.getElementById("forgot-email").value;

        const user = this.users.find(u => u.email === email);

        if (user) {
            alert(`Se envió un enlace de recuperación a ${email}`);
        } else {
            alert("Este correo no está registrado");
        }
    }
}

const app = new App();

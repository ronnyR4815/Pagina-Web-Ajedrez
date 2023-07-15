function validarFormulario() {
    // Validar campo de edad
    var edad = document.getElementById("edad").value;
    if (isNaN(edad)) {
        alert("La edad debe ser un número");
        return false;
    }

    // Validar campo de ELO
    var elo = document.getElementById("elo").value;
    if (isNaN(elo)) {
        alert("El ELO debe ser un número");
        return false;
    }

    // Validar campo de correo electrónico
    var correo = document.getElementById("correo").value;
    var regexCorreo = /\S+@\S+\.\S+/;
    if (!regexCorreo.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido");
        return false;
    }

    var informacion = {
        nombre: document.getElementById("nombre").value,
        edad: parseInt(document.getElementById("edad").value),
        elo: parseInt(document.getElementById("elo").value),
        usuario: document.getElementById("usuario").value,
        correo: document.getElementById("correo").value,
        opinion: document.getElementById("opinion").value
    };

    // Convertir el objeto JSON a una cadena de texto
    var json = JSON.stringify(informacion);

    // Crear un enlace de descarga
    var enlaceDescarga = document.createElement("a");
    enlaceDescarga.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(json));
    enlaceDescarga.setAttribute("download", "informacion_ajedrez.json");

    // Simular un clic en el enlace de descarga
    enlaceDescarga.style.display = "none";
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);

    // Si todos los campos son válidos, se envía el formulario
    return true;
}
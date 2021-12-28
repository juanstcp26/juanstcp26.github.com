// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

// Recorrelars
links.forEach(function (link) {
    // Agregar un evento click a cada uno de ello
    link.addEventListener('click', function (evento) {
        evento.preventDefault();

        setTimeout(function () {
            location.href = "/";
        },500);

        return false;
    });
})

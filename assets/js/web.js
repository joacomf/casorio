function obtenerNombre() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('n')) {
        const nombre = urlParams.get('n');
        document.getElementById("nombrePersona").innerHTML = nombre + ", ";
    }
}

obtenerNombre();
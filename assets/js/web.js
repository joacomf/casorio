function movimientoDeFondoAlPasarMouseSobreCarta() {
    const sobre = $("#sobre");
    const cuerpoDocumento = $("body");

    sobre.on('mouseenter', function () {
        cuerpoDocumento.addClass("animado");
    });

    sobre.on('mouseleave', function () {
        cuerpoDocumento.removeClass("animado");
    });
}

function inicializarCuentaAtras() {
    const fechaCasorio = new Date(2022, 2, 13, 13, 0, 0);

    let estiloCirculos = {
        gauge: {
            thickness: 0.02,
            bgColor: 'rgba(0, 0, 0, 0)',
            fgColor: 'rgba(117, 117, 117, 1)',
            lineCap: 'butt'
        },
        textCSS: 'color: #757575;'
    };

    $('#contenedor_cuenta_atras').ClassyCountdown({
        end: fechaCasorio.getTime(),
        now: new Date().getTime(),

        labelsOptions: {
            lang: {
                days: 'Días',
                hours: 'Horas',
                minutes: 'Minutos',
                seconds: 'Segundos'
            },
            style: 'font-size: 0.5em;'
        },

        style: {
            labels: false,
            textResponsive: 0.5,
            days: estiloCirculos,
            hours: estiloCirculos,
            minutes: estiloCirculos,
            seconds: estiloCirculos
        },
    });
}

function copiarAClipboard(valor) {
    navigator.clipboard.writeText(valor)
        .then(() => alert("Se copió el CBU " + valor + " exitosamente"));
}

function obtenerNombre() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('n')) {
        const nombre = urlParams.get('n');
        $("#nombrePersona").html(", " + nombre);
    }
}

inicializarCuentaAtras();
movimientoDeFondoAlPasarMouseSobreCarta();
obtenerNombre();

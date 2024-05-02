$(document).ready(function(){
    // Función para cambiar la imagen y el título de la canción
    function cambiarCancionInfo(titulo, subtitulo, imagenSrc) {
        $('#cancion-titulo').text(titulo);
        $('#cancion-subtitulo').text(subtitulo);
        $('#cancion-imagen').attr('src', imagenSrc);
    }

    // Control de la reproducción de audio
    $('a.play').click(function(){
        $(this).find('i').toggleClass('fa-play fa-pause');
    });

    // Control de la lista de reproducción
    $('.playlist li').click(function(){
        var titulo = $(this).text();
        var subtitulo = $(this).data('subtitulo');
        var imagenSrc = $(this).data('imagen');
        cambiarCancionInfo(titulo, subtitulo, imagenSrc);
    });
});

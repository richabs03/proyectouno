$(document).ready(function(){

    var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt');
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        $lightbox.find('.close').removeClass('hidden');
    });

    
    $('.carousel').carousel({
      interval: 3500
    });

    /*cambiar estilos cuando el mouse esta sobre el div de productos */
    $('.efectoImg').mouseover(function(){
        $(".efectoImg h2").css("display", "none");
    });

    $('.efectoImg').mouseout(function(){
        $(".efectoImg h2").css("display", "block");
    });

  });

  function validar(){
    var nombre, apellidos, telefono, correo, verificacion;
    nombre = document.getElementById('nombre').value;
    apellidos = document.getElementById('apellidos').value;
    telefono = document.getElementById('telefono').value;
    correo = document.getElementById('correo').value;

    verificacion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellidos === "" || telefono === "" || correo === "" ){
        alert("The fields cannot be empty");
        return false;
    }
    else if (nombre.length>40){
        alert("The Name is too long  1");
        return false;
    }
    else if(apellidos.length>45){
        alert("The Lastname is too long");
        return false;
    }
    else if (telefono.length>11){
        alert("The telephone is too long");
    }
    else if(isNaN(telefono)) {
        alert("El teléfono ingresado no es un numero");
        return false;        
    }

    else if(correo.length>100){
        alert("El correo es muy largo");
        return false;        
    }
    
    else if(!verificacion.test(correo)){
        alert('El correo no es valido desde javascript');
        return false;
    }
    
}

smoothScroll.init({
    selector: '[data-scroll]', // Selector de enlaces (debe ser una clase, ID, atributo de datos o etiqueta de elemento)
    selectorHeader: null, // Selector para encabezados fijos (debe ser un selector de CSS válido) [opcional]
    speed: 2000, // Integer. Qué tan rápido completar el rollo en milisegundos
    easing: 'easeInOutCubic', // facilita el patrón para usar
    offset: 0, // Integer. Qué tan lejos compensar la ubicación de anclaje de desplazamiento en píxeles
    callback: function ( anchor, toggle ) {} // Función para ejecutar después del desplazamiento
});
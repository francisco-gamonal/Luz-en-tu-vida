$(window).load(function() {

	$('.flexslider').flexslider({
      animation: "fade",      
      pausePlay: true,
      controlNav: false,

      start:function(slider){
          $(".slide-current-slide").text(slider.currentSlide+1);
          $(".slide-total-slides").text(" de "+slider.count)
      },
      before:function(slider){
          $(".slide-current-slide").text(slider.animatingTo+1)
      }
  });

  // Aquí va el código jQuery de a continuación.
  $(document).ready(function() {
    var menu = $('.menu_fondo');
    var menu_offset = menu.offset();
    // Comprobaremos el estado del menu
    // cada vez que se haga scroll en la página
    // y lo vamos a alternaremos entre 'fixed' y 'static' según su posición.
    $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top) {
      menu.addClass('fijo');
    } else {
      menu.removeClass('fijo');
    }
    });
  })

});
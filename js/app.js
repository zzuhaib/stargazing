  $(document).ready(function() {

    //Mobile nav Navigation
    $('#hamburger, #close').click(function() {
      $('#hamburger, #close').toggle();
      $('.custom-Navigation #links').toggleClass('visible');
    });

  });

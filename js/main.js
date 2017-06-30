$(document).ready(function() {
  var smoothScrollSpeed = 500;

  // var data = {
  //   term: 'Greetings from martha\'s vineyard',
  //   location: 'Martha\'s Vineyard'
  // };

  // $.ajax({
  //   url: 'https://api.yelp.com/v3/businesses/search',
  //   data: data,
  //   crossDomain: true
  // }).done(function(data) {
  //   console.log(data);
  // });

  $('map').imageMapResize();

  //closePopups();
  $('.pop-up').fadeOut(0);

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, smoothScrollSpeed, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  $('#pro-gallery').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
  });

  $(window).load(proGalleryButton);
  $(window).resize(proGalleryButton);
});

function showPopup(id) {
  $('.pop-up').fadeOut(300);
  $('#' + id).fadeIn(300);
}

function closePopups() {
  $('.pop-up').fadeOut(300);
}

function openLightbox() {
  console.log('does the lightbox work?');
  $('#pro-gallery').slickLightbox({
    images: ['http://placekitten.com/1000/600', 'http://placekitten.com/1010/606', 'http://placekitten.com/1060/636']
  });
}

function proGalleryButton() {
  var $this = $('#pro-gallery'),
      $btn = $this.find('.btn-viewgallery'),
      containerHeight = $this.outerHeight(),
      containerWidth = $this.outerWidth(),
      buttonHeight = $btn.outerHeight(),
      buttonWidth = $btn.outerWidth();

  $btn.css({
    'top': (containerHeight / 2) - (buttonHeight / 2),
    'left': (containerWidth / 2) - (buttonWidth / 2)
  });
}
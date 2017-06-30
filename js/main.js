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

  closePopups();

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
});

function showPopup(id) {
  $('.pop-up').hide();
  $('#' + id).show();
}

function closePopups() {
  $('.pop-up').hide();
}
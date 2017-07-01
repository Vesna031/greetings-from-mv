$(document).ready(function() {
  var smoothScrollSpeed = 500;

  var data = {
    term: 'Greetings from martha\'s vineyard',
    location: 'Martha\'s Vineyard'
  };

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

  // FACEBOOK REVIEWS
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '318059708651553',
      xfbml      : true,
      version    : 'v2.9'
    });
    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in.');
      }
      else {
        FB.login();
      }
    });

    /* make the API call */
    FB.api(
      "/marthasvineyardtours/ratings",
      function (response) {
        console.log('anything?');
        if(response && !response.error) {
          console.log('facebook reviews:');
          console.log(response);
        } else if(response && response.error) {
          console.log(response.error);
        } else {
          console.log('not working');
        }
      }
    );
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
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
$(document).ready(function() {
  // SMOOTH SCROLLING
  smoothScrolling();

  // SCROLL UP ARROW
  $('#scroll-up').fadeOut();
  var waypoint = new Waypoint({
    element: document.getElementById('reviews'),
    handler: function(direction) {
      if(direction === 'down') {
        $('#scroll-up').fadeIn(400);
      } else {
        $('#scroll-up').fadeOut(400);
      }
    }
  });

  // IMAGE MAP RESIZING
  $('map').imageMapResize();

  // POP-UP INITIALIZATION
  $('.pop-up').fadeOut(0);

  // PRO GALLERY BUTTON POSITIONING
  $(window).on('load', proGalleryButton);
  $(window).resize(proGalleryButton);

  // PRO GALLERY MODAL + SLICK
  $('#pro-gallery-slick').slick();

  $.get('reviews_and_posts.php', function (data) {
    // Yelp and Facebook Reviews
    var yelpReviews = JSON.parse(data).yelp_reviews;
        facebookReviews = JSON.parse(data).facebook_reviews,
        facebookPosts = JSON.parse(data).facebook_posts;

    for(var i = 0; i < yelpReviews.length; i++) {
      if(yelpReviews[i].rating === 5) {
        $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + yelpReviews[i].text + '</p><footer><a href="' + yelpReviews[i].url + '" target="_blank">' + yelpReviews[i].name + ' <cite title="Yelp">Yelp</cite></a></footer></blockquote>').appendTo('#yelp-reviews');
      }
    }

    for(var j = 0; j < facebookReviews.length; j++) {
      $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + facebookReviews[j].text + '</p><footer><a href="' + facebookReviews[j].url + '" target="_blank">' + facebookReviews[j].name + ' <cite title="Facebook">Facebook</cite></a></footer></blockquote>').appendTo('#facebook-reviews');
    }

    $('.reviews-slider').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 7500,
      fade: true
    });

    $('#reviews-loader').hide();

    // Facebook Posts
    for(var k = 0; k < facebookPosts.length; k++) {
      $('<a class="facebook-post" id="post-' + k + '" target="_blank" href="' + facebookPosts[k].link + '" style="background-image:url(' + facebookPosts[k].image + ')"></a>').appendTo('#facebook-posts #post-container');
    }
  });
});

function smoothScrolling() {
  var smoothScrollSpeed = 500;
  
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
}

function showPopup(id) {
  $('.pop-up').fadeOut(300);
  $('#' + id).fadeIn(300);
}

function closePopups() {
  $('.pop-up').fadeOut(300);
}

function proGalleryButton() {
  var $this = $('#pro-gallery'),
      $btn = $this.find('#viewgallery-button'),
      containerHeight = $this.outerHeight(),
      containerWidth = $this.outerWidth(),
      buttonHeight = $btn.outerHeight(),
      buttonWidth = $btn.outerWidth();

  $btn.css({
    'top': (containerHeight / 2) - (buttonHeight / 2),
    'left': (containerWidth / 2) - (buttonWidth / 2),
    'visibility': 'visible'
  });
}
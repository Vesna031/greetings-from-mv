$(document).ready(function() {
  smoothScrolling();
  $('map').imageMapResize();

  $('.pop-up').fadeOut(0);

  $(window).load(proGalleryButton);
  $(window).resize(proGalleryButton);

  // $('#pro-gallery').slickLightbox({
  //   src: 'src',
  //   itemSelector: '.item img'
  // });

  $('#pro-gallery-modal').on('shown.bs.modal', function (event) {
    $('#pro-gallery-slick').slick({
      // fade: true
    });
  });

  $.get('reviews_and_posts.php', function (data) {
    console.log(data);
    // Yelp and Facebook Reviews
    var yelpReviews = JSON.parse(data).yelp_reviews,
        facebookReviews = JSON.parse(data).facebook_reviews,
        facebookPosts = JSON.parse(data).facebook_posts;

    for(var i = 0; i < yelpReviews.length; i++) {
      $('<blockquote><p>' + yelpReviews[i].text + '</p><footer><a href="' + yelpReviews[i].url + '" target="_blank">' + yelpReviews[i].name + ' <cite title="Yelp">Yelp</cite></a></footer></blockquote></div>').appendTo('#yelp-reviews');
    }

    for(var j = 0; j < facebookReviews.length; j++) {
      $('<blockquote><p>' + facebookReviews[j].text + '</p><footer><a href="' + facebookReviews[j].url + '" target="_blank">' + facebookReviews[j].name + ' <cite title="Facebook">Facebook</cite></a></footer></blockquote></div>').appendTo('#facebook-reviews');
    }

    $('.reviews-slider').slick({
      autoplay: true,
      arrows: false
    });

    $('#reviews-loader').hide();

    // Facebook Posts
    for(var k = 0; k < facebookPosts.length; k++) {
      $('<a class="facebook-post" id="post-' + k + '" target="_blank" href="' + facebookPosts[k].link + '" style="background-image:url(' + facebookPosts[k].image + ')"></a>').appendTo('#facebook-posts');;
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
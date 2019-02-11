$(document).ready(function() {
  // RESIZE WHEN DONE
  var resizeWatch,
      resizeTimeout = 100;

  $(window).resize(function() {
    clearTimeout(resizeWatch);
    resizeWatch = setTimeout(doneResizing, resizeTimeout);
  });

  // USERAGENT DETECTION
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if(iOS) {
    $('body').addClass('iOS');
  } else {
    $('body').removeClass('iOS');
  }

  // SMOOTH SCROLLING
  smoothScrolling();

  // STICKY FOOTER
  stickyFooter();

  // SCROLL UP ARROW
  if($('#scroll-up').length > 0) {
    $('#scroll-up').fadeOut();

    var waypoint = new Waypoint({
          element: document.getElementById('about-contact'),
          handler: function(direction) {
            if(direction === 'down') {
              $('#scroll-up').fadeIn(400);
            } else {
              $('#scroll-up').fadeOut(400);
            }
          }
        });
  }

  // IMAGE MAP RESIZING
  $('map').imageMapResize();

  // POP-UP INITIALIZATION
  $('.pop-up').fadeOut(0);

  // PRO GALLERY BUTTON POSITIONING
  centerElement($('#pro-gallery'), $('#pro-gallery').find('#viewgallery-button'));

  // ABOUT CONTACT TEXT POSITIONING
  centerElement($('#about-contact'), $('#about-contact').find('#contact-text'));

  // CALL TO ACTION BUTTON POSITIONING
  // centerElement($('#call-to-action'), $('#call-to-action').find('.book-now-btn'));

  // INFO MAP MOBILE
  $('.card .back').css({
    'height': $('.card .front img').innerHeight()
  });

  centerElement($('.card .back'), $('.card .back').find('.town-info'));

  $(window).on('load', function() {
    // PRO GALLERY BUTTON POSITIONING
    centerElement($('#pro-gallery'), $('#pro-gallery').find('#viewgallery-button'));

    // ABOUT CONTACT TEXT POSITIONING
    centerElement($('#about-contact'), $('#about-contact').find('#contact-text'));

    // CALL TO ACTION BUTTON POSITIONING
    // centerElement($('#call-to-action'), $('#call-to-action').find('.book-now-btn'));

    // INFO MAP MOBILE
    $('.card .back').css({
      'height': $('.card .front img').innerHeight()
    });

    centerElement($('.card .back'), $('.card .back').find('.town-info'));
  });

  $('#pro-gallery-slick').slick({
    lazyLoad: 'ondemand'
  });

  $('.card').flip({
    autoSize: false,
    forceHeight: false
  });

  $.get('reviews_and_posts.php', function (data) {
    try {
      // Yelp and Facebook Reviews
      var yelpReviews = JSON.parse(data).yelp_reviews;
          // facebookReviews = JSON.parse(data).facebook_reviews,
          // facebookPosts = JSON.parse(data).facebook_posts;

      for(var i = 0; i < yelpReviews.length; i++) {
        if(yelpReviews[i].rating === 5) {
          $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + yelpReviews[i].text + '</p><footer><a href="' + yelpReviews[i].url + '" target="_blank">' + yelpReviews[i].name + ' <cite title="Yelp">Yelp</cite></a></footer></blockquote>').appendTo('#yelp-reviews');
        }
      }

      // for(var j = 0; j < facebookReviews.length; j++) {
      //   $('<blockquote><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><br><p>' + facebookReviews[j].text + '</p><footer><a href="' + facebookReviews[j].url + '" target="_blank">' + facebookReviews[j].name + ' <cite title="Facebook">Facebook</cite></a></footer></blockquote>').appendTo('#facebook-reviews');
      // }

      $('.reviews-slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 7500,
        fade: true
      });

      $('#reviews-loader').hide();

      // Facebook Posts
      // for(var k = 0; k < facebookPosts.length; k++) {
      //   $('<a class="facebook-post" id="post-' + k + '" target="_blank" href="' + facebookPosts[k].link + '" style="background-image:url(' + facebookPosts[k].image + ')"></a>').appendTo('#facebook-posts #post-container');
      // }

      // $('#facebook-loader').hide();
    } catch (error) {
      $('#reviews').hide();
      $('#facebook-posts').hide();
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
      if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
          location.hostname == this.hostname) {
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
            }
          });
        }
      }
    });
  
  // Contact form
  $('input[type="daterange"]').daterangepicker();

  var ajaxurl = '/contact-mailer.php',
      $form = $('#book-now-form input:not(#submit), #book-now-form select, #book-now-form textarea'),
      $pleaseWait = $('#book-now-form #please-wait'),
      $invalidForm = $('#book-now-form #invalid-form'),
      $successEmail = $('#book-now-form #success-email'),
      $errorEmail = $('#book-now-form #error-email'),
      setupRecaptcha = function() {
        grecaptcha.render('recaptcha', {
          'sitekey' : '6LcEpZAUAAAAAO0E8Y1BTXNxBTqc98Sdw9E4UFlG'
        });
      };

  $(window).load(setupRecaptcha);

  $('#book-now-form').on('submit', function (event) {
    event.preventDefault();
  });

  $form.on('change', function() {
    $invalidForm.hide();
    $successEmail.hide();
    $errorEmail.hide();
  });

  $.validate({
    form: '#book-now-form',
    onSuccess: function (form) {
      var data = {};

      $form.each(function (index, element) {
        var $element = $(element);

        if($element.attr('type') === 'radio' && $element.is(':checked')) {
          data[$element.attr('name')] = $element.val();
        } else if($element.attr('type') !== 'radio') {
          data[$element.attr('name')] = $element.val();
        }
      });

      data['g-recaptcha-response'] = grecaptcha.getResponse();

      // data.action = action;

      // console.log($form);
      // console.log(form);
      // console.log(data);

      $.ajax({
        type: 'POST',
        url: ajaxurl,
        dataType: 'text json',
        data: data,
        beforeSend: function() {
          $pleaseWait.show();
          $('#book-now-form button').prop('disabled', true);
        },
        success: function (data) {
          $pleaseWait.hide();

          console.log(data);
          
          if(data.status == 200) {
            console.info('Success');
            $successEmail.show();
            $('#book-now-form button').prop('disabled', false);
          } else {
            console.error('Error!');
            console.error(data);
            $errorEmail.show();
          }
        },
        error: function (data) {
          $pleaseWait.hide();

          // console.log(data);

          if(data.status == 200) {
            console.info('Success');
            $successEmail.show();
            $('#book-now-form button').prop('disabled', false);
          } else {
            console.error('Error!');
            console.error(data);
            $errorEmail.show();
          }
        }
      });

      return false;
    },
    onError: function ($form) {
      $pleaseWait.hide();
      console.error('Invalid form');
      $invalidForm.show();
      return false;
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

function centerElement($parent, $element) {
  var containerHeight = $parent.outerHeight(),
      containerWidth = $parent.outerWidth(),
      buttonHeight = $element.outerHeight(),
      buttonWidth = $element.outerWidth();

  $element.css({
    'top': (containerHeight / 2) - (buttonHeight / 2),
    'left': (containerWidth / 2) - (buttonWidth / 2),
    'visibility': 'visible'
  });
}

function stickyFooter() {
  var windowHeight = $(window).innerHeight(),
      $footer = $('#footer');

  if($footer.length > 0) {
    $footer.css('position', 'relative');

    var footerEnd = $footer.offset().top + $footer.innerHeight();

    if(footerEnd < windowHeight) {
      $footer.css({
        'position': 'absolute',
        'bottom': '0'
      });
    }
  }
}

function doneResizing(){
  stickyFooter();

  // PRO GALLERY BUTTON POSITIONING
  centerElement($('#pro-gallery'), $('#pro-gallery').find('#viewgallery-button'));

  // ABOUT CONTACT TEXT POSITIONING
  centerElement($('#about-contact'), $('#about-contact').find('#contact-text'));

  // CALL TO ACTION BUTTON POSITIONING
  // centerElement($('#call-to-action'), $('#call-to-action').find('#book-now-btn'));

  // INFO MAP MOBILE
  $('.card .back').css({
    'height': $('.card .front img').innerHeight()
  });

  $('.card').each(function (index, element) {
    centerElement($(element).find('.back'), $(element).find('.town-info'));
  });

}
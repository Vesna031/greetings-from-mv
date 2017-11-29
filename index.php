<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Greetings From Martha's Vineyard</title>

    <link href="styles/main.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Special+Elite|Ubuntu:300,400" rel="stylesheet">

  	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  	<link rel="manifest" href="/manifest.json">
  	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  	<meta name="theme-color" content="#ffffff">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="container">
      <nav class="navbar navbar-default">
        <!-- <div class="container-fluid"> -->
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#gfmv-navbar" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-word">MENU</span>
            </button>
            <a class="navbar-brand" href="#hero"><img class="img-responsive brand" src="images/navigation/nav-logo.png"></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="gfmv-navbar">
            <ul class="nav navbar-nav">
              <!-- <li class="active"><a class="ubuntu-font" href="#hero">HOME</a></li> -->
              <li><a class="ubuntu-font" href="#reviews">REVIEWS</a></li>
              <li><a class="ubuntu-font" href="#info-map">MAP</a></li>
              <li><a class="ubuntu-font" href="#pro-gallery">GALLERY</a></li>
              <li><a class="ubuntu-font" href="#about-contact">ABOUT</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><a href="tel:+16173599298" class="glyphicon glyphicon-earphone"></a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        <!-- </div>/.container-fluid -->
      </nav>

      <!-- Hero start -->
      <div id="hero">
        <div id="hero-content">
          <!-- <img class="img-responsive center-block visible-xlg" src="/images/hero_sizes/hero_38401.gif" alt="Greetings From Martha's Vineyard"> -->
          <!-- <img class="img-responsive center-block visible-lg" src="/images/hero_sizes/hero_19202.gif" alt="Greetings From Martha's Vineyard"> -->
          <img class="img-responsive center-block visible-md visible-lg" src="/images/hero_sizes/hero_1200.gif" alt="Greetings From Martha's Vineyard">
          <img class="img-responsive center-block visible-sm" src="/images/hero_sizes/hero_992.gif" alt="Greetings From Martha's Vineyard">
          <img class="img-responsive center-block visible-xs" src="/images/hero_sizes/hero_768.gif" alt="Greetings From Martha's Vineyard">
        </div>
      </div>
      <!-- Hero end -->

      <!-- About Contact start -->
      <div id="about-contact">
        <img src="images/about-contact/about-postcard.gif" class="img-responsive hidden-xs hidden-sm">
        <img src="images/about-contact/about-postcard-768.gif" id="mobile-about-contact-image" class="img-responsive visible-xs visible-sm">
        <div id="contact-text">
          <p class="no-indent">Hello friends,</p>

          <p>Greetings From Martha's Vineyard! Our tour guides show you our 6 towns; each with a unique history and feel. See where celebrities stay and stand on the sets of Jaws. Understand why we are all drawn to this magical island!</p>

          <p>Relax in our luxurious air conditioned vans on comfy leather captain chairs as we cruise alongside beautiful beaches and quaint seaside towns with whaling captains&rsquo; houses and stone walls framing rolling fields dotted with sheep all the way down to the sea!</p>

          <p>Explore the gingerbread cottages, shop the island&rsquo;s first general store, climb lighthouses, and view the colorful 200&rsquo; Clay cliffs!</p>

          <p>Finally, we&rsquo;ll have a picnic in Menemsha and dine on the freshest seafood on the docks next to the working fishing boats, with a complimentary bottle of wine!</p>

          <p class="no-indent">Wish you were here!</p>

          <p class="text-right no-indent">Greeting From Martha&rsquo;s Vineyard Tours</p>

          <div class="text-center">
            <br class="hidden-xs">
            <a class="btn btn-success" href="/itinerary.php">View Itinerary</a>
          </div>
        </div>
      </div>
  	  <!-- About Contact end -->

      <!-- Call to Action start -->
      <div id="call-to-action">
        <!-- <img src="images/call-to-action/toursmv-polaroid-van.gif" class="img-responsive"> -->

        <div class="text-center">
          <a class="book-now-btn visible-xs visible-sm" href="tel:+16173599298"></a>
          <a class="book-now-btn hidden-xs hidden-sm" data-toggle="modal" data-target="#book-now-modal"></a>
        </div>
      </div>
      <!-- Call to Action end -->

  	  <!-- Reviews start -->
      <div id="reviews">
        <!-- <div class="container"> -->
          <div class="row">
            <div class="col-xs-12 col-md-4 col-md-offset-2">
              <img class="img-responsive center-block" id="yelp-burst" src="/images/reviews/Yelp_burst_positive_RGB.png">
              <div id="yelp-reviews" class="reviews-slider"></div>
            </div>
            <div class="col-xs-12 col-md-4">
              <img class="img-responsive center-block" id="facebook-f" src="/images/reviews/FB-f-Logo__blue_144.png">
              <div id="facebook-reviews" class="reviews-slider"></div>
            </div>
          </div>

          <div id="reviews-loader">
            <div style="width:100%;height:100%" class="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        <!-- </div> -->
      </div>
      <!-- Reviews end -->

  	  <!-- Pro Gallery start -->
      <div id="pro-gallery">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 background-image " id="edgartown-representer"></div>
            <div class="hidden-xs col-sm-6 background-image" id="oakbluffs-representer"></div>
          </div>
  
          <div class="row">
            <div class="hidden-xs col-sm-6 background-image" id="menemsha-representer"></div>
            <div class="hidden-xs col-sm-6 background-image" id="aquinnah-representer"></div>
          </div>
        </div>
  
        <span id="viewgallery-button" data-toggle="modal" data-target="#pro-gallery-modal"></span>
      </div>
      <!-- Pro Gallery end -->
      
      <!-- Info Map start -->
      <div id="info-map">
        <img src="images/map_sizes/map-1200-wcta.gif" usemap="#mapiconslocations_1200" class="img-responsive map visible-md visible-lg" onclick="closePopups();">

        <map id="mapiconslocations_1200" name="mapiconslocations_1200">  
          <area shape="circle" coords="857,158,75" alt="Oak Bluffs" onclick="showPopup('oak-bluffs');">
          <area shape="circle" coords="961,385,75" alt="Edgartown" onclick="showPopup('edgartown');">
          <area shape="circle" coords="552,342,75" alt="West Tisbury" onclick="showPopup('west-tisbury');">
          <area shape="circle" coords="90,558,75" alt="Aquinnah" onclick="showPopup('aquinnah');">
          <area shape="circle" coords="715,142,75" alt="Vineyard Haven" onclick="showPopup('vineyard-haven');">
          <area shape="circle" coords="264,483,75" alt="Menemsha" onclick="showPopup('menemsha');">
        </map>

        <div class="pop-up" id="oak-bluffs">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Oak Bluffs</h1>

          <p>A Victorian-styled yet exciting town on the tip of our island.  There are so many ice cream shops in Oak Bluffs, there is no doubt your stomach will ache if you try to taste them all!  Circuit Avenue and the harbour are filled with wonderful bars, shops, and restaurants, and are flanked by the iconic Campground on one side and Ocean Park on the other.</p>
        </div>

        <div class="pop-up" id="vineyard-haven">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Vineyard Haven</h1>

          <p>Filled with shops and restaurants, Vineyard Haven is a harbour town home to many creatives.  Learn some maritime history, grab a coffee to go and head towards main street, or stop by Net Result for some fantastic seafood!</p>
        </div>
        <div class="pop-up" id="west-tisbury">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>West Tisbury</h1>

          <p>A small but beautiful town.  Check out Alley&rsquo;s General Store&rsquo;s vintage brass P.O. boxes amongst the thousands of items for sale.  &ldquo;If they don&rsquo;t have it, you probably don&rsquo;t need it!&rdquo; one fellow on our tour said.  Home of the farmer&rsquo;s market and some remarkable artwork.</p>
        </div>

        <div class="pop-up" id="menemsha">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Menemsha</h1>

          <p>Every dreamed about watching a sunset and eating fresh seafood with a glass of wine?  If you did, you dreamed of Menemsha.  A small fishing harbour featuring seafood shops and a beach that looks off to the west.  Martha&rsquo;s Vineyard sunsets are already great, but if you want front-row seats, go to Menemsha.</p>
        </div>

        <div class="pop-up" id="edgartown">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Edgartown</h1>
          
          <p>Cruise the narrow streets with whaling captain&rsquo;s houses on one side and the picturesque harbor on the other filled with beautiful classic sailboats and multi-million dollar yachts. Hear how whale oil money helped build this town and pause to photograph the majestic Harborview Hotel atop the hill. Make it to the steps of the Harborview and turn around to capture the great lighthouse with Chappaquiddick Island as your panoramic backdrop.</p>
        </div>

        <div class="pop-up" id="aquinnah">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Aquinnah</h1>

          <p>It might take a bit longer to get to the tip of the island, not that the drive is anything but enjoyable as you wind under bows of oak and past homes of artists and novelists, but standing on the clay cliffs and looking down on pristine beaches makes the drive even more worth it.  If you&rsquo;re lucky, you might even catch surfers off of Moshop Beach!</p>
        </div>

        <!-- Flip cards start -->
  	    <div class="visible-xs visible-sm" id="flip-cards">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4"> 
              <div class="card">
                <div class="front">
                  <img class="img-responsive" src="images/map_sizes/toursmv-mobile-map-oak-bluffs-lores.gif">
                </div>

                <div class="back">
                  <div class="town-info">
                    <p>A Victorian-styled yet exciting town on the tip of our island.  Circuit Avenue and the harbour are filled with wonderful bars, shops, and restaurants, and are flanked by the iconic Campground on one side and Ocean Park on the other.</p>
                  </div>
                </div> 
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4"> 
              <div class="card">
                <div class="front"> 
                  <img class="img-responsive" src="images/map_sizes/toursmv-mobile-map-edgartown-lores.gif">
                </div> 
                <div class="back">
                  <div class="town-info">
                    <p>Cruise the narrow streets with whaling captain&rsquo;s houses on one side and the picturesque harbor on the other filled with beautiful classic sailboats and multi-million dollar yachts. Hear how whale oil money helped build this town and pause to photograph the majestic Harborview Hotel.</p>
                  </div>
                </div>
              </div> 
            </div>
          <!-- </div>

          <div class="row"> -->
            <div class="col-xs-12 col-sm-6 col-md-4"> 
              <div class="card">
                <div class="front"> 
                  <img class="img-responsive" src="images/map_sizes/toursmv-mobile-map-menemsha-lores.gif">
                </div> 
                <div class="back">
                  <div class="town-info">
                    <p>Every dreamed about watching a sunset and eating fresh seafood with a glass of wine?  If you did, you dreamed of Menemsha.  Martha&rsquo;s Vineyard sunsets are already great, but if you want front-row seats, go to Menemsha.</p>
                  </div>
                </div> 
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4"> 
              <div class="card">
                <div class="front"> 
                  <img class="img-responsive" src="images/map_sizes/toursmv-mobile-map-vineyard-haven-lores.gif">
                </div> 
                <div class="back">
                  <div class="town-info">
                    <p>Filled with shops and restaurants, Vineyard Haven is a harbour town home to many creatives.  Learn some maritime history, grab a coffee to go and head towards main street, or stop by Net Result for some fantastic seafood!</p>
                  </div>
                </div> 
              </div>
            </div>
          <!-- </div>

          <div class="row"> -->
            <div class="col-xs-12 col-sm-6 col-md-4"> 
              <div class="card">
                <div class="front"> 
                  <img class="img-responsive" src="images/map_sizes/toursmv-mobile-map-west-tisbury-lores.gif">
                </div> 
                <div class="back">
                  <div class="town-info">
                    <p>A small but beautiful town.  Check out Alley&rsquo;s General Store&rsquo;s vintage brass P.O. boxes amongst the thousands of items for sale.  &ldquo;If they don&rsquo;t have it, you probably don&rsquo;t need it!&rdquo; one fellow on our tour said.  Home of the farmer&rsquo;s market and some remarkable artwork.</p>
                  </div>
                </div>
              </div> 
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4"> 
              <div class="card">
                <div class="front"> 
                  <img class="img-responsive" src="images/map_sizes/toursmv-mobile-map-aquinnah-lores.gif">
                </div> 
                <div class="back">
                  <div class="town-info">
                    <p>It might take longer to get to the tip of the island, not that the drive is anything but enjoyable as you wind under bows of oak and past homes of artists and novelists, but standing on the clay cliffs and looking down on pristine beaches makes the drive even more worth it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
	      </div>
      </div>
    </div>
    <!-- Info Map end -->

    <!-- Facebook Posts start -->
    <div id="facebook-posts">
      <!-- <div class="container"> -->
        <h2>Our Latest Adventures!</h2>

        <div id="post-container">
        </div>

        <h3>Follow us on <a href="https://www.facebook.com/marthasvineyardtours/" target="_blank">Facebook</a>!</h3>
      <!-- </div> -->

      <div id="facebook-loader">
        <div style="width:100%;height:100%" class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <!-- Facebook Posts end -->

    <!-- Footer start -->
    <div id="footer" class="text-center">
      <div class="container policy">
        <p>&copy; <?php date_default_timezone_set('EST'); echo date("Y"); ?> Greetings From Martha's Vineyard &middot; <a href="/privacypolicy.html">Privacy Policy</a> &middot; Site by <a href="http://mvesna.com" target="_blank">MVesna</a> &amp; <a href="http://artlyticalmedia.com" target="_blank">Artlytical Media</a></p>
      </div>
    </div>

    <a id="scroll-up"class="glyphicon glyphicon-chevron-up"href="#hero"></a>
    <!-- Footer end -->

    <!-- Book Now Modal start -->
    <div class="modal fade" id="book-now-modal" tabindex="-1" role="dialog" aria-labelledby="bookNowModal">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div>
            <h3 class="text-center">Book a tour!</h3>

            <form class="form-horizontal" id="book-now-form">
              <div class="col-xs-12">
                <div class="alert alert-warning" role="alert" style="display:none;" id="please-wait">
                  <strong>We&rsquo;re sending your email.</strong> Don&rsquo;t refresh your browser or navigate anywhere else.
                </div>

                <div class="alert alert-danger" role="alert" style="display:none;" id="no-recaptcha">
                  <strong>Fill out the reCaptcha!</strong> No robots, please.
                </div>

                <div class="alert alert-danger" role="alert" style="display:none;" id="invalid-form">
                  <strong>You forgot to fill something out!</strong> Please look at the form and add anything that is missing or incorrect.
                </div>

                <div class="alert alert-success" role="alert" style="display:none;" id="success-email">
                  <strong>Success!</strong> Your email has been sent.
                </div>

                <div class="alert alert-danger" role="alert" style="display:none;" id="error-email">
                  <strong>Oh no!</strong> Something went wrong! Let us know by emailing us <a href="mailto:hello@toursmv.com?subject=Book a Tour&body=Hi Craig!%0D%0A%0D%0AWe'd like to book a [4-hour|2-hour] tour of Martha's Vineyard with you!%0D%0A%0D%0AThere are [number of people] of us and we are arriving on the [your arrival date] and staying until the [your departure date].%0D%0A%0D%0ASee you soon!%0D%0A%0D%0A~[Your name]%0D%0A%0D%0AThis email was sent via a mail client because of an error on the website." target="_blank">here</a>.
                </div>
              </div>
              <!-- <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-6">
                  <input type="email" class="form-control" id="email" placeholder="Email">
                </div>
              </div> -->
              <div class="form-group">
                <!-- <label for="firstname" class="col-sm-2 control-label">First Name</label> -->
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="firstname" id="firstname" placeholder="First Name" required>
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Last Name" required>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-6">
                  <input type="email" name="email" class="form-control" id="email" placeholder="Email" required>
                </div>
                <div class="col-sm-3">
                  <label for="guests" class="control-label">Total guests</label>
                </div>
                <div class="col-sm-3">
                  <input type="number" name="guests" class="form-control" id="guests" placeholder="0" min="1" required>
                </div>
              </div>
              <!-- <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">Last Name</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="lastname" placeholder="Last Name">
                </div>
              </div> -->
              <div class="form-group">
                <div class="col-sm-6 text-center">
                  <label class="radio-inline">
                    <input type="radio" name="tourlength" id="tourlength" value="fourhour" required>
                    4-hour tour
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="tourlength" id="tourlength" value="twohour" required>
                    2-hour tour
                  </label>
                </div>

                <div class="col-sm-3">
                  <label for="pickup-location" class="control-label">Pick-up location</label>
                </div>

                <div class="col-sm-3">
                  <select class="form-control" id="town" name="town">
                    <option>Vineyard Haven</option>
                    <option>Oak Bluffs</option>
                    <option>Edgartown</option>
                    <option>West Tisbury</option>
                    <option>Chilmark</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <!-- <label for="specific-location" class="col-sm-2 control-label">Hotel/Address</label> -->
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="address" name="address" placeholder="Hotel name or street address">
                </div>
                <div class="col-sm-3">
                  <label for="staylength" class="control-label">Length of stay</label>
                </div>
                <div class="col-sm-3">
                  <input type="daterange" name="staylength" id="staylength" value="" class="form-control" placeholder="Your stay" />
                </div>
              </div>
              <div class="form-group">
                <div class="text-center">
                  <button class="btn btn-success" id="submit">Request your tour</button>
                  <button class="btn btn-secondary" data-dismiss="modal">Back to site</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Book Now Modal end -->
    
    <!-- Pro Gallery Modal start -->
    <div class="modal fade" id="pro-gallery-modal" tabindex="-1" role="dialog" aria-labelledby="proGalleryModal">
      <span class="glyphicon glyphicon-remove close-modal" id="close-modal" data-dismiss="modal" data-target="#pro-gallery-modal" aria-label="Close"></span>
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div id="pro-gallery-slick">
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-gingerbread-houses.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-gingerbread-houses.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-harbour-fourkids.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-harbour-fourkids.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-lifeguard-post.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-lifeguard-post.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-101.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-101.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-103.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-103.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-menemsha-statue.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-menemsha-statue.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-menemsha-sunset.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-menemsha-sunset.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-ob-harbour.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-ob-harbour.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-80.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-80.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-100.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-100.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-81.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-81.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-82.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-82.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-83.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-83.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-84.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-84.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-102.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-102.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-85.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-85.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-86.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-86.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-87.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-87.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-88.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-88.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-89.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-89.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-90.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-90.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-91.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-91.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-92.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-92.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-93.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-93.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-94.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-94.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-95.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-95.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-96.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-96.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-97.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-97.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-98.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-98.jpg">
            </div>
            <div class="pro-gallery-slide">
              <img class="visible-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/1920/toursmv-99.jpg">
              <img class="hidden-lg img-responsive" src="images/pro-gallery/spinner.svg" data-lazy="images/pro-gallery/992/toursmv-99.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pro Gallery Modal end -->

    <!-- bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/image-map-resizer/js/imageMapResizer.min.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/waypoints/lib/noframework.waypoints.js"></script>
    <script src="bower_components/slick-carousel/slick/slick.js"></script>
    <script src="bower_components/flip/dist/jquery.flip.js"></script>
    <script src="bower_components/moment/moment.js"></script>
    <script src="bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="bower_components/jquery-form-validator/form-validator/jquery.form-validator.min.js"></script>
    <!-- endbower -->

    <script src="js/main.min.js"></script>
  </body>
</html>
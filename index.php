<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Greetings From Martha's Vineyard</title>

    <link href="styles/main.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700" rel="stylesheet">

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
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#gfmv-navbar" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img class="img-responsive brand" src="images/navigation/nav-logo.png"></a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="gfmv-navbar">
            <ul class="nav navbar-nav">
              <li class="active"><a class="ubuntu-font" href="#hero">HOME</a></li>
              <li><a class="ubuntu-font" href="#reviews">REVIEWS</a></li>
              <li><a class="ubuntu-font" href="#info-map">MAP</a></li>
              <li><a class="ubuntu-font" href="#pro-gallery">GALLERY</a></li>
              <li><a class="ubuntu-font" href="#about-contact">ABOUT</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><a href="tel:6173599298" class="glyphicon glyphicon-earphone"></a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>

      <!-- Hero start -->
      <div id="hero">
        <div id="hero-content">
          <img class="img-responsive center-block visible-xlg" src="/images/hero_sizes/hero_3840.gif" alt="Greetings From Martha's Vineyard">
          <img class="img-responsive center-block visible-lg" src="/images/hero_sizes/hero_1920.gif" alt="Greetings From Martha's Vineyard">
          <img class="img-responsive center-block visible-md" src="/images/hero_sizes/hero_1200.gif" alt="Greetings From Martha's Vineyard">
          <img class="img-responsive center-block visible-sm" src="/images/hero_sizes/hero_992.gif" alt="Greetings From Martha's Vineyard">
          <img class="img-responsive center-block visible-xs" src="/images/hero_sizes/hero_7682.gif" alt="Greetings From Martha's Vineyard">
          
          <!-- <h4>Scroll for more</h4>
          <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span> -->
        </div>
      </div>
      <!-- Hero end -->

      <!-- Reviews start -->
      <div id="reviews">
        <!-- <h1 class="text-center">Reviews</h1> -->
        
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-sm-offset-2">
              <div class="row">
                <div class="col-xs-2">
                  <img class="img-responsive center-block" src="/images/reviews/Yelp_burst_positive_RGB.png">
                </div>
                <div class="col-xs-10">
                  <div id="yelp-reviews" class="reviews-slider"></div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4">
              <div class="row">
                <div class="col-xs-2">
                  <img class="img-responsive center-block" src="/images/reviews/FB-f-Logo__blue_144.png">
                </div>

                <div class="col-xs-10">
                  <div id="facebook-reviews" class="reviews-slider"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row" id="reviews-loader">
            <div class='uil-default-css' style='transform:scale(0.94);'><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(0deg) translate(0,-60px);transform:rotate(0deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(30deg) translate(0,-60px);transform:rotate(30deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(60deg) translate(0,-60px);transform:rotate(60deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(90deg) translate(0,-60px);transform:rotate(90deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(120deg) translate(0,-60px);transform:rotate(120deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(150deg) translate(0,-60px);transform:rotate(150deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(180deg) translate(0,-60px);transform:rotate(180deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(210deg) translate(0,-60px);transform:rotate(210deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(240deg) translate(0,-60px);transform:rotate(240deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(270deg) translate(0,-60px);transform:rotate(270deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(300deg) translate(0,-60px);transform:rotate(300deg) translate(0,-60px);border-radius:10px;position:absolute;'></div><div style='top:80px;left:93px;width:14px;height:40px;background:#9e9e9e;-webkit-transform:rotate(330deg) translate(0,-60px);transform:rotate(330deg) translate(0,-60px);border-radius:10px;position:absolute;'></div></div>
          </div>
        </div>
      </div>
      <!-- Reviews end -->

      <!-- Info Map start -->
      <div id="info-map">
        <img src="images/map_sizes/map_3840.gif" usemap="#mapiconslocations_3840" class="img-responsive map visible-xlg" onclick="closePopups();">
        <img src="images/map_sizes/map_1920.gif" usemap="#mapiconslocations_1920" class="img-responsive map visible-lg" onclick="closePopups();">
        <img src="images/map_sizes/map_1200.gif" usemap="#mapiconslocations_1200" class="img-responsive map visible-md" onclick="closePopups();">
        <img src="images/map_sizes/map_992.gif" usemap="#mapiconslocations_992" class="img-responsive map visible-sm" onclick="closePopups();">

        <map name="mapiconslocations_3840">
          <area shape="circle" coords="2739,491,300" alt="Oak Bluffs" onclick="showPopup('oak-bluffs');">
          <area shape="circle" coords="3075,1227,300" alt="Edgartown" onclick="showPopup('edgartown');">
          <area shape="circle" coords="299,1771,300" alt="Aquinnah" onclick="showPopup('aquinnah');">
          <area shape="circle" coords="2286,443,300" alt="Vineyard Haven" onclick="showPopup('vineyard-haven');">
          <area shape="circle" coords="875,1571,300" alt="Menemsha" onclick="showPopup('menemsha');">
        </map>

        <map name="mapiconslocations_1920">  
          <area shape="circle" coords="1364,249,200" alt="Oak Bluffs" onclick="showPopup('oak-bluffs');">
          <area shape="circle" coords="1522,609,200" alt="Edgartown" onclick="showPopup('edgartown');">
          <area shape="circle" coords="142,880,200" alt="Aquinnah" onclick="showPopup('aquinnah');">
          <area shape="circle" coords="1135,229,200" alt="Vineyard Haven" onclick="showPopup('vineyard-haven');">
          <area shape="circle" coords="430,784,200" alt="Menemsha" onclick="showPopup('menemsha');">
        </map>
        <map name="mapiconslocations_1200">  
          <area shape="circle" coords="841,148,200" alt="Oak Bluffs" onclick="showPopup('oak-bluffs');">
          <area shape="circle" coords="942,379,200" alt="Edgartown" onclick="showPopup('edgartown');">
          <area shape="circle" coords="93,548,200" alt="Aquinnah" onclick="showPopup('aquinnah');">
          <area shape="circle" coords="844,147,200" alt="Vineyard Haven" onclick="showPopup('vineyard-haven');">
          <area shape="circle" coords="264,483,200" alt="Menemsha" onclick="showPopup('menemsha');">
        </map>
        <map name="mapiconslocations_992">  
          <area shape="circle" coords="701,120,200" alt="Oak Bluffs" onclick="showPopup('oak-bluffs');">
          <area shape="circle" coords="782,314,200" alt="Edgartown" onclick="showPopup('edgartown');">
          <area shape="circle" coords="71,453,200" alt="Aquinnah" onclick="showPopup('aquinnah');">
          <area shape="circle" coords="583,116,200" alt="Vineyard Haven" onclick="showPopup('vineyard-haven');">
          <area shape="circle" coords="220,397,200" alt="Menemsha" onclick="showPopup('menemsha');">
        </map>

        <div class="pop-up" id="oak-bluffs">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Oak Bluffs</h1>
          <p>Before there was even a town named Oak Bluffs – back in the 1830s – Methodist congregations across New England would organize summer retreats to the outlying woods north of Edgartown, where they would spend a week in revival meetings, hearing as many as four sermons a day. As the Methodists expanded their summer visits, they first built wooden platforms for their tents, and then began building a community of colorful cottages around their open-air meeting center. Thus was born the Island’s only truly original architectural style, known today as Campground Gothic Revival. Some 300 cottages with “gingerbread” scrollwork details and gaily-colored paint schemes still stand at the heart of Oak Bluffs, around the central Tabernacle. The historic path of this burgeoning summer resort so departed from Edgartown that in 1880 its residents split away, forming the town of Cottage City. The town took on the new name of Oak Bluffs in 1907. From its revivalist beginnings, Oak Bluffs has grown to become the Island’s liveliest center for after-hours entertainment, with a downtown district, called Circuit Avenue, bustling well into the wee hours on summer weekends. Oak Bluffs is also home to such landmarks as the Flying Horses, among the nation’s oldest operating carousels, and Union Chapel, a remarkable octagonal structure that dates to 1870. The Oak Bluffs harbor is known as the Island’s favorite center for power boaters, with it's long concrete dock and electrical hookup services.</p>
        </div>

        <div class="pop-up" id="vineyard-haven">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Vineyard Haven</h1>
          <p>Excellent shops, fine restaurants, and a beautiful harbor are only a few of the attractions that make Vineyard Haven so special to tourists and residents alike.The town that incorporates Vineyard Haven is called Tisbury, after a parish in England near the birthplace of the Island’s first governor, Thomas Mayhew. English settlement of the area dates from the mid-1600s, when Mayhew purchased the settlement rights from the Crown. The town beach here is a fine place to watch the harbor. Vineyard Haven was one of New England’s busiest ports because of its strategic location on the sailing routes. Most of the coastwise shipping traveled through Vineyard Sound. Holmes Hole, as this harbor community was called, provided a convenient anchorage. Here a ship and its crew could lay over com­fortably to wait out bad weather, pick up provisions, or take on an experienced local pilot who could negotiate the rips and shoals that were the special perils of this sea route.There are many scenic places around the town: in addition to Main Street and the harbor, the Tashmoo Lake overlook on State Road, the nearby Tisbury Water Works, West Chop Lighthouse, and the area around the drawbridge on Beach Road are favorite spots for photographers.</p>
        </div>

        <div class="pop-up" id="menemsha">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Menemsha</h1>

          <p>Menemsha is a small fishing village located in the town of Chilmark on the island of Martha's Vineyard in Dukes County, Massachusetts, United States.[1] It is located on the east coast of Menemsha Pond, adjacent to the opening into the Vineyard Sound on the pond's northern end. The village's historic harbor serves as the point of departure for local fishermen, some from multi-generational fishing families such as the Larsens, Pooles and Mayhews, as well as charter boats to the Elizabeth Islands and elsewhere. Besides charter fishing and cruises, other possibilities for recreation are the public beach adjacent to the harbor and the bicycle ferry across Menemsha Pond to Aquinnah as well as many excellent places to get freshly cooked seafood. It is also home of one of the most dramatic sunsets in New England. Menemsha is the location of a United States Coast Guard station, Coast Guard Station Menemsha, and was once known as Menemsha Creek. It is well known for being the background of Steven Spielberg's film Jaws.</p>
        </div>

        <div class="pop-up" id="edgartown">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Edgartown</h1>
          
          <p>One of New England’s most elegant com­munities, Edgartown was the Island’s first colonial settlement and it has been the county seat since 1642. The stately white Greek Revival houses built by the whaling captains have been carefully maintained. They make the town a museum-piece community, a seaport village preserved from the early 19th century. Main Street is a picture-book setting with its harbor and waterfront. The tall square-rigged ships that sailed all the world’s oceans have passed from the Edgartown scene, but the heritage of those vessels and their captains has continued. To view and appreciate this town fully, you must walk it's streets. North Water Street has a row of captains’ houses not equaled anywhere. Study the fanlights and widows walks by day and stroll down the streets after the lamps are lit. There are excellent public beaches in the township of Edgartown. Norton’s Point, known as Katama, is a barrier beach providing surf bathing and the opportunity to explore Katama Bay on the other side of the dunes. Wasque and Cape Poge on Chappaquiddick are both unspoiled areas owned and maintained by The Trustees of Reservations. They are favorite spots for bluefish and bass fishermen. Lighthouse Beach, located off North Water Street near the town center, offers calm water and views of harbor activities.</p>
        </div>

        <div class="pop-up" id="aquinnah">
          <span class="glyphicon glyphicon-remove" onclick="closePopups();" aria-hidden="true"></span>

          <h1>Aquinnah</h1>

          <p>Many year-round residents of Aquinnah are descendants of the Wampanoag Indians who showed the colonial settlers how to kill whales, plant corn and find clay for the early brickyards. The Aquinnah Wampanoag were judged to be the most skillful and courageous boat-steerers of that era.  The brilliant colors of the mile-long expanse of the Aquinnah Cliffs astonished early explorers and have continued to be a source of intense interest to scientists and visitors alike. Here layers of sands, gravels, and clays of various hues tell a hundred-million-year-old story of a land first covered with forests, then flooded and laid bare, then covered with new growth, time and again. The seas, glaciers, and land itself have contorted these once-level layers into waving bands of color that stream above the sea. Erosion continues as it has for centuries, turning the seas red and revealing fossil secrets. The Aquinnah Cliffs are a national landmark, yet they are seriously threatened by erosion. To protect the Cliffs, climbing and the removal of clay are both prohibited by law. Because of the extremely dangerous rocky ledge offshore, the seas around Aquinnah have always been a place of great peril to the mariner. One of the first revolving lighthouses in the country was erected atop the Cliffs in 1799. The current red-brick electrified Gay Head Light stands in it's place.</p>
        </div>
        <div class="visible-xs">
        	
        </div>
      </div>
      <!-- Info Map end -->

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
  
        <button class="btn btn-large btn-viewgallery" data-toggle="modal" data-target="#pro-gallery-modal">View Gallery</button>

        <div class="modal fade" id="pro-gallery-modal" tabindex="-1" role="dialog" aria-labelledby="proGalleryModal">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div id="pro-gallery-slick">
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/gingerbread-houses.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/harbour-fourkids.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/lifeguard-post.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/menemsha-statue.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/menemsha-sunset.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/ob-harbour.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_80.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_81.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_82.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_83.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_84.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_85.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_86.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_87.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_88.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_89.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_90.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_91.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_92.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_93.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_94.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_95.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_96.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_97.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_98.jpg">
                </div>
                <div class="pro-gallery-slide">
                  <img class="img-responsive" src="images/pro-gallery/1920/IMG_99.jpg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pro Gallery end -->

      <!-- About Contact start -->
      <div id="about-contact">
        <div id="contact-text" class="col-xs-12 col-sm-8 col-md-offset-2">

          <p class="text-center">Greetings from Martha's Vineyard Tours will cater to your schedule, taking as little or as much time as you wish. 
          See the locations where Jaws was filmed, dine on the catch of the day in the quaint fishing village of Menemsha or walk through the camp meeting grounds and marvel at the gingerbread cottages. 
          Learn the history of the independent-minded Islanders. And see what continues to attract artists, celebrities, tycoons and world leaders to this magic island. 
          Relax in the comfort of our 6 person conversion vans, equipped with air-conditioning and leather seats in our 4-hour tour.</p>
        </div>
        <div class="col-xs-12 text-center">

          <h3><span class="glyphicon glyphicon-earphone"></span><a href="tel:6173599298" >617-359-9298</a></h3>
          <h4><span class="glyphicon glyphicon-envelope"></span><a href="hello@toursmv.com">hello@toursmv.com</a></h4>
        </div>
      </div>
      <!-- About Contact end -->

      <!-- Facebook Posts start -->
      <div id="facebook-posts">
        <h3>Latest Posts</h3>
      </div>
      <!-- Facebook Posts end -->

      <!-- Footer start -->
      <div id="footer" class="text-center">
        <p>&copy; <?php date_default_timezone_set('EST'); echo date("Y"); ?> Greetings From Martha's Vineyard &middot; <a href="/privacypolicy.html">Privacy Policy</a> &middot; Site by <a href="http://mvesna.com" target="_blank">MVesna</a> &amp; <a href="http://artlyticalmedia.com" target="_blank">Artlytical Media</a></p>
      </div>
      <a id="scroll-up"class="glyphicon glyphicon-chevron-up"href="#hero"></a>
      <!-- Footer end -->
    </div>

    <!-- bower:js -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/image-map-resizer/js/imageMapResizer.min.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="bower_components/waypoints/lib/noframework.waypoints.js"></script>
    <script src="bower_components/slick-carousel/slick/slick.js"></script>
    <!-- endbower -->

    <script src="js/main.min.js"></script>
  </body>
</html>
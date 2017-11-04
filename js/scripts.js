// TWITTER
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

//FACEBOOK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//GOOGLE-MAP
 function initMap() {
        var myLatLng = {lat: 48.2446852, lng: 16.3559216};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: myLatLng,
          mapTypeId: 'hybrid'
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: "Greg's WebDev Office"
        });

         map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 3000);
        });

        marker.addListener('click', function() {
          map.setZoom(20);
          map.setCenter(marker.getPosition());
        });
      }

//DOCUMENT-READY
$(document).ready(function(){
 
 //TOOLTIP
 $(function () {
   $('#item1').tooltip();
 });


 $(function () {
   $('[data-toggle="tooltip"]').tooltip();
  });

//CONTACT-FORM
$('#submit-button').on('click', function() {
	var comment = $('.message-box').val();
	var formName = $('.name-box').val();
	var formPhone = $('.phone-box').val();
	var formEmail = $('.email-box').val();
	var thanks = 'I received your message, thanks!';
	if(comment === "") {
		$(".message-box").css("border", "2px solid red");
	} else {
	$('#visible-comment').html(thanks);
	$('#visible-name').html(formName);
	$('#visible-phone').html(formPhone);
	$('#visible-email').html(formEmail);
	$('.message-box').hide();
	$('.form-control').hide();
	$('.control-label').hide();
	$('#submit-button').hide();
	return false;
	}
});

//Character-count
$(".message-box").on("keyup", function() {
	console.log("its working");
	var charCount = $('.message-box').val().length;
	console.log(charCount);
	$('#charCount').html(charCount);
	if(charCount > 50) {
		$('#charCount').css('color', 'red');
	}
	else {
		$('#charCount').css('color', 'white');
	}
});

//MESSAGE-BOX STYLE
$(".form-control").css("border", "2px solid grey");

//SMOOTH SCROLL
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

 //STELLAR
 $(window, 'body').stellar({
    horizontalOffset: 0,
    verticalOffset: 80
  });
 
//Work section
for(var i = 0; i < works.length; ++i ) {
$('#mywork').append("\
	<div class='container anchor col-sm-6'>\
	 <a href='" + works[i].url + "' target='_blank' class='work-img'>\
      <img class='img-responsive project-images' src='" + works[i].pic + "'>\
      <span class='info'><p class='proj-title'>Project:</p>" + works[i].title + "</span>\
    </a>\
      <button type='button' class='btn btn-default btn-xs' id='modalButton' data-toggle='modal' data-target='#" + works[i].id + "'>\
        " + works[i].title + " project details\
      </button>\
    <div class='modal fade' id='" + works[i].id + "' tabindex='-1' role='dialog' aria-labelledby='exampleModalLongTitle' aria-hidden='true'>\
      <div class='modal-dialog' role='document'>\
        <div class='modal-content'>\
          <div class='modal-header'>\
            <h2 class='modal-title' id='exampleModalLongTitle'>" + works[i].title + "</h2>\
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\
              <span aria-hidden='true'>&times;</span>\
            </button>\
          </div>\
          <div class='modal-body'>\
            <h4>Specs and goals</h4>\
            <p class='modal-project'>" + works[i].specs + "</p>\
            <hr>\
            <h4>Tools and methods used</h4>\
            <p class='modal-project'>" + works[i].tools + "</p>\
          </div>\
          <div class='modal-footer'>\
            <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
	");
var images = $('#mywork img');
if (i%2 === 0) {
$(images[i]).css('border', '2px solid black');
	} else {
		$(images[i]).css('border', '2px solid grey');		
	};




};

$(".work-img").mouseenter(function() {
	$(".info", this).show();
}).mouseleave(function() {
	$(".info", this).hide();
});




// Change text color after name in navbar
$(".Home a span").mouseenter(function() {
  $("#color-change").css("color", "black");
});

$(".Home a span").mouseleave(function() {
  $("#color-change").css("color", "#58595b");
});

// AutoHidingNavbar
$(".navbar-fixed-top").autoHidingNavbar({
  // see next for specifications
});

// GitHub logo change
$("#github-cat2").hide()

$("#githubtrial").mouseenter(function() {
  $("#github-cat").hide();
  $("#github-cat2").fadeIn(100, function() {
  });
});

$("#githubtrial").mouseleave(function() {
  $("#github-cat2").hide();
  $("#github-cat").fadeIn(100, function() {
  });
});

// Collapsed navbar name
var mq = window.matchMedia( "(min-width: 768px)" );
if (mq.matches) {
  // window width is at least 768px
  $(".collapsed-name").hide();
} else {
  // window width is less than 768px
  $(".collapsed-name").show();
  $(".uncollapsed-name").hide();
  $("#githubtrial").hide();
};



});



// courser js
const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", e => {
 cursor.style.left = e.pageX + "px";
 cursor.style.top = e.pageY + "px";
});

document.addEventListener("mouseup", () => cursor.classList.add("pulse"));
document.addEventListener("animationend", () =>
 cursor.classList.remove("pulse")
);

document.addEventListener(
 "mouseleave",
 () => (cursor.style.visibility = "hidden")
);
document.addEventListener(
 "mouseenter",
 () => (cursor.style.visibility = "visible")
);

$(document).ready(function(){

	//initialising fullpage.js in the jQuery way
	
if (document.documentElement.clientWidth > 767) {
    $('#fullpage').fullpage({
    autoScrolling:  true,
  });
}
if (document.documentElement.clientWidth < 768) {
    $('#fullpage').fullpage({
    autoScrolling:  false,  
     scrollingSpeed: 170,  
     css3:true,
     easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
  });
}
	$.fn.fullpage.setMouseWheelScrolling(false);
	$('#moveSectionDown').click(function(e){
	    e.preventDefault();
	    $.fn.fullpage.moveSectionDown(e);
	});

});

// slick js

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  speed: 1000,
  lazyLoad: 'progressive',
  asNavFor: '.slider-nav',
}).slickAnimation();
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  asNavFor: '.slider-for',
  dots: false,
  arrows:true,
  centerMode: false,
  focusOnSelect: true,
   //autoplay: false,
  //autoplaySpeed: 3000,
  speed: 2000,
  //cssEase: 'linear'	
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
///// slick thumbnail //////////
(function ($) {
  $(function() {
setTimeout(function() {
  $('.slideshow__slides .slick-prev').prepend('<div class="prev-slick-img slick-thumb-nav"><img src="/prev.jpg" class="img-responsive"></div>');
  $('.slideshow__slides .slick-next').append('<div class="next-slick-img slick-thumb-nav"><img src="/next.jpg" class="img-responsive"></div>');
  get_prev_slick_img();
  get_next_slick_img();
}, 500);

$('.slideshow__slides').on('click', '.slick-prev', function() {
  get_prev_slick_img();
});
$('.slideshow__slides').on('click', '.slick-next', function() {
  get_next_slick_img();
});
$('.slideshow__slides').on('swipe', function(event, slick, direction) {
  if (direction == 'left') {
    get_prev_slick_img();
  }
  else {
    get_next_slick_img();
  }
});
// $('.slick-dots').on('click', 'li button', function() {
//   var li_no = $(this).parent('li').index();
//   if ($(this).parent('li').index() > li_no) {
//     get_prev_slick_img()
//   }
//   else {
//     get_next_slick_img()
//   }
// });
function get_prev_slick_img() {
  // For prev img
  var prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
  $('.prev-slick-img img').attr('src', prev_slick_img);
  $('.prev-slick-img').css('background-image', 'url(' + prev_slick_img + ')');
  // For next img
  var prev_next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
  $('.next-slick-img img').attr('src', prev_next_slick_img);
  $('.next-slick-img').css('background-image', 'url(' + prev_next_slick_img + ')');
}
function get_next_slick_img() {
  // For next img
  var next_slick_img = $('.slick-current').next('.slider-image').find('img').attr('src');
  $('.next-slick-img img').attr('src', next_slick_img);
  $('.next-slick-img').css('background-image', 'url(' + next_slick_img + ')');
  // For prev img
  var next_prev_slick_img = $('.slick-current').prev('.slider-image').find('img').attr('src');
  $('.prev-slick-img img').attr('src', next_prev_slick_img);
  $('.prev-slick-img').css('background-image', 'url(' + next_prev_slick_img + ')');
}
});
})(jQuery);








//////////////////////
$('.product-card.opn-thumb').click(function() {
	$('body').addClass('show-thumb');
});

$('.backTolist').click(function() {
  $('body').removeClass('show-thumb');
});

$('#backtohome').click(function(){
    $.fn.fullpage.moveTo('firstPage', 'firstSlide');
});
$('#backtohome').click(function(){
    $('body').removeClass('show-thumb');
});


//loader
$(window).on('load', function(){
  $(".site-loader").fadeOut("slow");
});

///


'use strict';

$(document).ready(function () {
    
  $('.founder-slider').owlCarousel({
    loop: true,
    nav: true,
	margin:40,
    autoplay: true,
    autoplayTimeout: 5000,
	smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 1,
      },
     575: {
        items: 1,
      },
	  768: {
        items: 1,
      },
      1199: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
		
  });
  
  
  $('.officeImgSlider').owlCarousel({
    loop: true,
    nav: true,
	margin:0,
    autoplay: true,
    autoplayTimeout: 3000,
	smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 1,
      },
     575: {
        items: 1,
      },
	  768: {
        items: 1,
      },
      1199: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
		
  });
  
  $('.office-slider').owlCarousel({
    loop: true,
    nav: true,
	margin:40,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 1.2,
      },
     575: {
        items: 1,
      },
	  768: {
        items: 1.3,
      },
      1199: {
        items: 1.3,
      },
      1920: {
        items: 1.3,
      },
    },
		
  });
  
  
  
  $('.fintechSupportSlider').owlCarousel({
    loop: true,
    nav: true,
	margin:20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 1.2,
      },
     575: {
        items: 1.2,
      },
	  768: {
        items: 2.3,
      },
      1199: {
        items: 2.3,
      },
      1920: {
        items: 2.3,
      },
    },
		
  });
  
  
  $('.slider-whychoose-sec').owlCarousel({
    loop: true,
    nav: true,
	margin:20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.2,
      },
      425: {
        items: 1.2,
      },
     575: {
        items: 1,
      },
	  768: {
        items: 1.3,
      },
      1199: {
        items: 1.3,
      },
      1920: {
        items: 1.3,
      },
    },
		
  });
  
  AOS.init({
  duration: 1200
});
  /**$('.quality-assurance').owlCarousel({
    loop: true,
    nav: true,
	rewind: true,
	autoplay: true,
	margin:50,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.2,
      },
      425: {
        items: 1.2,
      },
     575: {
        items: 2.3,
      },
	  768: {
        items: 2.5,
      },
      1199: {
        items: 3.7,
      },
      1920: {
        items: 4.7,
      },
    },
		
  });**/
  
  
  $(document).ready(function () {
  var owl = $(".loop11");

  owl.owlCarousel({
    nav: true,
    items: 1,
    loop: true,
	autoplay: true,
	margin:50,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    margin: 70,
    responsive: {
      0: {
        items: 1.3,
      },
      425: {
        items: 1.5,
      },
     575: {
        items: 2.3,
      },
	  768: {
        items: 2.5,
      },
      1199: {
        items: 3.7,
      },
      1920: {
        items: 4.7,
      },
    },
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash"
  });

  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });


  init();
  
  
});

  
  
  
  
  
  $('.product-carousel').owlCarousel({
    loop: true,
    nav: true,
	margin:40,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.3,
      },
      425: {
        items: 1.3,
      },
     575: {
        items: 1.3,
      },
	  768: {
        items: 2,
      },
      1199: {
        items: 3,
      },
      1920: {
        items: 4,
      },
    },
  });
  

  $('.cart-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2,
      },
     575: {
        items: 3,
      },
      1440: {
        items: 4,
      },
      1920: {
        items: 5,
      },
    },
  });

  $('.product-view-carousel').owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  
  

  $('.brand-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.5,
      },
      520: {
        items: 2,
      },
      768: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1199: {
        items: 5,
      },
    },
  });

  $('.video-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.promotion-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    nav: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.next_owl').click(function () {
    $(this)
      .parent()
      .parent()
      .find('.owl-carousel')
      .trigger('next.owl.carousel');
  });
  $('.prev_owl').click(function () {
    $(this)
      .parent()
      .parent()
      .find('.owl-carousel')
      .trigger('prev.owl.carousel');
  });
  
  $(document).on("click", ".naccs .menu div", function() {
       var numberIndex = $(this).index();
         if (!$(this).is("active")) {
         	$(".naccs .menu div").removeClass("active");
         	$(".naccs ul li").removeClass("active");
         
         	$(this).addClass("active");
         $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
       }
  });
  
  
  $(document).on("click", ".mobileapptabs .menu div", function() {
       var numberIndex = $(this).index();
         if (!$(this).is("active")) {
         	$(".mobileapptabs .menu div").removeClass("active");
         	$(".mobileapptabs ul li").removeClass("active");
         
         	$(this).addClass("active");
         $(".mobileapptabs ul").find("li:eq(" + numberIndex + ")").addClass("active");
       }
  });
  
  $(document).on("click", ".webdeveloed-tabs .menu div", function() {
       var numberIndex = $(this).index();
         if (!$(this).is("active")) {
         	$(".webdeveloed-tabs .menu div").removeClass("active");
         	$(".webdeveloed-tabs ul li").removeClass("active");
         
         	$(this).addClass("active");
         $(".webdeveloed-tabs ul").find("li:eq(" + numberIndex + ")").addClass("active");
       }
  });
  
  
var maxLength = 180;
  $(".show-read-more").each(function(){
    var myStr = $(this).text();
    if($.trim(myStr).length > maxLength){
        var newStr = myStr.substring(0, maxLength);
        var removedStr = myStr.substring(maxLength, $.trim(myStr).length + 50);
        $(this).empty().html(newStr);
        $(this).append(' <a href="javascript:void(0);" class="read-more">...read more</a>');
        $(this).append('<span class="more-text">' + removedStr + '</span>');
    }
});
$(".read-more").click(function(){
    $(this).siblings(".more-text").contents().unwrap();
    $(this).remove();
});

  $(function(){
    $('.common_modal').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });
  });
  

});
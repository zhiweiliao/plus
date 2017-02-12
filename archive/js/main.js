jQuery(document).ready(function() {

  function isTouchDevice(){
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
  }
    if(isTouchDevice()===true) {
    $theOffset = -65;
    }
    else {
    $theOffset = -65;
    }


  window.location.hash = '';
  history.pushState('', document.title, window.location.pathname);



  $totalPanels = 0;

  $.scrollify({
		section:".panel",
    scrollbars:false,
    offset : $theOffset,

    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      var $panel = panels[i];
      var $curr = ".panel";
      var $next = ".panel"+[i+1];



      $(".menu .current").removeClass("current");
      $(".menu").find("a[href=\"#" + ref + "\"]").addClass("current");

      $( ".project-title", $curr).removeClass("show");
      $( ".project-title", $next).addClass("show");


      $( ".swiper-container", $curr).removeClass("show");
      $( ".swiper-container", $next).addClass("show");


      if(isTouchDevice()===true) {
        if(i===2){
          $( ".panel2 .swiper-container").css("opacity","0");
        }else {
          $( ".panel2 .swiper-container").css("opacity","1");
        }
      }
      else {
          // do nothing
      }

      $($curr).removeClass("current");
      $($panel).addClass("current");
    },

    after:function(i,panels) {

    },

    afterRender:function(i,panels) {
      var menu = "<ul>";
      var activeClass = "";
      var homeClass = "";
      var title = "";
      var place = "";
      var year = "";


      $(".panel").each(function(i) {
        $this = $(this);
        activeClass = "";

        $totalPanels += 1;

        if(i===0){
          activeClass = "current";
          homeClass = "";
          title = "Home";
        }else{
          title = $(".panel"+(i+1)+" h2 .title").text();
          place = $(".panel"+(i+1)+" .place").text();
          year = $(".panel"+(i+1)+" .year").text();
        }

        menu += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\">" + title + "<span class=\"place\">" + place + "</span>" +"</a></li>";
        gotoProject = "<div class=\"goto-project\"><a href=\"#" + $(this).attr("data-section-name") + "\"></a></div>";

        $(".swiper-container",$this).append(gotoProject);

      });

      menu += "</ul>";

      $(".menu").append(menu);
      $(".panel").last().addClass("last");

      $( ".panel2 .swiper-container").css("opacity","1");

    }

  });

  $(".pagination a").on("click",$.scrollify.move);
  $(".goto-project a").on("click",$.scrollify.move);


});


  // ------------------ MENU TRIGGER -------------------- //
$(document).ready(function(){



	$('#nav-icon, .menu a').click(function(){
  	$("#nav-icon").toggleClass('open');
    $(".overlay").toggleClass('show');
    $(".overlay .menu li").toggleClass('show');
      if($($(this)).hasClass('open')){
        $.scrollify.disable();
        // $('body').on(' touchmove mousewheel', function(e){
        //   e.preventDefault();
        //   e.stopPropagation();
        //   return false;
        // })
      }else{
        $.scrollify.enable();
        // $('body').off(' touchmove mousewheel');
      }
	});

  $(".menu a").on("click",$.scrollify.move);

});



// ------------------ PROGRESS LOADER -------------------- //
$(document).ready(function(){

  $('body').show();
  $('.version').text(NProgress.version);
  NProgress.start();

  window.onload = function()
  {
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 321);
   }

});




// ------------------ SLIDERS -------------------- //
jQuery(document).ready(function(){

		function isTouchDevice(){
			return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
		}
		if(isTouchDevice()===true) {
		}
		else {
		}

    $(".swiper-container").each(function(index, element){
      var $this = $(this);
      $(this).addClass('s'+index);

            if(isTouchDevice()===true) {


                        var swiper = new Swiper(this, {
                            preloadImages: false,
                            lazyLoading: true,
                            lazyLoadingOnTransitionStart: true,
                            loop: false,
                            slidesPerView: 1,
                            lazyLoadingInPrevNext: true,
                            spaceBetween: 15,
                            paginationClickable: true,
                            // speed: 600,
                            slideToClickedSlide: true,

                            pagination: '.swiper-pagination',

                        });



            }	else {
                  var swiper = new Swiper(this, {
                      preloadImages: false,
                      lazyLoading: true,
                      lazyLoadingOnTransitionStart: true,
                      loop: false,

                      slidesPerView: 2,
                      spaceBetween: 110,


                      paginationClickable: true,
                      speed: 600,
                      slideToClickedSlide: true,
                      pagination: '.swiper-pagination',

                      onSlideNextStart: function (swiper) {
                          var sW = $('.s'+index+" .swiper-slide-next").width();
                          var iW = $('.s'+index+" .swiper-slide-prev img").width();
                          var xt = sW - iW;
                          $('.s'+index+" .swiper-slide-prev img").css("transform","translateX("+ xt + "px)");
                      },
                      onSlidePrevStart: function (swiper) {
                           $('.s'+index+" .swiper-slide-active img").css("transform","translateX("+ "0" + "px)");
                      },
                      onInit: function (swiper) {
                        $(window).on('resize', function(){
                            swiper.slideTo(0,600);
                            $('.s'+index+" .swiper-slide img").css("transform","translateX("+ "0" + "px)");
                        });

                      }

                  });

            		}

    });

});

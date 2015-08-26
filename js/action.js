
// function dateCounterTime(){
//     // Set the targetDate
//     var targetDate = new Date("December 6, 2014 16:30:00");

//     var remainingSeconds = ~ ~((targetDate - new Date()) / 1000);
//     var remainingTime = remainingSeconds / (60 * 60 * 24);

//     var str = remainingTime;
//     var intRemainingTime = parseInt(remainingTime);

//     $(".dateCounter span").text(intRemainingTime);
    
//     // Store the result in the element
//    // counter.innerHTML = str.substring(n);
//  }



function presentAction(event){
    event.preventDefault();

        $(".imgLayerDisplay").attr("src", imgLayer)
        $(".layer").add("display", "block");
        

        //return false;

}

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1100 );
        return false;
      }
    }
  });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navMain a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navMain a').removeClass("navMainActive");
            currLink.addClass("navMainActive");
        }
        else{
            currLink.removeClass("navMainActive");
        }
    });
}


$(document).ready(function(){
	// dateCounterTime();
    $(document).on("scroll", onScroll);

    $(".presente").click(function(event){
        // event.preventDefault();
        
        console.log(this);

        var imgLayer = $(this).find('img').attr('src');
        var spanLayer = $(this).find("span").text();
        var priceLayer = $(this).find("b").text();
        
        $(".imgLayerDisplay").attr("src", imgLayer);
        $(".layerCaption b").html(spanLayer);
        $(".layerCaption span").html(priceLayer);
        $(".layer").css("display", "block");

    
        $(".darEsteAction").click( function(event){
            $("#layerContent-1").addClass("hide");
            $("#layerContent-3").addClass("hide");
            $(".layerButtons-1").addClass("hide");
            $(".layerButtons-3").addClass("hide");
            $("#layerContent-2").removeClass("hide");
            $(".layerButtons-2").removeClass("hide");

            return false;

        });

        $("#presenteInputContent").val(spanLayer);
        $("#precoInputContent").val(priceLayer);


        return false;
    });

    $("a.voltarAction").click(function(event){
            event.preventDefault();
            $(".layer").css("display", "none");
            $("#layerContent-2").addClass("hide");
            $("#layerContent-3").addClass("hide");
            $(".layerButtons-2").addClass("hide");
            $(".layerButtons-3").addClass("hide");
            $("#layerContent-1").removeClass("hide");
            $(".layerButtons-1").removeClass("hide");
            return false;
        });
});


$(function() {

$(document).ready(function() {
   $('#my_carousel').carousel('pause');
});

    $('a[href*=#]:not([href=#])').not(".carousel-control").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
        return false;
    });

    $(".about_fade_in").on("click", function() {
        $("#about_content").hide();
        $("#about_content").fadeIn( 2000 );
    });

     $("#contact_title_fade_in").on("click", function() {
        $("#contact-title").hide();
        $("#contact-title").fadeIn( 3000 );
    });

     $(".contact_fade_in").on("click", function() {
        $("#holler").hide();
        $("#holler").fadeIn( 3000 );
    });


    $(".github_link").find("i").hover(function() {
        $(this).css("font-size", "800%");
    }, function(){
        $(this).css("font-size", "500%");
    });
});
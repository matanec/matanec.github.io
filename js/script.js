$(function(){

    // Instantiate Bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    //yamm 
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })

    // Instantiate main owl carousel 
    $("#mainCarousel").owlCarousel({
        animateIn: "fadeId",
        animateOut: "fadeOut",
        loop:true,
        margin:0,

        autoplay:true,
        autoplayTimeout:15000,

        items:1,
        nav: true,
        navText: ["<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-chevron-right\" aria-hidden=\"true\">"]
    });


    //control visibility of main carousel
    $(".main-carousel-inner > .owl-nav, .main-carousel-inner > .owl-dots").hide();
    
    $(".main-carousel-inner").hover(
        function() {
            $(".main-carousel-inner > .owl-nav, .main-carousel-inner > .owl-dots").show();
        }, 
        function() {
            $(".main-carousel-inner > .owl-nav, .main-carousel-inner > .owl-dots").hide();
    });


    // Instantiate owl carousel for customers
    $("#customerCarousel").owlCarousel({
    loop:true,
    dots:false,
    margin:10,

    autoplay:true,
    autoplayTimeout:4500,
    
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        426:{
            items:3,
            nav:false
        },
        1024:{
            items:5,
            nav:false
        }
      }
    });

    //monitor footer placehoder
    $("#colophonPlaceholder").height($("#colophon").height());
    $(window).resize(function() {        
        $("#colophonPlaceholder").height($("#colophon").height());
    });

});

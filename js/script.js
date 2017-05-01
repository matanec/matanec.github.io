// Instantiate Bootstrap tooltip
$(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// Instantiate main owl carousel 
$(function(){
    $("#mainCarousel").owlCarousel({
        animateIn: "fadeId",
        animateOut: "fadeOut",
        loop:true,
        margin:0,
        autoplay:true,
        items:1,
        nav: true,
        navText: ["<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-chevron-right\" aria-hidden=\"true\">"]
    });
});

//control visibility of main carousel 
$(function(){
   
    $(".main-carousel-inner > .owl-nav, .main-carousel-inner > .owl-dots").hide();
    
    $(".main-carousel-inner").hover(
        function() {
            $(".main-carousel-inner > .owl-nav, .main-carousel-inner > .owl-dots").show();
        }, 
        function() {
            $(".main-carousel-inner > .owl-nav, .main-carousel-inner > .owl-dots").hide();
        });
});

// Instantiate owl carousel for customers
$(function(){
  $("#customerCarousel").owlCarousel({
    loop:true,
    dots:false,
    margin:10,

    autoplay:true,
    autoplaySpeed:800,
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
});

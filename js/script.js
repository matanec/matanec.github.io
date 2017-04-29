// Instantiate Bootstrap tooltip
$(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// Instantiate owl carousel for customers
$(function(){
  $("#customerCarousel").owlCarousel({
    loop:true,
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

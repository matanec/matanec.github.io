$(function(){

    // Instantiate Bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    
    //monitor main menu position
    $("#topmenu").sticky({ topSpacing: 0 });

    //yamm 
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })

});

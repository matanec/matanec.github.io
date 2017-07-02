$(function(){

    // Instantiate Bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip(); 

    //yamm 
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation()
    })

});

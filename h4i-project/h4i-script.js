// navbar fade on scroll and reappear on mouse hover
$(window).scroll(function() {
    if ($(window).scrollTop() > 75) {
        $('#header').css("opacity", 0.3);
    }
    else {
        $('#header').css("opacity", 1);
    }
});

$(document).ready(function(){
    $('#header').on("mouseover", function () {
            $(this).css("opacity", 1);
            });

    $('#header').on("mouseleave", function () {
        if($(window).scrollTop() > 75) { // this here
            $(this).css("opacity", 0.3);
        }
    });

})

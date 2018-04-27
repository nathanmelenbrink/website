$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        console.log(selector)
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
// function openTab(tabName) {
//     var i, x;
//     x = document.getElementsByClassName("containerTab");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     document.getElementById(tabName).style.display = "block";
// }
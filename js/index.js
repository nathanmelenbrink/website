$(window).load(function(){
    var $container = $('.gridder');
    // $container.isotope({
    //     transformsEnabled: false,
    //     itemSelector: '.gridder-list',
    //     filter: '*'//,
    //     // animationOptions: {
    //     //     duration: 750,
    //     //     easing: 'linear',
    //     //     queue: false
    //     // }
    // });
 
    // $('.portfolioFilter a').click(function(){
    //     $('.portfolioFilter .current').removeClass('current');
    //     $(this).addClass('current');
    //     var selector = $(this).attr('data-filter');
    //     console.log(selector);

    //     $("#portfolio").fadeTo(100, 0.1);
    //     $("#portfolio li").not(""+selector).fadeOut().removeClass('scale-anm');
    //     setTimeout(function() {
    //       $(""+selector).fadeIn().addClass('scale-anm');
    //       $("#portfolio").fadeTo(300, 1);
    //     }, 300); 

    //     // $container.isotope({
    //     //     transformsEnabled: false,
    //     //     itemSelector: '.gridder-list',
    //     //     filter: selector//,
    //     //     // animationOptions: {
    //     //     //     duration: 750,
    //     //     //     easing: 'linear',
    //     //     //     queue: false
    //     //     // }
    //     //  });
    //      return false;
    // }); 
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
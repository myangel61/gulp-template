$(function() {

    $('#owl-one').owlCarousel({
        items: 1,
        startPosition: 1,
        loop: true,
        nav: true,
        dots: true,
        dotsEach: true,
        navText: [],
        smartSpeed: 1000
    });

    var menuButton = $("#menu-button");

    menuButton.on("click", function(){
        $(this).toggleClass("change");
        $("#nav-list").toggleClass("display-flex");
    });

    var searchButton = $("#search-button");

    searchButton.on("click", function(){
        $("#inputs-list").toggleClass("display-flex");
    });

});
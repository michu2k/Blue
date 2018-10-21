$(function() {
    // Toggle hamburger class
    var mobileBtn = $('#mobile-btn');

    mobileBtn.click(function() { 
        $(this).toggleClass('toggled');
    });   

    // Dropdown
    var dropdownMenuClass = '.dropdown-menu';
    var dropdownMenu = $(dropdownMenuClass);
    var dropdown = $('.dropdown');

    if (dropdownMenu.length) {
        if ($(window).width() > 991) {

            $(window).click(function() { 
                dropdownMenu.fadeOut(200);
            });

            dropdown.click(function() {   
                dropdownMenu.stop().fadeOut(200);
                $(this).children(dropdownMenuClass).stop().fadeToggle(200);
            });
        }
    }

    // Share buttons
    var tooltips = $('.share-tooltip', '.post-share');
    var title, url;

    if (tooltips.length) {
        tooltips.each(function(i) {

            $(this).on('click', function(e) {

                title = $(tooltips[i]).attr('data-title');
                url = $(tooltips[i]).attr('href');

                // Open share window
                window.open(url, title, 'width=500, height=300');

                e.preventDefault();
            });
        });
    }
});
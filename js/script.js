function toggleMenu() {
    var nav = document.querySelector('.menu');
    var toggle = document.querySelector('.toggle img');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');

}

jQuery(function ($) {

    $('.menu ul li a').click(function () {
        var a = $(this);
        var active_tab_class = 'active-tab-menu';
        var the_tab = '.' + a.attr('data-tab');

        var nav = document.querySelector('.menu');
        var toggle = document.querySelector('.toggle img');

        nav.classList.remove('active');
        toggle.classList.remove('active');

        $('.menu ul li a').removeClass(active_tab_class);

        a.addClass(active_tab_class);

        $('.content .tabs').css({
            'display': 'none'
        });

        $(the_tab).show();

        return false;
    });
});
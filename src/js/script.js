$(document).ready(() => {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    const headerElement = document.querySelector('.navbar');
    $(window).scroll(() => {
        if ($(window).scrollTop() > $(headerElement).height()) {
            $(headerElement).addClass('small-header');
        }
        else {
            $(headerElement).removeClass('small-header');
        }
    });

    $('.form-control').focus(function() {
        if (!$(this).hasClass('hadFocus')) {
            $(this).addClass('hadFocus');
        }
    });
});
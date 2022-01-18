$(document).ready(function() {
    $('#switch').on('click', function() {
        if ($('nav').css('display') == 'flex') {
            $('nav').css('display', 'none');
            $('.fa-times').css('display', 'none');
            $('.fa-bars').css('display', 'block')
        } else {
            $('nav').css('display', 'flex')
            $('.fa-times').css('display', 'block');
            $('.fa-bars').css('display', 'none')
        }
    });
    $(document).click(function(navhide) {
        let container = $(".header");
        if (!container.is(navhide.target) && container.has(navhide.target).length === 0) {
            $('nav').hide();
            $('.fa-times').css('display', 'none');
            $('.fa-bars').css('display', 'block')
        }
    });
    $('.filterExpand').on('click', function() {
        $('.buttons').show();
        $('.filterExpand').hide()
    });
    $(document).click(function(filterhide) {
        let container2 = $('.filter');
        if (!container2.is(filterhide.target) && container2.has(filterhide.target).length === 0) {
            $('.buttons').hide();
            $('.filterExpand').show();
            $('.bannerContainer').children().show();
        }
    })
    $('#white').on('click', function() {
        $('.img.not_white').hide();
        $('.img.white').show()
    })
    $('#notWhite').on('click', function() {
        $('.img.not_white').show();
        $('.img.white').hide()
    })

})
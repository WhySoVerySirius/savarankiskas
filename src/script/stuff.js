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
    $(document).click(function(e) {
        let container = $(".header");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('nav').hide();
            $('.fa-times').css('display', 'none');
            $('.fa-bars').css('display', 'block')
        }
    });
    $('.filterExpand').on('click', function() {
        $('.buttons').show();
        $('.filterExpand').hide()
    });
    $(document).click(function(f) {
        let container2 = $('.filter');
        if (!container2.is(f.target) && container2.has(f.target).length === 0) {
            $('.buttons').hide();
            $('.filterExpand').show();
        }

    })

})
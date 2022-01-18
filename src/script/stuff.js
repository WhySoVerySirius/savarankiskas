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

})
(function($) {
    $(document).on('mousedown', function(e) {
        if (e.target.className !== 'user-cp'
            && e.target.parentElement.className !== 'sub-user-cp' 
            && e.target.className !== 'sub-user-cp') {
            if ($('.sub-user-cp').css('display') !== 'none') {
                $('.sub-user-cp').css('display', 'none');
            }
        }
        return false;
    });

    $('.user-cp').click(function() {
        if ($(this).find('.sub-user-cp').css('display') === 'none') {
            $(this).find('.sub-user-cp').css('display', 'block');
        }
    });
})(jQuery);
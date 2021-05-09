$.each($('.theme-element'), function() {
        
    if($('.theme-form').find('input').attr('value') == 'dark') {
        $(this).addClass('light');
        $('.dark-theme').addClass('active');
    }
    
});
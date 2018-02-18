function attachEvents() {
    
    $('a.button').on('click',buttonClick);
    function buttonClick(){
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}

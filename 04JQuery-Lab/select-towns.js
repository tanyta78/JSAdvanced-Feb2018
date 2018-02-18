function attachEvents() {
    $('#items').on('click', 'li', selectEl);

    function selectEl() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    }

    $('#showTownsButton').on('click', function() {
        let result = $('#items li[data-selected=true]').toArray().map(li => li.textContent).join(', ');
        $('#selectedTowns').text('Selected towns: ' + result);

    });
}

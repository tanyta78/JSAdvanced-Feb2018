function initializeTable() {
    //attach event listener to Create
    $('#createLink').click(addCountryInfo);

    //create initial input - call create table row & append to table
    createCountryInfo('Bulgaria', 'Sofia');
    createCountryInfo('Germany', 'Berlin');
    createCountryInfo('Russia', 'Moscow');
    fixLinks();

    //adjust links up down
    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }

    //read input and call create row
    function addCountryInfo() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createCountryInfo(name, capital);
        fixLinks();
    }
    //create table row
    function createCountryInfo(name, capital) {
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow))
            )
            .appendTo($('#countriesTable'));
    }

    //move row up
    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
    }
    //move row down
    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixLinks();
    }
    //delete row
    function deleteRow() {
        $(this).parent().parent().remove();
        fixLinks();
    }
}

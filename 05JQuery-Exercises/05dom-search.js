function domSearch(selStr, isCaseSensitive) {
    let selector = $(selStr);

    //create add control
    let addBtn = $('<a>').addClass('button').css('display', 'inline-block').text('Add');
    addBtn.on('click', addNewItem);

    let addCtrl = $('<div>').addClass('add-controls')
        .append($('<label>Enter text:</label>'))
        .append('<input>')
        .append(addBtn);

    addCtrl.appendTo(selector);

    //create search control
    let searchCtrl = $('<div>').addClass('search-controls')
        .append($('<label>Search:</label>'))
        .append('<input>')
        .on('input', searchItems);


    searchCtrl.appendTo(selector);

    //create result controls
    let resultCtrl = $('<div>').addClass('result-controls');
    let itemsList = ($('<ul>').addClass('items-list'));
    resultCtrl.append(itemsList);
    resultCtrl.appendTo(selector);

    function searchItems(event) {
        let text = $('.search-controls input').val();

        $('.list-item').each((index, li) => matches(li, text));

        function matches(li, text) {
              $(li).css('display', 'inline-block');
            if (isCaseSensitive) {
                if ($(li).find('strong').text().indexOf(text) < 0) {
                    $(li).css('display', 'none');
                }
            } else {
                if ($(li).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) < 0) {
                    $(li).css('display', 'none');
                }
            }
        }
    }

    function addNewItem(event) {
        let textItemToAdd = $('.add-controls input').val();
        let itemToAdd = $('<li>').addClass('list-item');
        let del = $('<a>').addClass('button').text('X');
        del.on('click', deleteItem);
        itemToAdd.append(del);
        itemToAdd.append(`<strong>${textItemToAdd}</strong>`);
        itemToAdd.appendTo(itemsList);
        $('.add-controls input').val('');
    }

    function deleteItem(event) {
        $(event.target).parent().remove();

    }
}

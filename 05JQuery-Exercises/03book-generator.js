let createBook1 = (function () {
    let id = 1;
    return function (selStr, titleStr, authorStr, isbnNum) {
        let selector = $(selStr);

        //create title and add css
        let title = $('<p>');
        title.addClass('title');
        title.text(titleStr);

        //create author and add css
        let author = $('<p>');
        author.addClass('author');
        author.text(authorStr);

        //create isbn and add css
        let isbn = $('<p>');
        isbn.addClass('isbn');
        isbn.text(isbnNum);

        //create buttons
        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        //add events
        selectBtn.on('click',function () {
            $(this).parent().css('border', '2px solid blue');
        });
        deselectBtn.on('click',function () {
            $(this).parent().css('border', 'none');
        });


        //create bookContainer and add elements
        let bookId = 'book' + id;
        id++;
        let bookContainer = $('<div>');
      
        bookContainer.attr('id', bookId);
        bookContainer.append(title);
        bookContainer.append(author);
        bookContainer.append(isbn);
        bookContainer.append(selectBtn);
        bookContainer.append(deselectBtn);


        //append to selector
        bookContainer.appendTo(selector);

    };
})();

let createBook = (function () {
    let bookId = 1;
    return function (selector, title, author, isbn) {
        $(selector)
                .append($('<div>')
                        .attr('id', 'book' + bookId++)
                        .append($('<p>').addClass('title').text(title))
                        .append($('<p>').addClass('author').text(author))
                        .append($('<p>').addClass('isbn').text(isbn))
                        .append($('<button>').text('Select')
                                .click(function () {
                                    $(this).parent().css('border', '2px solid blue')
                                }))
                        .append($('<button>').text('Deselect')
                                .click(function () {
                                    $(this).parent().css('border', 'none')
                                })));
    }
})();
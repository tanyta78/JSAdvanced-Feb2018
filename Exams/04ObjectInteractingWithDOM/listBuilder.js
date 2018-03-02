function listBuilder(selector) {
    return {
        createNewList: function () {
            //clears the contents of the selector and appends an empty <ul>
            $(`${selector}`).empty().append('<ul>');
        },
        addItem: function (text) {
            let element = $('<li>').text(text);
            let upBtn = $('<button>Up</button>').on('click', this.moveup);
            let downBtn = $('<button>Down</button>').on('click', this.movedown);
            element.append(upBtn);
            element.append(downBtn);
            $(`${selector} ul`).append(element);
        },
        moveup: function () {
            let el = $(this).parent();
            el.insertBefore(el.prev());
        },
        movedown: function () {
            let el = $(this).parent();
            el.insertAfter(el.next());
        }
    };
}
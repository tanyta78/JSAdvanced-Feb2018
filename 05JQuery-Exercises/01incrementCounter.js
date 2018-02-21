function increment(strSel) {
    let selector=$(strSel);

    let textArea=$('<textarea>');
    let incrementBtn=$('<button>Increment</button>');
    let addBtn=$('<button>Add</button>');
    let list=$('<ul>');
    let fragment=document.createDocumentFragment();

    //elements formation
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled',true);

    incrementBtn.addClass('btn');
    incrementBtn.attr('id','incrementBtn');

    addBtn.addClass('btn');
    addBtn.attr('id','addBtn');

    list.addClass('results');

    //add events
    $(incrementBtn).on('click',function (){
        textArea.val(+textArea.val()+1)
    });

    $(addBtn).on('click',function(){
        let li=$(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    //add elements to DOM
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    selector.append(fragment);
}
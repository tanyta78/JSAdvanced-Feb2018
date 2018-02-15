function extractText() {
    // TODO
        let result=[];
    //    Array.from($("ul li")).forEach(element => {
    //        text.push(element.textContent);
    //     });
    //     $('#result').html(text.join(', '));
    $('#items li').each((index, element) => result.push(element.textContent));
    $('#result').text(result.join(', '));
}


function search(){
    let lookup=$('#searchText').val();
    let matches= $(`ul#towns li:contains(${lookup})`);
    $(`ul#towns li:not(:contains(${lookup}))`).css('font-weight','');
   matches.css('font-weight','bold');
   $("#result").text(`${matches.length} matches found.`);
}
function tableBuilder(selector) {
  return {
    createTable: function (columnNames) {
      let table = $('<table>');
      let headings = $('<tr>');
      for (let name of columnNames) {
        headings.append($('<th>').text(name));
      }
      headings.append($('<th>').text('Action'));
      table.append(headings);
      $(`${selector}`).append(table);
    },
    fillData: function (dataRows) {
      for (let data of dataRows) {
        let row = $('<tr>');
        for (let el of data) {
          let td = $('<td>').text(el);
          row.append(td);
        }
        let tdDelete = $('<td>').append($('<button>Delete</button>').on('click', this.delEl));
        row.append(tdDelete);
        $(`${selector} table`).append(row);
      }
     
    },
    delEl: function () {
      $(this).parent().parent().remove();
    }
  };
}

  //module.exports = {StringBuilder};




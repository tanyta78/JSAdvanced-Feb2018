class PaymentManager {
    constructor(title) {
        this.payments = [];
        this.title = title;
        this.element = this.createElement();
        
    }

    render(id) {
        let container = $(`#${id}`);
        container.append(this.element);
        this._id=id;
    }

    createElement() {
        let table = $('<table>');
        let title = $(`<caption>${this.title} Payment Manager</caption>`);
        let tableHead = $('<thead><tr><th class="name">Name</th><th class="category">Category</th><th class="price">Price</th><th>Actions</th></tr></thead>');
        let payments = $('<tbody class="payments"></tbody>');
        let inputArea = $('<tfoot class="input-data"></tfoot>');
        let inputRow = $('<tr></tr>');
        let inputName = $('<td><input name="name" type="text"></td>');
        let inputCategory = $('<td><input name="category" type="text"></td>');
        let inputPrice = $(' <td><input name="price" type="number"></td>');
        let addBtn = $('<td><button>Add</button></td>');

        addBtn.click(() => {
            this.addPaymentMethod(title);
        });

        inputRow.append(inputName);
        inputRow.append(inputCategory);
        inputRow.append(inputPrice);
        inputRow.append(addBtn);
        inputArea.append(inputRow);

        table.append(title);
        table.append(tableHead);
        table.append(payments);
        table.append(inputArea);
        return table;
    }

    addPaymentMethod(title) {
      
        let inputRow =$(`#${this._id}`).find('.input-data tr');
        let inputName = inputRow.children()[0].children().value();
        let inputCategory = inputRow.children('td').eq(1).val();
        let inputPrice = inputRow.children('td').eq(2).val();
      
        let newPay = { name: inputName, category: inputCategory, price: inputPrice };
     
        let newPayElement = $(`<tr></tr>`);
        let name = $(`<td>${newPay.name}</td>`);
        let category = $(` <td>${newPay.category}</td>`);
        let price = $(`<td>${newPay.price}</td>`);

        let delBtn = $('<td><button>Delete</button></td>');
        delBtn.click(() => {

        });
        newPayElement.append(name);
        newPayElement.append(category);
        newPayElement.append(price);
        newPayElement.append(delBtn);
        
        $(`#${this._id}`).find('tbody.payments').append(newPayElement);
    }
}



/**
 * <table>
    <caption>{Title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments">
        <tr>
            <td><!-- Payment's name --></td>
            <td><!-- Payment's category --></td>
            <td><!-- Payment's price --></td>
            <td><button>Delete</button></td>
        </tr>
        <tr>...</tr>
    </tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
</table>		

 */

class Dialog {
  constructor(message, callback) {
    this.message = message;
    this.callback = callback;
    this.inputs = [];
    this.element = null;
  }

  addInput(label, name, type) {
    this.inputs.push([label, name, type]);
  }

  createElement() {
    let container = $('<div>').addClass('overlay');
    let dialog = $('<div>').addClass('dialog');
    let parag = $('<p>').text(this.message);
    dialog.append(parag);

    for (let input of this.inputs) {
      dialog.append($(`<label>${input[0]}</label>`));
      dialog.append($(`<input name="${input[1]}" type="${input[2]}">`));
    }
    let okBtn = $(`<button>OK</button>`).on('click', this._submit.bind(this));
    let cancelBtn = $(`<button>Cancel</button>`).on('click', this._cancel.bind(this));

    dialog.append(okBtn);
    dialog.append(cancelBtn);
    container.append(dialog);
    return container;
  }

  _cancel() {
    if (this.element === null) return;
    this.element.remove();
  }

  _submit() {
    if (this.element === null) return;
    let params = {};
    this.element.find('input').each((i, e) => {
      params[e.name] = e.value;
    });
    this.element.remove();
    this.callback(params);
  }

  render() {
    this.element = this.createElement();
    $(document.body).append(this.element);
  }
}
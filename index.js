class Task {
  constructor(title, deadline) {
    this.title = title;
    this.deadline = deadline;
    this.status = "Open";
  }

  get deadline() {
    return this._deadline;
  }

  set deadline(value) {
    if (value < Date.now()) {
      throw new Error();
    }
    this._deadline=value;
  }

  toString() {

  }

  comparator() {

  }
}








  //module.exports = {StringBuilder};




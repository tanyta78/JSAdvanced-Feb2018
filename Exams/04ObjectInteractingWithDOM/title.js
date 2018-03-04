class TitleBar {
  constructor(title) {
    this.title = title;
    this.menu = [];
  }

  addLink(href, name) {
    this.menu.push([href, name]);
  }

  appendTo(selector) {
    let header=$('<header class="header">');
    let headerRow=$('<div class="header-row"></div>');
    let btn=$('<a class="button">&#9776;</a>').on('click',this.toggleMenu.bind(this));
    let title=$(`<span class="title">${this.title}</span>`);
    headerRow.append(btn);
    headerRow.append(title);
    header.append(headerRow);

    let drawer=$('<div class="drawer"></div>');
    let nav=$('<nav class="menu">');
    for (let link of this.menu) {
      let a=$(`<a class="menu-link" href="${link[0]}">${link[1]}</a>`);
      nav.append(a);
    }
    drawer.append(nav);
    header.append(drawer);

    header.appendTo(selector);
  }

  toggleMenu(){
  let links=  $('.drawer');
    if (links.css('display') == 'none') {
      links.css('display', 'block');
  } else {
      links.css('display', 'none');
  }
  }
}

  //module.exports = {StringBuilder};




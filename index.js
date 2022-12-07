const navRadioButtons = document.querySelectorAll('input[name="nav_radio"]');
navRadioButtons.forEach((radio) =>
  radio.addEventListener("change", function (event) {
    let item = event.target.value;
    if (item == "2") {
      sidebarCreator();
    } else {
      deleteElementFromHtml(".sidebar_container");
    }
    console.log(item);
  })
);

function insertElementsIntoHtmlContainer(tagName, elements) {
  const container = document.getElementsByClassName(`${tagName}`)[0];
  elements.forEach((element) => {
    container.appendChild(element);
  });
}

function deleteElementFromHtml(elementsFromPage) {
  const elements = Array.from(document.querySelectorAll(elementsFromPage));
  elements.forEach((element) => {
    element.remove();
  });
}

function insertHtmlIntoBeginContainer(
  elementToInsert,
  elementFromPageForInserting
) {
  const elementFromPage = document.querySelector(elementFromPageForInserting);
  elementFromPage.prepend(elementToInsert);
}

function createSidebarMenuContainer() {
  const sidebarMenuContainer = document.createElement("div");
  sidebarMenuContainer.className = "sidebar_container";
  return sidebarMenuContainer;
}

function createSidebarMenuElements(menuHeaderList) {
  menuHeaderList.map((menuHeader) => {
    const div = document.createElement("div");
    div.className = "sidebar_btn_item";
    div.innerHTML = `<input id="radio-4" type="radio" name="radio2" value="1" checked />
    <label for="radio-4">${menuHeader}</label>`;
    return div;
  });
}

function sidebarCreator() {
  const menuList = [
    "Vertical navigation sample",
    "Vertical navigation sample",
    "Vertical navigation sample",
    "Vertical navigation sample",
    "Vertical navigation sample",
    "Vertical navigation sample",
  ];
  insertHtmlIntoBeginContainer(createSidebarMenuContainer(), ".main");
  //   insertElementsIntoHtmlContainer('sidebar_container',createSidebarMenuElements(menuList))
}

const navRadioButtons = document.querySelectorAll('input[name="nav_radio"]');

const firstPageContent = [
  "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat quisquam, maiores autem eos reprehenderit obcaecati laboriosam qui cumque repudiandae magnam cum in aliquid tempore, cupiditate quidem. Odio dolorum odit quod aspernatur libero explicabo omnis at maxime eligendi eum, voluptates, enim culpa exercitationem iure voluptate possimus eos veritatis ratione maiores fugit consequatur facere delectus! Accusantium eligendi incidunt repellendus animi deleniti facilis ullam quam cupiditate harum at, ad adipisci delectus porro mollitia. Voluptatum ipsa ea maiores tempore asperiores unde totam ducimus deserunt delectus, non blanditiis iste repudiandae vitae ad porro? Hic odit voluptas officiis! Praesentium, dolore alias. Rerum alias quam architecto.</p>",
];

const secondPageContent = [
  '<h2 class="header">Level 2 Heading</h2>',
  '<p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, dolorum. Reiciendis, repellat nobis? Numquam vero quis perferendis laboriosam alias, unde doloremque exercitationem voluptatem sequi, veniam porro omnis animi veritatis distinctio.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, dolorum. Reiciendis, repellat nobis? Numquam vero quis perferendis laboriosam alias</p>',
  '<h3 class="header">Level 3 heading</h3>',
  "<ul><li>Basic List Sample</li><li>Basic List Sample</li><li>Basic List Sample</li><li>Basic List Sample</li><li>Basic List Sample</li><li>Basic List Sample</li><li>Basic List Sample</li></ul>",
];

const firdPageContent = [
  '<h2 class="header">Level 2 Heading</h2>',
  "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugiat quisquam, maiores autem eos reprehenderit obcaecati laboriosam qui cumque repudiandae magnam cum in aliquid tempore, cupiditate quidem. Odio dolorum odit quod aspernatur libero explicabo omnis at maxime eligendi eum, voluptates, enim culpa exercitationem iure voluptate possimus eos veritatis ratione maiores fugit consequatur facere delectus! Accusantium eligendi incidunt repellendus animi deleniti facilis ullam quam cupiditate harum at, ad adipisci delectus porro mollitia. Voluptatum ipsa ea maiores tempore asperiores unde totam ducimus deserunt delectus, non blanditiis iste repudiandae vitae ad porro? Hic odit voluptas officiis! Praesentium, dolore alias. Rerum alias quam architecto.</p>",
  '<h2 class="header">Level 2 Heading</h2>',
];

document.addEventListener("DOMContentLoaded", addContentOnPage(document.querySelector('input[name="nav_radio"]:checked').value));

navRadioButtons.forEach((radio) =>
  radio.addEventListener("change", function (event) {
    let pageNumber = event.target.value;
    addContentOnPage(pageNumber);
  })
);

function addContentOnPage(pageNumber) {
  deleteChildrenFromDOMelement(".content_container");
  deleteElementFromHtml(".sidebar_container");
  if (pageNumber == "1") contentCreator(firstPageContent);
  if (pageNumber == "2") {
    sidebarCreator();
    contentCreator(secondPageContent);
  }
  if (pageNumber == "3") contentCreator(firdPageContent);
}

function contentCreator(contentForPage) {
  insertElementsIntoHtmlContainer(
    "content_container",
    stringToNodeElement(contentForPage)
  );
}

function stringToNodeElement(htmlArrayWithStringElements) {
  return htmlArrayWithStringElements.map((element) => {
    const placeholder = document.createElement("div");
    placeholder.innerHTML = element.trim();
    return placeholder.firstElementChild;
  });
}

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

function deleteChildrenFromDOMelement(tagName) {
  const elements = Array.from(document.querySelector(tagName).children);
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
  return menuHeaderList.map((menuHeader, index) => {
    const div = document.createElement("div");
    div.className = "sidebar_btn_item";
    div.innerHTML = `<input id="radio-${index}" type="radio" name="sidebarMenu" value="${index}" checked />
    <label for="radio-${index}">${menuHeader}</label>`;
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
  insertElementsIntoHtmlContainer(
    "sidebar_container",
    createSidebarMenuElements(menuList)
  );
}

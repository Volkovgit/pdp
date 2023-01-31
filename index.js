var inputLabel = document.querySelector(".dropdown__input");

var listWithValues = [
  {
    label: "Bawcomville",
    id: 0,
  },
  {
    label: "Rushford",
    id: 1,
  },
  {
    label: "Bayview",
    id: 2,
  },
  {
    id: 3,
    label: "James Morse",
  },
  {
    id: 4,
    label: "Maribel Riggs",
  },
  {
    id: 5,
    label: "Alford Smith",
  },
  {
    id: 6,
    label: "Gretchen Sweet",
  },
  {
    id: 7,
    label: "Rocha Nielsen",
  },
  {
    id: 8,
    label: "Foley Glenn",
  },
  {
    id: 9,
    label: "Slater Sharpe",
  },
  {
    id: 10,
    label: "Todd Weeks",
  },
  {
    id: 11,
    label: "Eunice Cabrera",
  },
  {
    id: 12,
    label: "Hansen Castro",
  },
  {
    id: 13,
    label: "Mcleod Ball",
  },
  {
    id: 14,
    label: "Charity Dorsey",
  },
  {
    id: 15,
    label: "Newton Whitney",
  },
  {
    id: 16,
    label: "Opal Stout",
  },
  {
    id: 17,
    label: "Galloway Sparks",
  },
  {
    id: 18,
    label: "Elaine Carter",
  },
  {
    id: 19,
    label: "Gould Guerra",
  },
  {
    id: 20,
    label: "Freeman Taylor",
  },
  {
    id: 21,
    label: "May Duffy",
  },
  {
    id: 22,
    label: "Cora Gibson",
  },
  {
    id: 23,
    label: "Franco Price",
  },
  {
    id: 24,
    label: "Craft Tyler",
  },
  {
    id: 25,
    label: "Macias Michael",
  },
  {
    id: 26,
    label: "Monroe Finley",
  },
  {
    id: 27,
    label: "Rosanne Calhoun",
  },
  {
    id: 28,
    label: "Sanford Perez",
  },
  {
    id: 29,
    label: "Shaffer Herring",
  },
  {
    id: 30,
    label: "Murray Bender",
  },
  {
    id: 31,
    label: "Cecile Wolf",
  },
  {
    id: 32,
    label: "Virgie Spears",
  },
  {
    id: 33,
    label: "Wynn Navarro",
  },
  {
    id: 34,
    label: "Irene Guy",
  },
  {
    id: 35,
    label: "Alison Carroll",
  },
  {
    id: 36,
    label: "Caitlin Gallagher",
  },
  {
    id: 37,
    label: "Stevenson Bean",
  },
  {
    id: 38,
    label: "Burns Stevenson",
  },
  {
    id: 39,
    label: "Nieves Hayden",
  },
  {
    id: 40,
    label: "Benjamin Rodriquez",
  },
  {
    id: 41,
    label: "Stein House",
  },
  {
    id: 42,
    label: "Cunningham Doyle",
  },
  {
    id: 43,
    label: "Nikki Ellis",
  },
  {
    id: 44,
    label: "Peters Joseph",
  },
  {
    id: 45,
    label: "Effie Thomas",
  },
  {
    id: 46,
    label: "Meadows Hicks",
  },
];

// фильтруем список при ввода символов
function filterListByString(string,elements) {
  return elements.filter(function (elem) {
    if (string != null && string != "")
      return !elem.label.indexOf(string);
    return true;
  });
}

function hideYScroll(elementsCount,element) {
  if (elementsCount < 5) {
    element.style.overflow = "hidden";
  } else {
    if (element.style.overflow === "hidden") {
      element.style.overflow = "scroll";
      element.style.overflowX = "hidden";
    }
  }
}

function createButton(label) {
  var btnHtml =
    '<li><button onClick="onButtonclick(this);"' +
    'value="' +
    label +
    '">' +
    label +
    "</button></li>";
  return btnHtml;
}

function createDropDownElements(list) {
  var ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    ul.innerHTML += createButton(list[i].label);
  }
}

function onButtonclick(elem) {
  var newValue = elem.textContent ? elem.textContent : elem.value;
  inputLabel.value = newValue;
  inputLabel.setAttribute("currentValue", newValue);
}

//удаляем выпадающий список со страницы
function deleteListWithItemsFromHtml() {
  var listItem = document.querySelector("ul");
  var wrapper = document.querySelector(".dropdown");
  if (listItem) {
    if (listItem.remove) listItem.remove();
    else {
      wrapper.removeChild(listItem);
    }
  }
}
// считаем есть ли под блоком расстояние на выпадающий список
function checkBottomHeightForList() {
  var inputCoordinates = inputLabel.getBoundingClientRect();
  var windowInnerHeight = window.innerHeight;
  if (windowInnerHeight - inputCoordinates.bottom > 100) return true;
  return false;
}

function createDropDown(parent){
  var ul = document.createElement("ul");
  if (ul.classList) {
    ul.classList.add("input-select");
  } else {
    ul.className += ul.className + "input-select";
  }
  if (!checkBottomHeightForList()) {
    if (inputLabel.before) inputLabel.before(ul);
    else {
      parent.insertBefore(ul, inputLabel);
    }
  } else {
    if (inputLabel.after) inputLabel.after(ul);
    else {
      parent.appendChild(ul);
    }
  }
}

//вставляем выпадающий список на страницу
function insertInputSelect() {
  var wrapper = document.querySelector(".dropdown");
  var input = wrapper.querySelector('input');
  var filtredListByInput = filterListByString(input.value,listWithValues);
  if (wrapper.querySelector("ul") === null) {
    createDropDown(wrapper)
  }
  var list = wrapper.querySelector("ul");
  createDropDownElements(filtredListByInput);
  setDropDownPosition(list,input);
  hideYScroll(filtredListByInput.length,list);
}

function setDropDownPosition(dropDown,label) {
  var inputCoordinates = label.getBoundingClientRect();
  var left = inputCoordinates.x ? inputCoordinates.x : inputCoordinates.left;
  dropDown.style.left = left + "px";
  if (!checkBottomHeightForList()) {
    var listElementsCount = document.querySelectorAll("li").length;
    if (listElementsCount >= 5) dropDown.style.top = -100 + "px";
    else {
      dropDown.style.top = listElementsCount * -20 + "px";
    }
  }
}

inputLabel.onkeyup = inputLabel.oninput = insertInputSelect;
inputLabel.onpropertychange = function (event) {
  if (event.propertyName == "value") insertInputSelect();
};
inputLabel.oncut = function () {
  setTimeout(insertInputSelect, 0);
};
window.onscroll = function () {
  blurInput();
};
window.onresize = function () {
  blurInput();
};

function dropdownHandler() {
  inputLabel.focus();
  inputLabel.value = "";
  insertInputSelect();
}

function blurInput() {
  if (inputLabel.getAttribute("currentValue") != inputLabel.value)
    inputLabel.value = inputLabel.getAttribute("currentValue");
  deleteListWithItemsFromHtml();
  inputLabel.blur();
}


window.onclick = function (e) {
  var dropdown = document.querySelector(".dropdown");
  if (e.target === dropdown || e.target.offsetParent === dropdown)
    dropdownHandler(e);
  else {
    blurInput();
  }
};

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
function createDropDownElements(list,element) {
  element.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    element.innerHTML += createButton(list[i].label);
  }
}
function onButtonclick(elem) {
  var newValue = elem.textContent ? elem.textContent : elem.value;
  inputLabel.value = newValue;
  inputLabel.setAttribute("currentValue", newValue);
}
function deleteChildrenFromWrapper(wrapper,item) {
  if (item) {
    if (item.remove) item.remove();
    else {
      wrapper.removeChild(item);
    }
  }
}
// считаем есть ли под блоком расстояние на выпадающий список
function chechHeightUnderElement(coordinates,height) {
  if (window.innerHeight - coordinates.bottom > height) return true;
  return false;
}

function createDropDown(parent){
  var ul = document.createElement("ul");
  if (ul.classList) {
    ul.classList.add("input-select");
  } else {
    ul.className += ul.className + "input-select";
  }
  var inputCoordinates = parent.querySelector('input').getBoundingClientRect();
  if (!chechHeightUnderElement(inputCoordinates,100)) {
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

function setNullSearchResultDisclamer(dropDown,text){
  dropDown.innerHTML = "<p>"+text+"<p>"
}

//вставляем выпадающий список на страницу
function setDropDown(event) {
  var wrapper = document.querySelector(".dropdown");
  var input = wrapper.querySelector ? wrapper.querySelector('input') : document.querySelector('input');
  var filtredListByInput = filterListByString(input.value,listWithValues);
  var list = wrapper.querySelector ? wrapper.querySelector("ul") : document.querySelector('ul')
  var triangle =  wrapper.querySelector ? wrapper.querySelector(".triangle-up") : document.querySelector('.triangle-up')
  if (list === null) {
    createDropDown(wrapper)
  }
  // пришлось добавить эту строку, повторяющую 273 из за IE9 т.к. IE9 не смог нормально работать с переменными, хранящими адрес DOM элемента.
  // код будет работать, если закоментить следующую строку, но IE будет еще писать ошибку в консоли. Как я понимаю это из за того что DOM элементы "живые"
  list === null ? wrapper.querySelector ? list = wrapper.querySelector("ul") : list = document.querySelector('ul') : "";
  createDropDownElements(filtredListByInput,list);
  setDropDownPosition(list,input);
  hideYScroll(filtredListByInput.length,list);
  filtredListByInput.length === 0 ? setNullSearchResultDisclamer(list,"Ничего не найдено") : ""
  triangeReverseTo(wrapper,'down')
}

function setDropDownPosition(dropDown,label) {
  var inputCoordinates = label.getBoundingClientRect();
  if (!chechHeightUnderElement(inputCoordinates,100)) {
    var listElementsCount = document.querySelectorAll("li").length;
    if (listElementsCount >= 5) dropDown.style.top = -100 + "px";
    else if(listElementsCount === 0)dropDown.style.top = -20 + "px";
    else {
      dropDown.style.top = listElementsCount * -20 + "px";
    }
  }
}

function triangeReverseTo(dropDown,way){
  if(dropDown.classList){
    if(way === 'down'){
      dropDown.classList.remove('triangle-up');
      dropDown.classList.add('triangle-down')
    }
    if(way === 'up'){
      dropDown.classList.add('triangle-up');
      dropDown.classList.remove('triangle-down')
    }
  }
}


inputLabel.onkeyup = inputLabel.oninput = setDropDown;
inputLabel.onpropertychange = function (event) {
  if (event.propertyName == "value") setDropDown();
};
inputLabel.oncut = function () {
  setTimeout(setDropDown, 0);
};
window.onscroll = function () {
  blurInput();
};
window.onresize = function () {
  blurInput();
};

function dropdownHandler(e) {
  inputLabel.focus();
  inputLabel.value = "";
  setDropDown(e);
  
}

function blurInput() {
  if (inputLabel.getAttribute("currentValue") != inputLabel.value)
    inputLabel.value = inputLabel.getAttribute("currentValue");
  var wrapper = document.querySelector(".dropdown");
  var item = wrapper.querySelector("ul");
  deleteChildrenFromWrapper(wrapper,item);
  triangeReverseTo(wrapper,'up')
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

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
    id: 4,
    label: "James Morse",
  },
  {
    id: 9,
    label: "Maribel Riggs",
  },
  {
    id: 8,
    label: "Alford Smith",
  },
  {
    id: 9,
    label: "Gretchen Sweet",
  },
  {
    id: 10,
    label: "Rocha Nielsen",
  },
  {
    id: 6,
    label: "Foley Glenn",
  },
  {
    id: 2,
    label: "Slater Sharpe",
  },
  {
    id: 3,
    label: "Todd Weeks",
  },
  {
    id: 0,
    label: "Eunice Cabrera",
  },
  {
    id: 9,
    label: "Hansen Castro",
  },
  {
    id: 0,
    label: "Mcleod Ball",
  },
  {
    id: 1,
    label: "Charity Dorsey",
  },
  {
    id: 6,
    label: "Newton Whitney",
  },
  {
    id: 6,
    label: "Opal Stout",
  },
  {
    id: 6,
    label: "Galloway Sparks",
  },
  {
    id: 2,
    label: "Elaine Carter",
  },
  {
    id: 1,
    label: "Gould Guerra",
  },
  {
    id: 10,
    label: "Freeman Taylor",
  },
  {
    id: 3,
    label: "May Duffy",
  },
  {
    id: 10,
    label: "Cora Gibson",
  },
  {
    id: 10,
    label: "Franco Price",
  },
  {
    id: 10,
    label: "Craft Tyler",
  },
  {
    id: 1,
    label: "Macias Michael",
  },
  {
    id: 3,
    label: "Monroe Finley",
  },
  {
    id: 9,
    label: "Rosanne Calhoun",
  },
  {
    id: 8,
    label: "Sanford Perez",
  },
  {
    id: 7,
    label: "Shaffer Herring",
  },
  {
    id: 5,
    label: "Murray Bender",
  },
  {
    id: 2,
    label: "Cecile Wolf",
  },
  {
    id: 4,
    label: "Virgie Spears",
  },
  {
    id: 1,
    label: "Wynn Navarro",
  },
  {
    id: 5,
    label: "Irene Guy",
  },
  {
    id: 3,
    label: "Alison Carroll",
  },
  {
    id: 4,
    label: "Caitlin Gallagher",
  },
  {
    id: 1,
    label: "Stevenson Bean",
  },
  {
    id: 2,
    label: "Burns Stevenson",
  },
  {
    id: 4,
    label: "Nieves Hayden",
  },
  {
    id: 10,
    label: "Benjamin Rodriquez",
  },
  {
    id: 9,
    label: "Stein House",
  },
  {
    id: 0,
    label: "Cunningham Doyle",
  },
  {
    id: 1,
    label: "Nikki Ellis",
  },
  {
    id: 1,
    label: "Peters Joseph",
  },
  {
    id: 5,
    label: "Effie Thomas",
  },
  {
    id: 4,
    label: "Meadows Hicks",
  },
];


// фильтруем список при ввода символов
function filterList() {
    var filterValue = inputLabel.value
    var filtredList = listWithValues.filter(function(elem){
        if(filterValue != null && filterValue != "")return !elem.label.indexOf(filterValue)
        return true
      })
    hideYScroll(filtredList.length)
    createListElements(filtredList, filterValue);
}

function hideYScroll(elementsCount){
    var list = document.querySelector('ul');
    if(elementsCount < 5){
        list.style.overflow = 'hidden';
    }
    else{
        if(list.style.overflow == 'hidden'){
            list.style.overflow = 'scroll'
            list.style.overflowX = 'hidden'
        };
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

function createListElements(list, filter) {
  var ul = document.querySelector("ul");
  ul.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    if (filter != null && filter != "") {
      if (!list[i].label.indexOf(filter)) {
        ul.innerHTML += createButton(list[i].label);
      }
    } else {
      ul.innerHTML += createButton(list[i].label);
    }
  }
}

function onButtonclick(elem) {
  var newValue = elem.textContent ? elem.textContent : elem.value;
  inputLabel.value = newValue;
  inputLabel.setAttribute("currentValue", newValue);
}
//проверяем точно ли пользователь нажал на кнопку
//выглядит так себе проверкой, я хотел реализовать точную проверку что пользователь нажал на кнопку выпадающего списка
//для того, чтобы не выполнять onClick со всего подряд
function checkBlurClickElement(element) {
  element.nodeName == "BUTTON" ? element.onclick() : "";
}
//удаляем выпадающий список со страницы
function deleteListWithItemsFromHtml(){
    var listItem = document.querySelector("ul");
    var wrapper = document.querySelector(".dropdown")
    if(listItem.remove)listItem.remove()
    else{wrapper.removeChild(listItem)}
}
// считаем есть ли под блоком расстояние на выпадающий список
function checkBottomHeightForList(){
    var inputCoordinates = inputLabel.getBoundingClientRect()
    var windowInnerHeight = window.innerHeight
    if(windowInnerHeight-inputCoordinates.bottom>100)return true
    return false
}

function checkOverflow(){
    
}
//вставляем выпадающий список на страницу
function insertInputSelect(){
    var ul = document.createElement('ul')
    var inputCoordinates = inputLabel.getBoundingClientRect()
    var left = inputCoordinates.x ? inputCoordinates.x : inputCoordinates.left
    var wrapper = document.querySelector('.dropdown')
    ul.style.left = left+'px';
    if(ul.classList){
        ul.classList.add('input-select')
    }
    else{
        ul.className += ul.className+"input-select"
    }
    if(!checkBottomHeightForList()){
        ul.style.top = -100+'px'
        if(inputLabel.before)inputLabel.before(ul)
        else{
            wrapper.insertBefore(ul,inputLabel);
        }
    }
    else{
        if(inputLabel.after)inputLabel.after(ul)
        else{
            wrapper.appendChild(ul);
        }
    }
    createListElements(listWithValues, null);
    
}

// обработка различных событий у input
inputLabel.onfocus = function () {
    insertInputSelect()
    inputLabel.value = "";
    
};

inputLabel.onblur = function (event) {
  if (event.relatedTarget) {
    checkBlurClickElement(event.relatedTarget);
  } else {
    checkBlurClickElement(document.activeElement);
  }
  if(inputLabel.getAttribute('currentValue') != inputLabel.value)inputLabel.value = inputLabel.getAttribute('currentValue')
  deleteListWithItemsFromHtml()
};
inputLabel.onkeyup = inputLabel.oninput = filterList;
inputLabel.onpropertychange = function (event) {
  if (event.propertyName == "value") filterList();
};
inputLabel.oncut = function () {
  setTimeout(filterList, 0);
};
window.onscroll = function(){
    inputLabel.blur()
}
window.onresize = function(){
    inputLabel.blur()
}

var inputLabel = document.querySelector(".input-label");

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

function filterList() {
  createListPicker(listWithValues, inputLabel.value);
}

inputLabel.onkeyup = inputLabel.oninput = filterList;

inputLabel.onpropertychange = function (event) {
  if (event.propertyName == "value") filterList();
};

inputLabel.oncut = function () {
  setTimeout(filterList, 0);
};

function createButton(value, label) {
  var btnHtml =
    '<li><button onClick="onButtonclick(this);"' +
    'value="' +
    value +
    '">' +
    label +
    "</button></li>";
  return btnHtml;
}

function createListPicker(list, filter) {
  var ul = document.querySelector("ul");
  
  ul.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    if (filter != null && filter != "") {
      if (!list[i].label.indexOf(filter)) {
        ul.innerHTML += createButton(list[i].id, list[i].label);
      }
    } else {
      ul.innerHTML += createButton(list[i].id, list[i].label);
    }
  }
}

function onButtonclick(elem) {
  inputLabel.value = elem.textContent;
  inputLabel.setAttribute("currentValue", elem.value);
}

function checkBlurClickElement(element) {
  element.nodeName == "BUTTON" ? element.onclick() : "";
}

function hideElementBySetNoneClass(){
    var listItem = document.querySelector("ul");
    // listItem.remove()
}


// считаем есть ли под блоком расстояние на выпадающий список
function checkSize(){
    var inputCoordinates = inputLabel.getBoundingClientRect()
    var windowInnerHeight = window.innerHeight
    if(windowInnerHeight-inputCoordinates.bottom>100)return true
    return false
}
//вставляем выпадающий список на страницу
function insertInputSelect(){
    var ul = document.createElement('ul')
    var inputCoordinates = inputLabel.getBoundingClientRect()
    
    ul.style.left = inputCoordinates.x+'px';
    if(ul.classList){
        ul.classList.add('input-select')
    }
    else{
        ul.className += ul.className+"input-select"
    }
    if(!checkSize()){
        console.log(inputCoordinates);
        // ul.style.y = inputCoordinates.y-300+'px';
        // ul.style.y = inputCoordinates.y-300+'px';
        
        inputLabel.before(ul)
        ul.style.top = inputCoordinates.y+'px'
        console.log();
    }
    else{
        inputLabel.after(ul)
        
    }
    // console.log(ul.getBoundingClientRect());
    
}


inputLabel.onfocus = function () {
    insertInputSelect()
    
    // inputLabel.value = "";
    // createListPicker(listWithValues, null);
};

inputLabel.onblur = function (event) {
  if (event.relatedTarget) {
    checkBlurClickElement(event.relatedTarget);
  } else {
    checkBlurClickElement(document.activeElement);
  }
  var listItem = document.querySelector("ul");
  listItem.innerHTML = "";
  hideElementBySetNoneClass()
};


// window.onscroll = function(){
//     inputLabel.blur()
// }
window.onresize = function(){
    inputLabel.blur()
}




// console.log(checkSize());


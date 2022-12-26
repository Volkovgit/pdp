// const navRadioButtons = document.querySelectorAll('input[name="nav_radio"]');
// const frameContent = document.querySelector(".content");

// navRadioButtons.forEach((radio) =>
//   radio.addEventListener("change", function (event) {
//     let pageNumber = event.target.value;
//     frameContent.contentWindow.postMessage(pageNumber, "*");
//   })
// );

import {setCheckBoxesEvent} from './components/header/navigation/slideMenuButton/__input/__input.js'

setCheckBoxesEvent()

// document.addEventListener("DOMContentLoaded", function(){
//     frameContent.contentWindow.postMessage(1, "*");
// });
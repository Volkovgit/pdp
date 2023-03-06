import "./index.scss";
import "./components/types";
import { Application, LocalStorage,Card } from "./components/components";
const storage = new LocalStorage();
customElements.define("card-element", Card);


document.addEventListener("DOMContentLoaded", () => {
  // if(storage.hasItemInLocalStorage('card')){
  //   const cards: CardData[] = JSON.parse(storage.getItemFromLocalStorage('card'));
  //   cards.forEach((card: CardData) => {
  //     document.querySelector("main").innerHTML+= `<card-element props='${JSON.stringify(card)}' likeFunction='${testPropsFunction}'></card-element>`;
  //   });
  // }
  // else{
  //   storage.setItemToLocalStorage('card',cardList);
  // }
  setTimeout(() => {
    new Application(document.querySelector('main'))
    // document.querySelector("main").innerHTML = '';
    // cardList.forEach((card: CardData) => {
    //   console.log(card);
    //   document.querySelector("main").innerHTML+= `<card-element props='${JSON.stringify(card)}'></card-element>`;
    // });
  },1000)
  
});

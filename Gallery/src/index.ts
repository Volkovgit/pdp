import "./index.scss";
import "./components/types";
import { LocalStorage } from "./components/components";
const storage = new LocalStorage();

function testPropsFunction(e){
  console.log(e); 
}

const cardList: CardData[] = [
  {
    imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    author: {
      authorName: "Halo Lab",
      authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
      authorType: "pro",
    },
    statistic: {
      likes: 1,
      views: 33,
    },
    likeHandler:console.log
  },
  {
    imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    author: {
      authorName: "Halo Lab",
      authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
      authorType: "ne pro",
    },
    statistic: {
      likes: 1,
      views: 33,
    },
    likeHandler:console.log
  },
];



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
    document.querySelector("main").innerHTML = '';
    cardList.forEach((card: CardData) => {
      console.log(card);
      document.querySelector("main").innerHTML+= `<card-element props='${JSON.stringify(card)}'></card-element>`;
    });
  },1000)
  
});

import './index.scss'
import './components/types'
import {Card,LocalStorage} from './components/components'

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
  },
];


console.log(window.localStorage);
cardList.forEach((card: CardData) => {
  const cardObj = new Card(card);
  document.querySelector("main").appendChild(cardObj);
});

console.log(LocalStorage);
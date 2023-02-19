import { Card } from "../components";

export default class Application {
  cardList: CardData[] = [
    {
      id: 1,
      imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
      author: {
        authorName: "Halo Lab",
        authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
        authorType: "pro",
        likeHandler: "testPropsFunction",
      },
      statistic: {
        likes: 1,
        views: 33,
      },
    },
    {
      id: 2,
      imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
      author: {
        authorName: "Halo Lab",
        authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
        authorType: "ne pro",
        likeHandler: "testPropsFunction",
      },
      statistic: {
        likes: 1,
        views: 33,
      },
    },
  ];
  constructor() {
    this.render();
  }

 
  render() {
    const element = document.querySelector("main");
    this.cardList.forEach((card: CardData) => {
      new Card(this, element, card);
      //   document.querySelector("main").innerHTML += `<card-element props='${JSON.stringify(card)}'></card-element>`;
    });
    console.log(element.querySelectorAll(".card"));
  }
}

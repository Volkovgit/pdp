import { Card } from "../components";

export default class Application {
  cardList: CardData[] = [
    {
      id: 1,
      imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
      author: {
        authorName: "Halo Lab",
        authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
        authorType: "pro"
      },
      statistic: {
        likes: {
          active:true,
          count:1
        },
        views: {
          active:false,
          count:33
        },
      },
    },
    {
      id: 2,
      imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
      author: {
        authorName: "Halo Lab",
        authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
        authorType: "ne pro"
      },
      statistic: {
        likes: {
          active:true,
          count:1
        },
        views: {
          active:false,
          count:33
        },
      },
    },
    {
      id: 3,
      imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
      author: {
        authorName: "Halo Lab",
        authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
        authorType: "ne pro"
      },
      statistic: {
        likes: {
          active:true,
          count:1
        },
        views: {
          active:true,
          count:33
        },
      },
    },
    {
      id: 4,
      imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
      author: {
        authorName: "Halo Lab",
        authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
        authorType: "ne pro"
      },
      statistic: {
        likes: {
          active:true,
          count:1
        },
        views: {
          active:true,
          count:33
        },
      },
    },
  ];
  parentElement:HTMLElement;
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.render();
  }

  findCardById(id){
    return this.cardList.filter(card=>card.id===id)[0];
  }

  findCardInHtml(card){
    return Array.from(this.parentElement.childNodes).filter(child=> child === card)[0];
  }

  likesHandler(card){
    const cardById = this.findCardById(card.props.id)
    if(cardById.statistic.likes.active){
      cardById.statistic.likes.count --;
    }
    else{
      cardById.statistic.likes.count ++;
    }
    cardById.statistic.likes.active = !cardById.statistic.likes.active
    card.updateCard(cardById)
  }

  viewsHandler(card){
    const cardById = this.findCardById(card.props.id)
    if(!cardById.statistic.views.active){
      cardById.statistic.views.count ++;
      cardById.statistic.views.active = true;
    }
    card.updateCard(cardById)
  }
 
  render() {
    this.cardList.forEach((card: CardData) => {
      const cardElement = new Card(this, card);
      this.parentElement.appendChild(cardElement)
    });
  }
}

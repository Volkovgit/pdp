import { LocalStorage } from "../components";

export default class Storage {
  private state: CardData[];
  private localStorage: LocalStorage;

  constructor() {
    this.localStorage = new LocalStorage();
    this.setStateOnInit();
  }

  private setStateOnInit() {
    const cardList: CardData[] = [
      {
        id: 1,
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
        author: {
          authorName: "Halo Lab",
          authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
          authorType: "pro",
        },
        statistic: {
          likes: {
            active: false,
            count: 185,
          },
          views: {
            active: false,
            count: 33,
          },
        },
      },
      {
        id: 2,
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
        author: {
          authorName: "Halo Lab",
          authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
          authorType: "ne pro",
        },
        statistic: {
          likes: {
            active: true,
            count: 1,
          },
          views: {
            active: false,
            count: 33,
          },
        },
      },
      {
        id: 3,
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
        author: {
          authorName: "Halo Lab",
          authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
          authorType: "ne pro",
        },
        statistic: {
          likes: {
            active: true,
            count: 1,
          },
          views: {
            active: true,
            count: 33,
          },
        },
      },
      {
        id: 4,
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
        author: {
          authorName: "Halo Lab",
          authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
          authorType: "ne pro",
        },
        statistic: {
          likes: {
            active: true,
            count: 1,
          },
          views: {
            active: true,
            count: 33,
          },
        },
      },
    ];
    if (this.localStorage.hasItemInLocalStorage("card")) {
      const cards: CardData[] = JSON.parse(this.localStorage.getItemFromLocalStorage("card"));
      this.state = cards;
    } else {
      // тут должен уходить запрос, потом мы значения кладем в localStorage, пока что фиксированный массив туда кладу
      this.localStorage.setItemToLocalStorage("card", cardList);
      this.state = cardList;
    }
  }

  public getState(): CardData[] {
    return this.state;
  }

  findCard(cardForFind) {
    return this.state.filter((card) => card.id === cardForFind.props.id)[0];
  }

  updateLikes(likedCard) {
    const filtredCard = this.findCard(likedCard);
    if (filtredCard.statistic.likes.active) {
      filtredCard.statistic.likes.count--;
    } else {
      filtredCard.statistic.likes.count++;
    }
    filtredCard.statistic.likes.active = !filtredCard.statistic.likes.active;

    return filtredCard;
  }

  updateViews(viewedCard) {
    const filtredCard = this.findCard(viewedCard);
    if (!filtredCard.statistic.views.active) {
      filtredCard.statistic.views.count++;
      filtredCard.statistic.views.active = true;
    }
    return filtredCard
  }
}

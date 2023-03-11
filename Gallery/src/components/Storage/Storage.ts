import { LocalStorage, Server } from "../components";

export default class Storage {
  private state: CardData[] | null;
  private localStorage: LocalStorage;
  private server: Server;

  constructor(server) {
    this.state = null;
    this.localStorage = new LocalStorage();
    this.server = server;
    this.setStateOnInit();
  }

  private setStateOnInit() {
    if (this.localStorage.hasItemInLocalStorage("card")) {
      const cards: CardData[] = JSON.parse(this.localStorage.getItemFromLocalStorage("card"));
      this.state = cards;
    } else {
      // this.getCardsFromServer()
    }
  }

  private updateLocalStorage() {
    this.localStorage.setItemToLocalStorage("card", this.state);
  }

  private async getCardsFromServer() {
    const response = await this.server.requestToServer("/cards", "GET");
    this.localStorage.setItemToLocalStorage("card", response);
    this.state = response;
  }

  public async getState(): Promise<CardData[]> {
    return new Promise((resolve, reject) => {
      if (this.state !== null) resolve(this.state);
      this.getCardsFromServer().then((data) => resolve(this.state));
    });
  }

  findCard(cardForFind) {
    return this.state.filter((card) => card.id === cardForFind.props.id)[0];
  }

  promiseWrapper(callback:Function): Promise<CardData |CardData[]> {
    return new Promise((resolve, reject) => {
      callback().then(result=>resolve(result))
    });
  }

  async updateLikes(likedCard) {
    console.log(likedCard.props.statistic);
    let filtredCard = this.findCard(likedCard);
    console.log(filtredCard.statistic);
    let result;
    if (filtredCard.statistic.likes.active) {
      result = await this.server.requestToServer(`/card-update?id=${filtredCard.id}&updateType=downLikes`, "POST")
    } else {
      result = await this.server.requestToServer(`/card-update?id=${filtredCard.id}&updateType=upLikes`, "POST")
    }
    const cardActive = filtredCard.statistic.likes.active
    result.statistic.likes.active = cardActive;
    filtredCard = result
    this.updateLocalStorage();
    return await result;
  }

  updateViews(viewedCard) {
    const filtredCard = this.findCard(viewedCard);
    if (!filtredCard.statistic.views.active) {
      filtredCard.statistic.views.count++;
      filtredCard.statistic.views.active = true;
    }
    this.updateLocalStorage();
    return filtredCard;
  }
}

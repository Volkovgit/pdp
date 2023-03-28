import { LocalStorage, type Server } from '../Components';

export default class Storage {
  private state: CardData[] | null = null;
  private readonly localStorage: LocalStorage;
  private readonly server: Server;

  constructor(server: Server, localStorage: LocalStorage) {
    this.localStorage = localStorage;
    this.server = server;
    this.setStateOnInit();
  }

  private setStateOnInit() {
    if (this.localStorage.hasItemInLocalStorage('card')) {
      this.state = JSON.parse(this.localStorage.getItemFromLocalStorage('card'));
    } else {
      this.getCardsFromServer();
    }
  }

  private updateState(updatedCard: CardData) {
    this.state = this.state.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    });
    this.localStorage.setItemToLocalStorage('card', this.state);
  }

  private async getCardsFromServer() {
    const response = await this.server.requestToServer('/cards', 'GET');
    this.localStorage.setItemToLocalStorage('card', response);
    this.state = response;
  }

  public getState(): Promise<CardData[]> {
    return new Promise((resolve) => {
      if (this.state !== null) resolve(this.state);
      this.getCardsFromServer().then(() => {
        resolve(this.state);
      });
    });
  }

  async updateLikes(likedCard) {
    let result;
    if (likedCard.props.statistic.likes.active) {
      result = await this.server.requestToServer(
        `/card-update?id=${likedCard.props.id}&updateType=downLikes`,
        'POST'
      );
    } else {
      result = await this.server.requestToServer(
        `/card-update?id=${likedCard.props.id}&updateType=upLikes`,
        'POST'
      );
    }
    result.statistic.likes.active = !likedCard.props.statistic.likes.active;
    this.updateState(result);
    return result;
  }

  async updateViews(viewedCard) {
    if (!viewedCard.props.statistic.views.active) {
      viewedCard = await this.server.requestToServer(
        `/card-update?id=${viewedCard.props.id}&updateType=upViews`,
        'POST'
      );
      viewedCard.statistic.views.active = true;
    } else {
      return viewedCard.props;
    }
    this.updateState(viewedCard);
    return viewedCard;
  }
}

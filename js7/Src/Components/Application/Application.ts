import { Card } from '../Components';

export default class Application {
  state: Storage;
  parentElement: HTMLElement;
  constructor(parentElement, state) {
    this.state = state;
    this.parentElement = parentElement;
    this.render();
  }

  likesHandler(card) {
    this.state.updateLikes(card).then((newCardProps) => card.updateCard(newCardProps));
  }

  viewsHandler(card) {
    this.state.updateViews(card).then((newCardProps) => card.updateCard(newCardProps));
  }

  render() {
    this.state.getState().then((cards) => {
      cards.forEach((card: CardData) => {
        const cardElement = new Card(this, card);
        this.parentElement.appendChild(cardElement);
      });
    });
  }
}

import { Card } from "../components";

export default class Application {
  state: Storage;
  parentElement: HTMLElement;
  constructor(parentElement, state) {
    this.state = state;
    this.parentElement = parentElement;
    this.render();
  }

  likesHandler(card) {
    this.state.updateLikes(card).then(newCardProps=>card.updateCard(newCardProps))
  }

  viewsHandler(card) {
    card.updateCard(this.state.updateViews(card));
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

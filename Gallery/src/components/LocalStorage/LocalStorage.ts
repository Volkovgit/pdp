export default class LocalStorage {
  localstorage: Storage;
  constructor() {
    this.localstorage = window.localStorage;
  }

  setCardsToLocalStorage(cards: CardData[]) {
    this.localstorage.setItem("cards", JSON.stringify(cards));
  }

  getCardsFromLocalStorage(): CardData[] | null {
    return JSON.parse(this.localstorage.getItem("cards"));
  }

  hasCardInLocalStorage(): boolean {
    return this.localstorage.getItem("cards") !== null;
  }
}
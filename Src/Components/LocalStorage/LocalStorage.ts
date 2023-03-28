export default class LocalStorage {
  localstorage: Storage;
  constructor() {
    this.localstorage = window.localStorage;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItemToLocalStorage(itemName: string, itemValue: any) {
    this.localstorage.setItem(itemName, JSON.stringify(itemValue));
  }

  getItemFromLocalStorage(itemName: string): string {
    return this.localstorage.getItem(itemName);
  }

  hasItemInLocalStorage(itemName: string): boolean {
    return this.localstorage.getItem(itemName) !== null;
  }
}

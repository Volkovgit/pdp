import { LocalStorage } from "../components/components";

describe('LocalStorage',() => {
    let storage
    beforeEach(() => {
        storage = new LocalStorage();
        window.localStorage.clear();
    })
    
    test('Set item to localStorage',() => {
        const key = 'card'
        const value = 'aaaBBBccc'
        storage.setItemToLocalStorage(key,JSON.stringify(value))
        expect(window.localStorage.getItem(key) === value)
    })
    test('Get existing item from localStorage',() => {
        const key = 'card'
        const value = 'aaaBBBccc'
        window.localStorage.setItem(key,JSON.stringify(value))
        expect(storage.getItemFromLocalStorage(key) === value)
    })

    test('Get nonexistent from localStorage',() => {
        window.localStorage.clear();
        expect(storage.getItemFromLocalStorage('123') === null)
        expect(storage.getItemFromLocalStorage('lorem') === null)
    })

    test('Has item in localStorage',() => {
        const itemInLocalStorage = 'card'
        const itemNotInLocalStorage = 'card2'
        const valueForKeyInStorage = {id:1}
        window.localStorage.setItem(itemInLocalStorage,JSON.stringify(valueForKeyInStorage))
        expect(storage.hasItemInLocalStorage(itemInLocalStorage) === true);
        expect(storage.hasItemInLocalStorage(itemNotInLocalStorage) === false);
    })
})
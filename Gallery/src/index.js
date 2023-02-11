import './index.scss';
import './components/components.ts';
const cardList = [
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
        author: {
            authorName: "Halo Lab",
            authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
            authorType: "pro",
        },
        statistic: {
            likes: 1,
            views: 33,
        },
    },
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
        author: {
            authorName: "Halo Lab",
            authorLogoUrl: "https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg",
            authorType: "ne pro",
        },
        statistic: {
            likes: 1,
            views: 33,
        },
    },
];
console.log(window.localStorage);
cardList.forEach((card) => {
    const cardObj = new Card(card);
    document.querySelector("main").appendChild(cardObj);
});
console.log(JSON.stringify({ '𠮷': ['\uDF06\uD834'] }));
class LocalStorage {
    constructor() {
        this.localstorage = window.localStorage;
    }
    setCardsToLocalStorage(cards) {
        this.localstorage.setItem('cards', JSON.stringify(cards));
    }
    getCardsFromLocalStorage() {
        return JSON.parse(this.localstorage.getItem('cards'));
    }
    hasCardInLocalStorage() {
        return this.localstorage.getItem('cards') !== null;
    }
}

const cardList = [
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    },
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    },
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    },
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    },
    {
        imageUrl: "https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large",
    },
];
class Card extends HTMLElement {
    constructor(data) {
        super();
        this.data = data;
    }
    connectedCallback() {
        setTimeout(() => {
            this.innerHTML += `<div class='card'>
      <div class="card-photo">
          <img
            class="card-photo__img"
            src="${this.data.imageUrl}"
            alt=""
          />
        </div>
      </div>`;
        });
    }
}
customElements.define("card-element", Card);
cardList.forEach((card) => {
    const cardObj = new Card(card);
    document.querySelector('footer').before(cardObj);
});

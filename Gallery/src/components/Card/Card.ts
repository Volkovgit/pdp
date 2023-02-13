export default class Card extends HTMLElement {
  props: CardData;

  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      this.render();
    });
  }

  setProps(){
    console.log(JSON.parse(this.getAttribute('props')));
    this.props = JSON.parse(this.getAttribute('props'))
  }

  render() {
    this.setProps();
    this.innerHTML = `<div class="card">
      <div class="card-photo"><img class="card-photo__img" src="${this.props.imageUrl}" /></div>
      <div class="card-description">
        <div class="author">
          <div class="author-image"><img class="author-image__item" src="${this.props.author.authorLogoUrl}" /></div>
          <div class="author-name"><span class="author-name__text">${this.props.author.authorName}</span></div>
          <div class="author-type"><span class="author-type__text">${this.props.author.authorType}</span></div>
        </div>
        <div class="activity">
          <div class="activity-likes">
            <div  class="activity-likes-heart">
              <svg class="activity-likes-heart__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
                <path
                  fill="#9ca3af"
                  d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
            c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
            l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
                ></path>
              </svg>
            </div>
            <div class="activity-likes__count">${this.props.statistic.likes}</div>
          </div>
          <div class="activity-views">
            <div class="activity-views-eye">
              <svg
                class="activity-views-eye__svg"
                viewBox="0 0 12 12"
                enable-background="new 0 0 12 12"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <circle cx="6" cy="6" fill="#9ca3af" r="1.5"></circle>
                <path d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z" fill="#9ca3af"></path>
              </svg>
            </div>
            <div class="activity-views__count">${this.props.statistic.views}</div>
          </div>
        </div>
      </div>`;
    this.likeHandler();
  }

  static get observedAttributes() {
    return ["props"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  likeHandler() {
    const element = this.querySelector(".activity-likes");
    const svgPath = element.querySelector("path");
    svgPath.addEventListener("click", () => {
      if (element.attributes.getNamedItem("active") === null) {
        element.setAttribute("active", "true");
        svgPath.setAttribute("fill", "#eb2940");
        console.log(typeof this.props.likeHandler);
      } else {
        element.removeAttribute("active");
        svgPath.setAttribute("fill", "#9ca3af");
      }
    });
  }
}
customElements.define("card-element", Card);

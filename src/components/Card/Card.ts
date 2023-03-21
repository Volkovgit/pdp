import { type Application } from '../components';

export default class Card extends HTMLElement {
  props: CardData;
  parent: Application;

  constructor(parent, props) {
    super();
    this.parent = parent;
    this.props = props;
    this.render();
  }

  connectedCallback() {
    setTimeout(() => {
      this.likeHandler();
      this.imageClickHandler();
    });
  }

  render() {
    this.innerHTML = `<div class="card" id="">
      <div class="card-photo">
      <div class="card-photo-buttons hide">
        <a class="card-photo-buttons-download" href="${
          this.props.imageUrl
        }" download="proposed_file_name"><svg class="card-photo-buttons-download__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5 13.5L9.5 13.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke="#323232" stroke-width="2"/>
            </svg></a>
          <div class="card-photo-buttons-likes"><svg class="card-photo-buttons-likes__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
            <path
            ${this.props.statistic.likes.active ? 'fill="#eb2940"' : 'fill="#9ca3af"'}
              
              d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
        c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
        l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
            ></path>
          </svg></div>
        </div>
      <img class="card-photo__img" src="${this.props.imageUrl}" />
      </div>
      <div class="card-description">
        <div class="author">
          <div class="author-image" ><img class="author-image__item" src="${
            this.props.author.authorLogoUrl
          }" /></div>
          <div class="author-name"><span class="author-name__text">${
            this.props.author.authorName
          }</span></div>
          <div class="author-type"><span class="author-type__text">${
            this.props.author.authorType
          }</span></div>
        </div>
        <div class="activity">
          <div class="activity-likes">
            <div  class="activity-likes-heart">
              <svg class="activity-likes-heart__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
                <path
                  ${this.props.statistic.likes.active ? 'fill="#eb2940"' : 'fill="#9ca3af"'}
                  
                  d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
            c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
            l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
                ></path>
              </svg>
            </div>
            <div class="activity-likes__count">${this.props.statistic.likes.count}</div>
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
            <div class="activity-views__count">${this.props.statistic.views.count}</div>
          </div>
        </div>
      </div>`;
  }

  likeHandler() {
    [
      this.querySelector('.activity-likes-heart'),
      this.querySelector('.card-photo-buttons-likes'),
    ].forEach((likeButton) => {
      likeButton.addEventListener('click', () => {
        this.parent.likesHandler(this);
      });
    });
  }

  viewsHandler() {
    this.parent.viewsHandler(this);
  }

  updateCard(props) {
    this.props = props;
    this.updateLikes(this.props.statistic.likes.count);
    this.updateViews(this.props.statistic.views.count);
  }

  updateLikes(count) {
    const likeCounter = this.querySelector('.activity-likes__count');
    likeCounter.innerHTML = `${count}`;
    [
      this.querySelector('.activity-likes-heart__svg > path'),
      this.querySelector('.card-photo-buttons-likes__svg > path'),
    ].forEach((svg) => {
      svg.setAttribute('fill', `${this.props.statistic.likes.active ? '#eb2940' : '#9ca3af'}`);
    });
  }

  updateViews(count) {
    const viewsCounter = this.querySelector('.activity-views__count');
    viewsCounter.innerHTML = `${count}`;
  }

  imageClickHandler() {
    const buttons = this.querySelector('.card-photo-buttons');
    const container = this.querySelector('.card-photo');

    container.addEventListener('click', (e) => {
      const checkTarget =
        Array.from(buttons.querySelectorAll('*')).filter((element) => element === e.target)
          .length !== 0;
      if (container.hasAttribute('active') && !checkTarget) {
        container.removeAttribute('active');
        container.classList.remove('shadow-down');
        buttons.classList.add('hide');
      } else {
        container.setAttribute('active', '');
        container.classList.add('shadow-down');
        buttons.classList.remove('hide');
        this.viewsHandler();
      }
    });
  }
}

customElements.define('card-element', Card);

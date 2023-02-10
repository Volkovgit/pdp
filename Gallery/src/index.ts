import './index.scss'
type cardStatistic = {
  likes: number;
  views: number;
};

type CardData = {
  imageUrl: string;
  author: {
    authorName: string;
    authorLogoUrl: string;
    authorType: string;
  };
  statistic: cardStatistic;
};

const cardList: CardData[] = [
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

class Card extends HTMLElement {
  data: CardData;

  constructor(data: CardData) {
    super();
    this.data = data;
  }

  connectedCallback() {
    setTimeout(() => {
      const card = this.elementWithChild(this.createElementWithParameters('div',[{'class':['card']}]),[this.createPhotoBlock(),this.createDescriptionBlock()]);
      this.appendChild(card)
    });
  }

  createElementWithParameters(elementType: string, parameters?: { [key: string]: string[] }[]): HTMLElement {
    const element: HTMLElement = document.createElement(elementType);
    if (parameters) {
      parameters.forEach((attribute:{ [key: string]: string[] }) => {
        const attributeName = Object.keys(attribute)[0];
        const attributeValue = attribute[attributeName].join(' ');
        if(element.hasAttribute(attributeName)) element.attributes.getNamedItem(attributeName).value += ` ${attributeValue}`;
        else element.setAttribute(attributeName, attributeValue);
      });
    }
    return element;
  }

  elementWithChild(element:HTMLElement,children:HTMLElement[]){
    children.forEach((child:HTMLElement) => {
      element.appendChild(child);
    })
    return element
  }

  


  createPhotoBlock(): HTMLElement {
    const pictureWrapper = this.createElementWithParameters('div',[{'class':['card-photo']}])
    pictureWrapper.appendChild(this.createElementWithParameters('img',[{'class':['card-photo__img']},{'src':[this.data.imageUrl]}]))
    return pictureWrapper
  }

  createDescriptionBlock(): HTMLElement {
    const author = this.data.author;
    let descriptionBlock : HTMLElement = this.createElementWithParameters('div',[{'class':['card-description']}])
    const activityBlock = this.createActivityBlock();
    const authorInfoBlock : HTMLElement = this.createAuthorDescriptionBlock(author.authorName,author.authorType,author.authorLogoUrl);

    descriptionBlock = this.elementWithChild(descriptionBlock,[authorInfoBlock,activityBlock])
    return descriptionBlock
  }

  createActivityBlock(): HTMLElement {
    const activity: cardStatistic = this.data.statistic;
    let activityBlock : HTMLElement =  this.createElementWithParameters('div',[{'class':['activity']}])
    const likesBlock : HTMLElement = this.createLikesActivityBlock(activity.likes);
    const viewsBlock : HTMLElement = this.createViewsActivityBlock(activity.views)
    activityBlock = this.elementWithChild(activityBlock,[likesBlock,viewsBlock])
    return activityBlock;

  }

  createLikesActivityBlock(likes: number): HTMLElement {
    let likesBlock = this.createElementWithParameters('div',[{'class':['activity-likes']}]);
    const likesHeart = this.createElementWithParameters('div',[{'class':['activity-likes-heart']}]);
    const likesCount = this.createElementWithParameters('div',[{'class':['activity-likes__count']}]);
    likesHeart.innerHTML += `<svg  class="activity-likes-heart__svg"xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" version="1">
    <path  fill="#9ca3af" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
        c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
        l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"/>
</svg>`
    likesHeart.addEventListener('click',(e) => {
      this.likeHandler(likesCount,likesHeart.querySelector('path'))
    })
    likesCount.textContent = String(likes);
    likesBlock = this.elementWithChild(likesBlock,[likesHeart,likesCount])
    return likesBlock;
  }

  likeHandler(element:HTMLElement,svg:SVGElement){
    if(element.attributes.getNamedItem('active') === null){
      this.data.statistic.likes ++
      element.setAttribute('active','true')
      element.textContent = String(this.data.statistic.likes)
      svg.setAttribute('fill','#eb2940')
    }
    else{
      this.data.statistic.likes --
      element.removeAttribute('active')
      element.textContent = String(this.data.statistic.likes)
      svg.setAttribute('fill','#9ca3af')
    }
    
  }

  createViewsActivityBlock(views: number): HTMLElement {
    let viewsBlock = this.createElementWithParameters('div',[{'class':['activity-views']}])
    const viewsEye = this.createElementWithParameters('div',[{'class':['activity-views-eye']}])
    viewsEye.innerHTML += `<svg  class="activity-views-eye__svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12"  version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="6" cy="6" fill="#9ca3af" r="1.5"/><path d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z" fill="#9ca3af"/></svg>`;
    const viewsCount = this.createElementWithParameters('div',[{'class':['activity-views__count']}])
    viewsCount.textContent = String(views)

    viewsBlock = this.elementWithChild(viewsBlock,[viewsEye,viewsCount])
    return viewsBlock
  }

  createAuthorDescriptionBlock(authorName:string,autorType:string,authorLogoUrl:string): HTMLElement {
    let authorBlock : HTMLElement = this.createElementWithParameters('div',[{'class':['author']}])

    const authorImageBlock : HTMLElement = this.createElementWithParameters('div',[{'class':['author-image']}])
    const authorImage : HTMLElement = this.createElementWithParameters('img',[{'class':['author-image__item']},{'src':[authorLogoUrl]}])
    authorImageBlock.appendChild(authorImage);

    const authorNameBlock : HTMLElement = this.createElementWithParameters('div',[{'class':['author-name']}])
    const authorNameSpan : HTMLElement = this.createElementWithParameters('span',[{'class':['author-name__text']}]) 
    authorNameSpan.textContent += authorName;
    authorNameBlock.appendChild(authorNameSpan);

    const authorTypeBlock : HTMLElement = this.createElementWithParameters('div',[{'class':['author-type']}])
    const authorTypeSpan : HTMLElement = this.createElementWithParameters('span',[{'class':['author-type__text']}]) 
    authorTypeSpan.textContent += autorType;
    authorTypeBlock.appendChild(authorTypeSpan);


    authorBlock = this.elementWithChild(authorBlock,[authorImageBlock,authorNameBlock,authorTypeBlock])
    return authorBlock
  }
}
customElements.define("card-element", Card);

cardList.forEach((card: CardData) => {
  const cardObj = new Card(card);
  document.querySelector("main").appendChild(cardObj);
});

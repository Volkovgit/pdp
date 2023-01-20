export class author extends HTMLElement {
  shadowRoot
  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      const textContentFromPage = this.innerHTML;
      const imageUrl = this.getAttribute('src')
      this.innerHTML = "";
      
      const wrapper = this.createWrapperElement(textContentFromPage,imageUrl);
      const style = this.createNewElementWithArguments("link",[{"rel":"stylesheet"},{'href':'./components/author/author.css'}]);

      

      this.shadowRoot = this.attachShadow({ mode: "open" });
      this.shadowRoot = this.appendChildsToElement(this.shadowRoot,[style,wrapper]);

      this.hoverImage()
    });
  }

  appendChildsToElement(element,childs){
    childs.forEach(child=>{
      element.appendChild(child)
    })
    return element
  }

  createNewElementWithArguments(elementType,attributes=null){
    const element = document.createElement(elementType);
    if(attributes!=null){
      attributes.forEach((attr)=>{
        element.setAttribute(Object.keys(attr)[0],attr[Object.keys(attr)]);
      })
    }
    return element
  }

  hoverImage(){
    const image = this.shadowRoot.querySelector('.author-photo');
    image.addEventListener('mouseover',() => {
      document.querySelector('main').classList.add('black')
    })

    image.addEventListener('mouseout',() => {
      document.querySelector('main').classList.remove('black')
    })

  }


  createWrapperElement(textContentFromPage,imageUrl) {
    let wrapper = this.createNewElementWithArguments("div",[{"class":"wrapper"}]);
    const description = this.createDescriptionElement(textContentFromPage);
    const image = this.createImageElement(imageUrl);
    wrapper = this.appendChildsToElement(wrapper,[image,description]);

    return wrapper;
  }

  createImageElement(src) {
    const imageElementContainer = this.createNewElementWithArguments("div",[{"class":"photo-wrapper"}]);
    const image = this.createNewElementWithArguments("img",[{src},{"class":"author-photo"}]);
    imageElementContainer.appendChild(image);
    return imageElementContainer;
  }

  createDescriptionElement(text) {
    const descriptionElementContainer = this.createNewElementWithArguments("div",[{"class":"author-description"}]);
    // const descriptionElementContainer = document.createElement("div");
    const paragraphWithText = document.createElement("p");
    paragraphWithText.innerHTML = text;
    descriptionElementContainer.appendChild(paragraphWithText);
    return descriptionElementContainer;
  }
}


export class author extends HTMLElement {
  shadowRoot = this.attachShadow({ mode: "open" });
  constructor() {
    super();
  }

  connectedCallback() {
    setTimeout(() => {
      const textContentFromPage = this.innerHTML;
      const imageUrl = this.getAttribute('src')
      this.innerHTML = "";
      
      
      this.setStyles();
      this.setContent(textContentFromPage,imageUrl);
      this.setShadowByMouseOverOnImage()
    });
  }

  setStyles(){
    const style = this.createNewElementWithArguments("link",[{"rel":"stylesheet"},{'href':'./components/author/author.css'},{'type':"text/css"}]);
    this.shadowRoot.appendChild(style)
  }

  setContent(textContentFromPage,imageUrl){
    const wrapper = this.createWrapperElement(textContentFromPage,imageUrl);
    this.shadowRoot.appendChild(wrapper)
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

  setShadowByMouseOverOnImage(){
    const image = this.shadowRoot.querySelector('.card-photo');
    const main = document.querySelector('main')
    // Я попытался в зависимости от ширины определять разные эвенты клик/наведение , но 
    // это не работает при изменении ширины после загрузки, оставил только наведение
    // const onImageEvent = window.innerWidth > 1024 ? "mousedown" : "mouseover"
    // const outMouseEvent = window.innerWidth > 1024 ? "mouseup" : "mouseout"
    image.addEventListener("mouseover",() => {
      main.classList.add('blackShadow')
      main.classList.remove('whiteShadow')
    })

    image.addEventListener("mouseout",() => {
      main.classList.remove('blackShadow')
      main.classList.add('whiteShadow')
    })


  }


  createWrapperElement(textContentFromPage,imageUrl) {
    let wrapper = this.createNewElementWithArguments("div",[{"class":"card"}]);
    const description = this.createDescriptionElement(textContentFromPage);
    const image = this.createImageElement(imageUrl);
    wrapper = this.appendChildsToElement(wrapper,[image,description]);

    return wrapper;
  }
  
  createImageElement(src) {
    const imageElementContainer = this.createNewElementWithArguments("div",[{"class":"card-photo"}]);
    const image = this.createNewElementWithArguments("img",[{src},{"class":"card-photo__img"}]);
    imageElementContainer.appendChild(image);
    return imageElementContainer;
  }

  createDescriptionElement(text) {
    const descriptionElementContainer = this.createNewElementWithArguments("div",[{"class":"card-description"}]);
    const paragraphWithText = this.createNewElementWithArguments("p",[{"class":"card-description__text"}]);
    paragraphWithText.innerHTML = text;
    descriptionElementContainer.appendChild(paragraphWithText);
    return descriptionElementContainer;
  }
}


export class table extends HTMLElement {
  constructor() {
    super();
  }

  

  connectedCallback() {
    setTimeout(()=>{
        const tableContent = JSON.parse(this.getAttribute('content')).tableContent
        
        this.appendChild(this.tableContentToHtml(tableContent))
    })
  }

  appendChildsToElement(element,childs){
    childs.forEach(child=>{
      element.appendChild(child)
    })
    return element
  }

  createNewElementWithParameters(elementType,attributes=null,textContent=null){
    const element = document.createElement(elementType);
    if(attributes!=null){
      attributes.forEach((attr)=>{
        element.setAttribute(Object.keys(attr)[0],attr[Object.keys(attr)]);
      })
    }
    textContent ? element.textContent = textContent : "";
    return element
  }

  tableContentToHtml(tableContent){
    const ul = document.createElement('ul')
    tableContent.forEach(element => {
        const chapter = this.createNewElementWithParameters('p',null,element.chapter);
        const description = this.createNewElementWithParameters('p',null,element.description);
        const pageNumber = this.createNewElementWithParameters('p',null,element.page);

        const liElement = this.appendChildsToElement(document.createElement('li'),[chapter,description,pageNumber])
      
        ul.appendChild(liElement)
        
    });
    return ul
  }
}

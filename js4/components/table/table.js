export class table extends HTMLElement {
  shadowRoot =this.attachShadow({ mode: "open" });
  constructor() {
    super();
  }

  

  connectedCallback() {
    setTimeout(()=>{
        
        this.setStyles()
        this.createTable()
    })
  }


  setStyles(){
    const style = this.createNewElementWithParameters("link",[{"rel":"stylesheet"},{'href':'./components/table/table.css'},{'type':"text/css"}]);
    this.shadowRoot.appendChild(style)
  }

  createTable(){
    const tableContent = this.tableContentToHtml(JSON.parse(this.getAttribute('content')).tableContent)
    const tableWrapper = this.appendChildsToElement(this.createNewElementWithParameters('div',[{'class':"table"}]),[tableContent])
    this.shadowRoot.appendChild(tableWrapper)
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

  getChapterType(chapter){
    if(chapter && chapter!='empty') return typeof chapter
    if(chapter =='empty') return 'empty'
    if(chapter == null) return 'null';
  }

  getChapterText(chapterText){
    if(chapterText!='empty')return chapterText
    else return ''
  }

  tableContentToHtml(tableContent){
    const ul = this.createNewElementWithParameters('ul',[{"class":"table-list"}])
    tableContent.forEach(element => {
      this.getChapterType(element.chapter);
        const chapter = this.createNewElementWithParameters('p',[{"class":`table-list-row__chapter ${this.getChapterType(element.chapter)}`}],this.getChapterText(element.chapter));
        const description = this.createNewElementWithParameters('p',[{"class":"table-list-row__description"}],element.description);
        const pageNumber = this.createNewElementWithParameters('p',[{"class":"table-list-row__pageNumber"}],element.page);


        const liElement = this.appendChildsToElement(this.createNewElementWithParameters('li',[{"class":"table-list-row mr-t2"}]),[chapter,description,pageNumber])
      
        ul.appendChild(liElement)
        
    });
    return ul
  }
}

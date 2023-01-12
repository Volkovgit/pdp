export class table extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tableContent = JSON.parse(this.getAttribute('content')).tableContent
    this.tableContentToHtml(tableContent);

  }

  tableContentToHtml(tableContent){
    tableContent.forEach(element => {
        console.log(element);
    });
  }
}

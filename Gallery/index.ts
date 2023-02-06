document.querySelectorAll(".activity-likes-heart__svg").forEach((heartButton) => {
    heartButton.addEventListener('click',(e) => {
        const path = heartButton.children[0];
        path.attributes[0].value === "#9ca3af" ? heartButton.children[0].setAttribute('fill','#eb2940') : heartButton.children[0].setAttribute('fill','#9ca3af')
    })
});




class Card extends HTMLElement{
    constructor(){
        super();
        
    }

    connectedCallback(){
        console.log('Prost');
    }
}
customElements.define("my-element", Card);
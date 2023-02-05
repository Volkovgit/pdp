// меняем цвет лайка на карточке
const svgHeart = document.querySelector(".activity-likes-heart__svg");
svgHeart.addEventListener('click',(e) => {
    const path = svgHeart.children[0];
    path.attributes[0].value === "#9ca3af" ? svgHeart.children[0].setAttribute('fill','#eb2940') : svgHeart.children[0].setAttribute('fill','#9ca3af')
})
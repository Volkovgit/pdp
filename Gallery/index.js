var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.querySelectorAll(".activity-likes-heart__svg").forEach(function (heartButton) {
    heartButton.addEventListener('click', function (e) {
        var path = heartButton.children[0];
        path.attributes[0].value === "#9ca3af" ? heartButton.children[0].setAttribute('fill', '#eb2940') : heartButton.children[0].setAttribute('fill', '#9ca3af');
    });
});
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super.call(this) || this;
    }
    Card.prototype.connectedCallback = function () {
        console.log('Prost');
    };
    return Card;
}(HTMLElement));
customElements.define("my-element", Card);

export function setCheckBoxesEvent() {
  const checkBox = document.querySelector(".slideMenuButton__input");
  // const menuCheckBox = document.querySelector("#sidebar_container");
  checkBox.addEventListener("change", function (event) {
    if (checkBox.checked) {
      // menuCheckBox.classList.add("sidebar_container_visible");
      // menuCheckBox.classList.remove("sidebar_container_hide");
      console.log("Push");
    } else {
      console.log("Down");
      // menuCheckBox.classList.add("sidebar_container_hide");
      // menuCheckBox.classList.remove("sidebar_container_visible");
    }
  });
}

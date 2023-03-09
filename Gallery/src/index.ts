import "./index.scss";
import "./components/types";
import { Application, LocalStorage,Card,Storage } from "./components/components";
const storage = new Storage();


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    new Application(document.querySelector('main'),storage);
  },1000)
});

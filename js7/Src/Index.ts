import './Index.scss';
import './Components/Types';
import { Application, LocalStorage, Server, Storage } from './Components/Components';
const server = new Server();
const localStorage = new LocalStorage();
const storage = new Storage(server, localStorage);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new Application(document.querySelector('main'), storage);
  }, 1000);
});

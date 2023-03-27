import './index.scss';
import './components/Types';
import { Application, Server, Storage } from './components/Components';
const server = new Server();
const storage = new Storage(server);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new Application(document.querySelector('main'), storage);
  }, 1000);
});

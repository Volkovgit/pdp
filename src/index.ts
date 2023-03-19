import './index.scss';
import './components/types';
import { Application, Server, Storage } from './components/components';
const server = new Server();
const storage = new Storage(server);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new Application(document.querySelector('main'), storage);
  }, 1000);
})

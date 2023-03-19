import { Storage, Server, Card, Application } from '../components';
jest.mock('node-fetch');
import fetch from 'node-fetch';
const {Response} = jest.requireActual('node-fetch');


describe('LocalStorage', () => {
//   let storage;
//   let server;
//   let application;
//   let mainElementInHtml;
//   let cardElement;

//   beforeEach(() => {
//     mainElementInHtml = document.createElement('main');
//     server = new Server();
//     storage = new Storage(server);
//     application = new Application(document.querySelector('main'), storage);
//     cardElement = new Card(application, {});
//   });

  test('Should return element of Card class', () => {
    console.log("true");
  });
});

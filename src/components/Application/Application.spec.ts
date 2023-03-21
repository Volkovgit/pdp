import { Storage, Server, Card, Application } from '../components';
import fetch, { Response } from 'node-fetch';
jest.mock('node-fetch');
const testData = [
  {
    id: '6409fe4c52f9e5877a641d17',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Alma',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 936,
      },
      views: {
        active: true,
        count: 490,
      },
    },
  },
  {
    id: '6409fe4cdfc0a18089cfd25c',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Ronda',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 769,
      },
      views: {
        active: true,
        count: 126,
      },
    },
  },
  {
    id: '6409fe4c6a1ea99d3e32a309',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Chris',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 587,
      },
      views: {
        active: true,
        count: 404,
      },
    },
  },
];

describe('LocalStorage', () => {
  let storage;
  let server;
  let application;
  let mainElementInHtml;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(testData),
      }),
    ) as jest.Mock;
    server = new Server();
    storage = new Storage(server);
  });

  test('Create and insert cards element in html', async () => {
    const htmlStringWithThreeCards = ` <card-element><div class="card" id="">
    <div class="card-photo">        
    <div class="card-photo-buttons hide">
      <a class="card-photo-buttons-download" href="https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large" download="proposed_file_name"><svg class="card-photo-buttons-download__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M14.5 13.5L9.5 13.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke="#323232" stroke-width="2"></path>
          </svg></a>
        <div class="card-photo-buttons-likes"><svg class="card-photo-buttons-likes__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
          <path fill="#eb2940" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
      c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
      l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
        </svg></div>
      </div>
    <img class="card-photo__img" src="https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large">
    </div>
    <div class="card-description">
      <div class="author">
        <div class="author-image"><img class="author-image__item" src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg"></div>
        <div class="author-name"><span class="author-name__text">Alma</span></div>
        <div class="author-type"><span class="author-type__text">PRO</span></div>
      </div>
      <div class="activity">
        <div class="activity-likes">
          <div class="activity-likes-heart">
            <svg class="activity-likes-heart__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
              <path fill="#eb2940" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
          c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
          l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
            </svg>
          </div>
          <div class="activity-likes__count">936</div>
        </div>
        <div class="activity-views">
          <div class="activity-views-eye">
            <svg class="activity-views-eye__svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="6" cy="6" fill="#9ca3af" r="1.5"></circle>
              <path d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z" fill="#9ca3af"></path>     
            </svg>
          </div>
          <div class="activity-views__count">490</div>
        </div>
      </div>
    </div></div></card-element><card-element><div class="card" id="">
    <div class="card-photo">
    <div class="card-photo-buttons hide">
      <a class="card-photo-buttons-download" href="https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large" download="proposed_file_name"><svg class="card-photo-buttons-download__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M14.5 13.5L9.5 13.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke="#323232" stroke-width="2"></path>
          </svg></a>
        <div class="card-photo-buttons-likes"><svg class="card-photo-buttons-likes__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
          <path fill="#eb2940" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
      c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
      l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
        </svg></div>
      </div>
    <img class="card-photo__img" src="https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large">
    </div>
    <div class="card-description">
      <div class="author">
        <div class="author-image"><img class="author-image__item" src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg"></div>
        <div class="author-name"><span class="author-name__text">Ronda</span></div>
        <div class="author-type"><span class="author-type__text">PRO</span></div>
      </div>
      <div class="activity">
        <div class="activity-likes">
          <div class="activity-likes-heart">
            <svg class="activity-likes-heart__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
              <path fill="#eb2940" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
          c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
          l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
            </svg>
          </div>
          <div class="activity-likes__count">769</div>
        </div>
        <div class="activity-views">
          <div class="activity-views-eye">
            <svg class="activity-views-eye__svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="6" cy="6" fill="#9ca3af" r="1.5"></circle>
              <path d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z" fill="#9ca3af"></path>     
            </svg>
          </div>
          <div class="activity-views__count">126</div>
        </div>
      </div>
    </div></div></card-element><card-element><div class="card" id="">
    <div class="card-photo">
    <div class="card-photo-buttons hide">
      <a class="card-photo-buttons-download" href="https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large" download="proposed_file_name"><svg class="card-photo-buttons-download__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M14.5 13.5L9.5 13.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke="#323232" stroke-width="2"></path>
          </svg></a>
        <div class="card-photo-buttons-likes"><svg class="card-photo-buttons-likes__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
          <path fill="#eb2940" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
      c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
      l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
        </svg></div>
      </div>
    <img class="card-photo__img" src="https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large">
    </div>
    <div class="card-description">
      <div class="author">
        <div class="author-image"><img class="author-image__item" src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg"></div>
        <div class="author-name"><span class="author-name__text">Chris</span></div>
        <div class="author-type"><span class="author-type__text">PRO</span></div>
      </div>
      <div class="activity">
        <div class="activity-likes">
          <div class="activity-likes-heart">
            <svg class="activity-likes-heart__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
              <path fill="#eb2940" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
          c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
          l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"></path>
            </svg>
          </div>
          <div class="activity-likes__count">587</div>
        </div>
        <div class="activity-views">
          <div class="activity-views-eye">
            <svg class="activity-views-eye__svg" viewBox="0 0 12 12" enable-background="new 0 0 12 12" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="6" cy="6" fill="#9ca3af" r="1.5"></circle>
              <path d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z" fill="#9ca3af"></path>     
            </svg>
          </div>
          <div class="activity-views__count">404</div>
        </div>
      </div>
    </div></div></card-element>`;
    const newNode = document.createElement('main');
    application = await new Application(newNode, storage);
    expect(application.parentElement.innerHTML === htmlStringWithThreeCards);
  });
});

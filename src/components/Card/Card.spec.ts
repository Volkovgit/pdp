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
  {
    id: '6409fe4ccafb5697e7b7b64a',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Winnie',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: false,
        count: 249,
      },
      views: {
        active: true,
        count: 118,
      },
    },
  },
  {
    id: '6409fe4cfcec9ff13df00acf',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Jan',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: false,
        count: 495,
      },
      views: {
        active: false,
        count: 131,
      },
    },
  },
  {
    id: '6409fe4cfba7958fc10aed4d',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Raquel',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 452,
      },
      views: {
        active: false,
        count: 201,
      },
    },
  },
  {
    id: '6409fe4cced2e6744d8e6915',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Morton',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: false,
        count: 633,
      },
      views: {
        active: false,
        count: 445,
      },
    },
  },
  {
    id: '6409fe4c097661fbe03e8ce1',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Shelby',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 196,
      },
      views: {
        active: false,
        count: 549,
      },
    },
  },
  {
    id: '6409fe4cc68fc1791a1f229b',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Madden',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 370,
      },
      views: {
        active: false,
        count: 377,
      },
    },
  },
  {
    id: '6409fe4c1b08267293fce5c5',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Burt',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 267,
      },
      views: {
        active: false,
        count: 832,
      },
    },
  },
  {
    id: '6409fe4ca2384e0f562263b6',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Chrystal',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: false,
        count: 500,
      },
      views: {
        active: true,
        count: 633,
      },
    },
  },
  {
    id: '6409fe4c5f3fcb0f3aaf836d',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Lancaster',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 500,
      },
      views: {
        active: true,
        count: 612,
      },
    },
  },
  {
    id: '6409fe4c32af027464d966d7',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Blanchard',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: false,
        count: 315,
      },
      views: {
        active: false,
        count: 687,
      },
    },
  },
  {
    id: '6409fe4c000e7e91a7328d49',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Genevieve',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 738,
      },
      views: {
        active: false,
        count: 564,
      },
    },
  },
  {
    id: '6409fe4c821ee0afa59416fd',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Shepard',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: true,
        count: 143,
      },
      views: {
        active: true,
        count: 414,
      },
    },
  },
  {
    id: '6409fe4c2bf5bef3c030a525',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Janet',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO',
    },
    statistic: {
      likes: {
        active: false,
        count: 138,
      },
      views: {
        active: false,
        count: 795,
      },
    },
  },
];

describe('LocalStorage', () => {
  let storage;
  let server;
  let application;
  let mainElementInHtml;
  let cardElement;

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(testData),
      }),
    ) as jest.Mock;
    mainElementInHtml = document.createElement('main');
    server = new Server();
    storage = new Storage(server);
    application = new Application(mainElementInHtml, storage);
  });

  test('Should create element of Card class', () => {
    const cardElementProps = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
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
    };
    cardElement = new Card(application, cardElementProps);
    expect(cardElement instanceof Card);
  });

  test('Has HTML code with params from class element', () => {
    const cardElementProps = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
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
    };
    const cardHtml = `<div class="card" id="">
    <div class="card-photo">
    <div class="card-photo-buttons hide">
      <a class="card-photo-buttons-download" href="${
        cardElementProps.imageUrl
      }" download="proposed_file_name"><svg class="card-photo-buttons-download__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 11L12 16" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.5 13.5L9.5 13.5" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 9.312C3 4.93757 3.93757 4 8.312 4H9.92963C10.5983 4 11.2228 4.3342 11.5937 4.8906L12.4063 6.1094C12.7772 6.6658 13.4017 7 14.0704 7C15.9647 7 17.8145 7 19.1258 7C20.1807 7 21.0128 7.82095 21.0029 8.8758C21.0013 9.05376 21 9.20638 21 9.312V14.688C21 19.0624 20.0624 20 15.688 20H8.312C3.93757 20 3 19.0624 3 14.688V9.312Z" stroke="#323232" stroke-width="2"/>
          </svg></a>
        <div class="card-photo-buttons-likes"><svg class="card-photo-buttons-likes__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
          <path
          ${cardElementProps.statistic.likes.active ? 'fill="#eb2940"' : 'fill="#9ca3af"'}
            
            d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
      c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
      l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
          ></path>
        </svg></div>
      </div>
    <img class="card-photo__img" src="${cardElementProps.imageUrl}" />
    </div>
    <div class="card-description">
      <div class="author">
        <div class="author-image" ><img class="author-image__item" src="${
          cardElementProps.author.authorLogoUrl
        }" /></div>
        <div class="author-name"><span class="author-name__text">${
          cardElementProps.author.authorName
        }</span></div>
        <div class="author-type"><span class="author-type__text">${
          cardElementProps.author.authorType
        }</span></div>
      </div>
      <div class="activity">
        <div class="activity-likes">
          <div  class="activity-likes-heart">
            <svg class="activity-likes-heart__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" version="1">
              <path
                ${cardElementProps.statistic.likes.active ? 'fill="#eb2940"' : 'fill="#9ca3af"'}
                
                d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
          c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
          l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
              ></path>
            </svg>
          </div>
          <div class="activity-likes__count">${cardElementProps.statistic.likes.count}</div>
        </div>
        <div class="activity-views">
          <div class="activity-views-eye">
            <svg
              class="activity-views-eye__svg"
              viewBox="0 0 12 12"
              enable-background="new 0 0 12 12"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <circle cx="6" cy="6" fill="#9ca3af" r="1.5"></circle>
              <path d="M6,2C4,2,2,3,0,6c2,3,4,4,6,4s4-1,6-4C10,3,8,2,6,2z M6,8.5C4.621582,8.5,3.5,7.3789063,3.5,6   S4.621582,3.5,6,3.5S8.5,4.6210938,8.5,6S7.378418,8.5,6,8.5z" fill="#9ca3af"></path>
            </svg>
          </div>
          <div class="activity-views__count">${cardElementProps.statistic.views.count}</div>
        </div>
      </div>
    </div>`;
    cardElement = new Card(application, cardElementProps);
    expect(cardElement.innerHTML === cardHtml);
  });

  test('Should update likes', async () => {
    const cardElementPropsBeforeUpLikes = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
      author: {
        authorName: 'Alma',
        authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
        authorType: 'PRO',
      },
      statistic: {
        likes: {
          active: false,
          count: 936,
        },
        views: {
          active: true,
          count: 490,
        },
      },
    };
    const cardElementPropsAfterUpLikes = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
      author: {
        authorName: 'Alma',
        authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
        authorType: 'PRO',
      },
      statistic: {
        likes: {
          active: true,
          count: 937,
        },
        views: {
          active: true,
          count: 490,
        },
      },
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(cardElementPropsAfterUpLikes),
      }),
    ) as jest.Mock;
    cardElement = new Card(application, cardElementPropsBeforeUpLikes);
    cardElement.parent.likesHandler(cardElement);
    await expect(cardElement.props === cardElementPropsAfterUpLikes);
  });

  test('Should update views', async () => {
    const cardElementPropsBeforeUpLikes = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
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
          active: false,
          count: 490,
        },
      },
    };
    const cardElementPropsAfterUpLikes = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
      author: {
        authorName: 'Alma',
        authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
        authorType: 'PRO',
      },
      statistic: {
        likes: {
          active: true,
          count: 937,
        },
        views: {
          active: true,
          count: 491,
        },
      },
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(cardElementPropsAfterUpLikes),
      }),
    ) as jest.Mock;
    cardElement = new Card(application, cardElementPropsBeforeUpLikes);
    cardElement.parent.viewsHandler(cardElement);
    await expect(cardElement.props === cardElementPropsAfterUpLikes);
  });

  test('Update card props', () => {
    const cardPropsBefore = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
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
          active: false,
          count: 490,
        },
      },
    };
    const cardPropsAfter = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
      author: {
        authorName: 'Alma',
        authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
        authorType: 'PRO',
      },
      statistic: {
        likes: {
          active: true,
          count: 937,
        },
        views: {
          active: true,
          count: 491,
        },
      },
    };

    cardElement = new Card(application, cardPropsBefore);
    cardElement.updateCard(cardPropsAfter);
    expect(cardElement.props === cardPropsAfter);
  });
});

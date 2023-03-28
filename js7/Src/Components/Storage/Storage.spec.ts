import { Storage, Server, LocalStorage } from '../Components';
jest.mock('node-fetch');

const testData = [
  {
    id: '6409fe4c52f9e5877a641d17',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Alma',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 936
      },
      views: {
        active: true,
        count: 490
      }
    }
  },
  {
    id: '6409fe4cdfc0a18089cfd25c',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Ronda',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 769
      },
      views: {
        active: true,
        count: 126
      }
    }
  },
  {
    id: '6409fe4c6a1ea99d3e32a309',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Chris',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 587
      },
      views: {
        active: true,
        count: 404
      }
    }
  },
  {
    id: '6409fe4ccafb5697e7b7b64a',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Winnie',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: false,
        count: 249
      },
      views: {
        active: true,
        count: 118
      }
    }
  },
  {
    id: '6409fe4cfcec9ff13df00acf',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Jan',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: false,
        count: 495
      },
      views: {
        active: false,
        count: 131
      }
    }
  },
  {
    id: '6409fe4cfba7958fc10aed4d',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Raquel',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 452
      },
      views: {
        active: false,
        count: 201
      }
    }
  },
  {
    id: '6409fe4cced2e6744d8e6915',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Morton',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: false,
        count: 633
      },
      views: {
        active: false,
        count: 445
      }
    }
  },
  {
    id: '6409fe4c097661fbe03e8ce1',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Shelby',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 196
      },
      views: {
        active: false,
        count: 549
      }
    }
  },
  {
    id: '6409fe4cc68fc1791a1f229b',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Madden',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 370
      },
      views: {
        active: false,
        count: 377
      }
    }
  },
  {
    id: '6409fe4c1b08267293fce5c5',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Burt',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 267
      },
      views: {
        active: false,
        count: 832
      }
    }
  },
  {
    id: '6409fe4ca2384e0f562263b6',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Chrystal',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: false,
        count: 500
      },
      views: {
        active: true,
        count: 633
      }
    }
  },
  {
    id: '6409fe4c5f3fcb0f3aaf836d',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Lancaster',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 500
      },
      views: {
        active: true,
        count: 612
      }
    }
  },
  {
    id: '6409fe4c32af027464d966d7',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Blanchard',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: false,
        count: 315
      },
      views: {
        active: false,
        count: 687
      }
    }
  },
  {
    id: '6409fe4c000e7e91a7328d49',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Genevieve',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 738
      },
      views: {
        active: false,
        count: 564
      }
    }
  },
  {
    id: '6409fe4c821ee0afa59416fd',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Shepard',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: true,
        count: 143
      },
      views: {
        active: true,
        count: 414
      }
    }
  },
  {
    id: '6409fe4c2bf5bef3c030a525',
    imageUrl: 'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
    author: {
      authorName: 'Janet',
      authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
      authorType: 'PRO'
    },
    statistic: {
      likes: {
        active: false,
        count: 138
      },
      views: {
        active: false,
        count: 795
      }
    }
  }
];

describe('Storage', () => {
  let storage;
  let server;
  let localStorage;
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(testData)
      })
    ) as jest.Mock;
    server = new Server();
    localStorage = new LocalStorage();
    storage = new Storage(server, localStorage);
  });

  test('Should return array with cardList', () => {
    storage.getState().then((state) => expect(state === testData));
  });

  test('Cards array was set in localStorage', async () => {
    const res = await storage.getState();
    expect(storage.localStorage.getItemFromLocalStorage('card') === res);
  });

  test('Up likes count on card data', () => {
    const cardBeforeUpLikes = {
      props: {
        id: '6409fe4c52f9e5877a641d17',
        imageUrl:
          'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
        author: {
          authorName: 'Alma',
          authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
          authorType: 'PRO'
        },
        statistic: {
          likes: {
            active: false,
            count: 936
          },
          views: {
            active: true,
            count: 490
          }
        }
      }
    };

    const cardAfterUpLikes = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
      author: {
        authorName: 'Alma',
        authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
        authorType: 'PRO'
      },
      statistic: {
        likes: {
          active: true,
          count: 937
        },
        views: {
          active: true,
          count: 490
        }
      }
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(cardAfterUpLikes)
      })
    ) as jest.Mock;

    storage.updateLikes(cardBeforeUpLikes).then((card) => expect(card === cardAfterUpLikes));
  });

  test('Down likes count on card data', () => {
    const cardBeforeUpLikes = {
      props: {
        id: '6409fe4c52f9e5877a641d17',
        imageUrl:
          'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
        author: {
          authorName: 'Alma',
          authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
          authorType: 'PRO'
        },
        statistic: {
          likes: {
            active: true,
            count: 936
          },
          views: {
            active: true,
            count: 490
          }
        }
      }
    };

    const cardAfterUpLikes = {
      id: '6409fe4c52f9e5877a641d17',
      imageUrl:
        'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
      author: {
        authorName: 'Alma',
        authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
        authorType: 'PRO'
      },
      statistic: {
        likes: {
          active: false,
          count: 935
        },
        views: {
          active: true,
          count: 490
        }
      }
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(cardAfterUpLikes)
      })
    ) as jest.Mock;

    storage.updateLikes(cardBeforeUpLikes).then((card) => expect(card === cardAfterUpLikes));
  });

  describe('Check views', () => {
    test('Up views on unviewed card', () => {
      const cardBeforeUpViews = {
        props: {
          id: '6409fe4c52f9e5877a641d17',
          imageUrl:
            'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
          author: {
            authorName: 'Alma',
            authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
            authorType: 'PRO'
          },
          statistic: {
            likes: {
              active: false,
              count: 936
            },
            views: {
              active: false,
              count: 490
            }
          }
        }
      };

      const cardAfterUpViews = {
        id: '6409fe4c52f9e5877a641d17',
        imageUrl:
          'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
        author: {
          authorName: 'Alma',
          authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
          authorType: 'PRO'
        },
        statistic: {
          likes: {
            active: false,
            count: 936
          },
          views: {
            active: true,
            count: 491
          }
        }
      };

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(cardAfterUpViews)
        })
      ) as jest.Mock;

      storage.updateViews(cardBeforeUpViews).then((card) => {
        expect(card === cardAfterUpViews);
      });
    });

    test('Dont up views if card was viewed', () => {
      const viewedCard = {
        props: {
          id: '6409fe4c52f9e5877a641d17',
          imageUrl:
            'https://narcosis-css.ru/800/600/https/pbs.twimg.com/media/Eevk2G3XoAAjfB4.jpg:large',
          author: {
            authorName: 'Alma',
            authorLogoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg',
            authorType: 'PRO'
          },
          statistic: {
            likes: {
              active: false,
              count: 936
            },
            views: {
              active: true,
              count: 490
            }
          }
        }
      };

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(viewedCard)
        })
      ) as jest.Mock;

      storage.updateViews(viewedCard).then((card) => {
        expect(card === viewedCard);
      });
    });
  });
});

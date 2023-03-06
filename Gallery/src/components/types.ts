type cardStatistic = {
  likes: {
    active:boolean,
    count:number
  },
  views: {
    active:boolean,
    count:number
  }
};

type CardData = {
  id: number;
  imageUrl: string;
  author: {
    authorName: string;
    authorLogoUrl: string;
    authorType: string;
  };
  statistic: cardStatistic;
};

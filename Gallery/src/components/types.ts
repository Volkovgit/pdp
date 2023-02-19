type cardStatistic = {
  likes: number;
  views: number;
};

type CardData = {
  id: number;
  imageUrl: string;
  author: {
    authorName: string;
    authorLogoUrl: string;
    authorType: string;
    likeHandler: string;
  };
  statistic: cardStatistic;
};

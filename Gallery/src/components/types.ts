type cardStatistic = {
    likes: number;
    views: number;
  };
  
  type CardData = {
    imageUrl: string;
    author: {
      authorName: string;
      authorLogoUrl: string;
      authorType: string;
    };
    statistic: cardStatistic;
    likeHandler : Function;
  };
/* eslint-disable @typescript-eslint/no-unused-vars */
interface cardStatistic {
  likes: {
    active: boolean;
    count: number;
  };
  views: {
    active: boolean;
    count: number;
  };
}

interface CardData {
  id: number;
  imageUrl: string;
  author: {
    authorName: string;
    authorLogoUrl: string;
    authorType: string;
  };
  statistic: cardStatistic;
}

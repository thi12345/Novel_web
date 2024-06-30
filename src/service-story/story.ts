export interface Story {
  id: number;
  name: string;
  summary: string;
  image: string;
  author: string;
  artist: string;
  cagetory: Array<string>;
  avg_rating: number;
  date: Date;
}

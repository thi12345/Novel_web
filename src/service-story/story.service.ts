import { Injectable } from '@angular/core';
import { Story } from './story';
@Injectable({
  providedIn: 'root'
})
export class StoryService {
  story: Story[] = [
    {
      id: 1,
      name: 'Asterisk War',
      summary: 'abcxyz',
      image: 'https://m.media-amazon.com/images/I/81wSJbhVg7L._AC_UF894,1000_QL80_.jpg',
      author: 'Yuu Miyazaki',
      artist: 'Okiura',
      cagetory: ['Action', 'Fantasy'],
      avg_rating: 4.5,
      date: new Date('2023-01-15')
    },
    {
      id: 5,
      name: "Necromancer Academy's Genius Summoner",
      summary: 'abcxyz',
      image: 'https://i.docln.net/lightnovel/covers/s16510-a1094818-6325-4958-be52-33e0a2205de6-m.jpg',
      author: 'Yuu Miyazaki',
      artist: 'Okiura',
      cagetory: ['School Life', 'Action', 'Fantasy', 'Magic', 'Drama'],
      avg_rating: 4.9,
      date: new Date('2023-01-15')
    },
    {
      id: 7,
      name: 'Kore Ga Mahoutsukai no Kirifuda',
      summary: 'abcxyz',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKCBDPlEvSlYmuYlYO8_CK1cwSGegmXV87Q&s',
      author: 'Hitsuji Tarou',
      artist: 'Kurone Mishima',
      cagetory: ['Action', 'Fantasy', 'School Life', 'Romance', 'Comedy'],
      avg_rating: 4.9,
      date: new Date('2023-01-15')
    },
    {
      id: 3,
      name: 'Isekai Demo Bunan ni Ikitai Shoukougun',
      summary: 'abcxyz',
      image: 'https://isekailunatic.com/wp-content/uploads/2023/01/Its-Sudden-but-I-Came-to-Another-World-But-I-Hope-to-Live-Safely-697x1024.jpg',
      author: 'Yuu Miyazaki',
      artist: 'Okiura',
      cagetory: ['Adventure', 'Isekai', 'Fantasy'],
      avg_rating: 4.9,
      date: new Date('2023-01-15')
    },
    {
      id: 2,
      name: 'Pick me up',
      summary: 'abcxyz',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigOOI8qEObqW_uedpn7n6yulI5bM6nlVIXg&s',
      author: 'Hermod ',
      artist: 'Okiura',
      cagetory: ['Adventure', 'Isekai', 'Fantasy'],
      avg_rating: 4.9,
      date: new Date('2023-01-15')
    },
    {
      id: 6,
      name: 'Tower Defense & Dungeon Attack RPG',
      summary: 'abcxyz',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUKE34MdSpGQmOzHe6ne2h3qA7VDGsLLRFw&s',
      author: '류은가람 ',
      artist: '',
      cagetory: ['Adventure', 'Supernatural', 'Fantasy', 'Psychological'],
      avg_rating: 4.9,
      date: new Date('2023-01-15')
    },
    {
      id: 9,
      name: 'Ending Maker',
      summary: 'abcxyz',
      image: 'https://cdn.novelupdates.com/images/2020/07/Ending-Maker-cover-img.jpg',
      author: 'Chwiryong',
      artist: '',
      cagetory: ['Adventure', 'Fantasy', 'Comedy'],
      avg_rating: 4.9,
      date: new Date('2023-01-15')
    },
    {
      id: 10,
      name: 'Mahouka Koukou no Rettousei',
      summary: 'abcxyz',
      image: 'https://www.myutaku.com/media/mangas/59462.jpg',
      author: 'Satou Tsutomu',
      artist: 'Ishida Kana',
      cagetory: ['Action', 'Fantasy', 'Magic', 'Science Fiction'],
      avg_rating: 4.9,
      date: new Date('2023-01-17')
    },
    {
      id: 11,
      name: "Genius Archer's Stream",
      summary: 'abcxyz',
      image: 'https://dn-img-page.kakao.com/download/resource?kid=fqHOn/hAdNTFpQWD/soaboqA1CDI5lc4vAMXaU1&filename=o1',
      author: 'Mung Mung Kim',
      artist: 'GGoc',
      cagetory: ['Action','Adventure', 'Fantasy','Game'],
      avg_rating: 4.9,
      date: new Date('2023-01-19')
    },
    {
      id: 12,
      name: 'Maou Gakuin no Futekigousha ~Shijou Saikyou no Maou no Shiso, Tensei shite Shison tachi no Gakkou e Kayou~',
      summary: 'abcxyz',
      image: 'https://d2dq7ifhe7bu0f.cloudfront.net/Part-622fa0d6264f3bce55c8d45b/misfit1-cover-400.jpg',
      author: 'Shuu',
      artist: 'Shizuma Yoshinori ',
      cagetory: ['Action', 'Adventure', 'Comedy', 'Harem', 'Magic', 'Mystery', 'School Life'],
      avg_rating: 4.9,
      date: new Date('2023-01-16')
    },
    {
      id: 13,
      name: 'Kamen Rider Faiz Seiden: Deformed Flowers',
      summary: 'abcxyz',
      image: 'https://2.bp.blogspot.com/-CN60fTS9YDQ/WzGCcFrnk8I/AAAAAAABWlo/totjwjXG7j4PS1iGpyi7pd08qtgd5m3ZwCHMYCw/w215/default.jpg',
      author: ' Toshiki Inoue',
      artist: '',
      cagetory: ['Action', 'Drama','Horror', 'Science Fiction', 'Tragedy','Supernatural'],
      avg_rating: 4.9,
      date: new Date('2023-01-17')
    },
    {
      id: 14,
      name: 'Shōsetsu Kamen Raidā Kabuto',
      summary: 'askdngd',
      image: 'https://m.media-amazon.com/images/M/MV5BNDAzNTYzYzMtNDRkZi00YTQ3LThkMmEtN2RhYzBjMWEyOThhXkEyXkFqcGdeQXVyMjU0ODQ5NTA@._V1_FMjpg_UX1000_.jpg',
      author: ' Shouji Yonemura',
      artist: '',
      cagetory: ['Action', 'Psychological', 'Fantasy','Mature','Supernatural','Science Fiction','Slice of Life'],
      avg_rating: 4.9,
      date: new Date('2023-01-17')
    },
    {
      id: 15,
      name: 'Shōsetsu Kamen Raidā Ryūki',
      summary: 'abcxyz',
      image: 'https://archive.org/services/img/novel-kamen-rider-ryuki-2013',
      author: 'Toshiki Inoue',
      artist: '',
      cagetory: ['Action', 'Drama', 'Fantasy', 'Horror', 'Isekai', 'Tragedy', 'Science Fiction', 'Supernatural', 'Psychological'],
      avg_rating: 4.9,
      date: new Date('2023-01-25')
    },
    {
      id: 16,
      name: 'Kamen Rider Kiva',
      summary: 'abcxyz',
      image: 'https://yoyojapanstore.com/cdn/shop/files/detail-of-heroes-kamen-rider-kiva-king-of-vampire-reprint-editionhobby-japan9784798618296book-875486_grande.webp?v=1715659543',
      author: 'Konuta Kenji, Inoue Toshiki',
      artist: '',
      cagetory: ['Action', 'Drama', 'Mystery', 'Supernatural'],
      avg_rating: 4.9,
      date: new Date('2023-01-12')
    },
    {
      id: 17,
      name: 'Iinazuke ga dekita to omottara, sono iinazuke ga gakkou de yuumeina 『akuyakureijou』 datta dakedo, dousureba ii?',
      summary: 'abcxyz',
      image: 'https://metruyenchu.com.vn/chapters/_C03/b50862/c-mquG.jpg',
      author: ' Sodayou',
      artist: 'Miwabe Sakura',
      cagetory: ['Comedy', 'Romance','School Life', 'Harem'],
      avg_rating: 4.9,
      date: new Date('2023-01-25')
    }
  ];
  constructor() { }
  getIDmax(story: Story[]): number {
    let idMax = 0;
    for (let stories of story) {
      if (stories.id > idMax) {
        idMax = stories.id;
      }
    }
    return idMax;
  }
  addStory(name: string, summary: string, image: string, author: string, artist: string, category: Array<string>, avg_rating: number):void{

    const newStory: Story={
      id: this.getIDmax(this.story) + 1,
      name: name,
      summary: summary,
      image: image,
      author: author,
      artist: artist,
      cagetory: category,
      avg_rating: avg_rating,
      date: new Date()
    };
    this.story.push(newStory);
  }
  getStory(): Story[] {
    return this.story;
  }

  getSortStory(): Story[]  {
    return this.story.sort((a, b) =>
      b.date.getTime() - a.date.getTime()
    );
  }
  getStorybyID(id: number): Story | undefined {
    return this.story.find((story) => story.id === id);
  }
  getCurrentStoryinPage(currentPage: number, pageSize: number): Story[] {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.story.slice(startIndex, endIndex);
  }
}

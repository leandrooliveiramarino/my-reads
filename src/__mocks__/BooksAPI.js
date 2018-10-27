const fakeData = [
  {
    "title":"The Linux Command Line",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    },
    "id":"nggnmAEACAAJ",
    "shelf":"currentlyReading"
  },
  {
    "title":"Learning Web Development with React and Bootstrap",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "id":"sJf1vQAACAAJ",
    "shelf":"red"
  },
  {
    "title":"The Cuckoo's Calling",
    "imageLinks":{
       "smallThumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       "thumbnail":"http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "id":"evuwdDLfAyYC",
    "shelf":"wantToRead"
  }
];

export const get = bookId => Promise.resolve(fakeData.find(book => book.id === bookId));

export const getAll = () => Promise.resolve(fakeData);

export const search = query => Promise.resolve(fakeData.filter(book => book.title.indexOf(query) > -1));
import { setBooksOnShelves, limitCharacters } from '../Helper.js';

describe('setBooksOnShelves', () => {

  const book1 = {
    id: 1,
    title: 'Book Title',
    imageLinks: {
      thumbnail: 'path/to/thumbnail'
    },
    shelf: 'currentlyReading'
  }

  const book2 = {
    id: 2,
    title: 'Book Title',
    imageLinks: {
      thumbnail: 'path/to/thumbnail'
    },
    shelf: 'wantToRead'
  }

  const book3 = {
    id: 3,
    title: 'Book Title',
    imageLinks: {
      thumbnail: 'path/to/thumbnail'
    },
    shelf: 'read'
  }

  it('should return an object with three empty arrays in each attributes', () => {
    const bookCombination = setBooksOnShelves([]);

    expect(bookCombination).toEqual({
      currentlyReading: [],
      wantToRead: [],
      read: [],
    });
  });

  it('should have on book in each attribute', () => {
    const bookCombination = setBooksOnShelves([book1, book2, book3]);

    expect(bookCombination.currentlyReading.length).toBe(1);
    expect(bookCombination.wantToRead.length).toBe(1);
    expect(bookCombination.read.length).toBe(1);
  })
});

describe('limitCharacters', () => {

  it('should return a text with three dots at the end if text.length is longer than size', () => {
    const text = 'This text have more than 10 characters';
    const size = 10;
    const textFormatted = limitCharacters(text, size);

    expect(textFormatted.substring(textFormatted.length - 3, textFormatted.length)).toBe('...');
  });

  it('should return the full text if text.length is less than size', () => {
    const text = 'This text have more than 10 characters';
    const size = 100;
    const textFormatted = limitCharacters(text, size);

    expect(textFormatted.length).toBe(textFormatted.length);
  });
});
import { setBooksOnShelves, limitCharacters } from '../Helper.js';
import { myBooks } from './utils/mockData';

describe('setBooksOnShelves', () => {
  it('should return an object with three empty arrays in each attributes', () => {
    const bookCombination = setBooksOnShelves([]);

    expect(bookCombination).toEqual({
      currentlyReading: [],
      wantToRead: [],
      read: [],
    });
  });

  it('should have on book in each attribute', () => {
    const bookCombination = setBooksOnShelves([myBooks()[0], myBooks()[1], myBooks()[2]]);

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
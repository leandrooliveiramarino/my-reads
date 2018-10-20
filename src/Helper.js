export const setBooksOnShelves = (books) => {
  return books.reduce((carry, book) => {
    if(!carry) {
      return {
        [book.shelf]: [book]
      };
    }

    if(!carry.hasOwnProperty(book.shelf)) {
      carry[book.shelf] = [book];
      return carry;
    }

    carry[book.shelf].push(book);
    return carry;
  }, 0);
}
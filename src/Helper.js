export const setBooksOnShelves = (books) => {

  const treatedBooks = books.reduce((carry, book) => {
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

  /*
    Garantindo que o retorno do objeto possua os três atributos (currentlyReading, wantToRead e read), vazios ou não
   */
  return {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    ...treatedBooks
  };
}
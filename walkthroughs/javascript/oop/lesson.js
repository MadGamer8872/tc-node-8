class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class Shelf {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  find(title) {}

  remove() {}
}

class Bookcase {
  constructor(size) {
    this.shelves = new Array(size).fill(new Shelf());
  }
}

let bookcase = new Bookcase(3);

console.log(bookcase);

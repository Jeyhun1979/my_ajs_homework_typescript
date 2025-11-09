import { Book } from "../classes/Book";

describe("Book class", () => {
  let book: Book;

  beforeEach(() => {
    book = new Book(1, "1984", 500, "George Orwell", 1949);
  });

  test("should create a book with correct properties", () => {
    expect(book.id).toBe(1);
    expect(book.title).toBe("1984");
    expect(book.price).toBe(500);
    expect(book.author).toBe("George Orwell");
    expect(book.year).toBe(1949);
  });

  test("getInfo should return correct string", () => {
    expect(book.getInfo()).toBe("1984 by George Orwell, 1949");
  });
});

import { UniqueCart } from "../classes/UniqueCart";
import { Book } from "../classes/Book";
import { Purchasable } from "../classes/Purchasable";

describe("UniqueCart class", () => {
  let uniqueCart: UniqueCart<Purchasable>;
  let book: Book;

  beforeEach(() => {
    uniqueCart = new UniqueCart<Purchasable>();
    book = new Book(1, "1984", 500, "George Orwell", 1949);
  });

  test("should add item only once", () => {
    uniqueCart.addItem(book);
    uniqueCart.addItem(book); 

    expect(uniqueCart.getItems().length).toBe(1);
    expect(uniqueCart.getTotal()).toBe(500);
  });

  test("should remove item", () => {
    uniqueCart.addItem(book);
    uniqueCart.removeById(1);

    expect(uniqueCart.getItems().length).toBe(0);
  });
});

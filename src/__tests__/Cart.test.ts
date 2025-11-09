import { Cart } from "../classes/Cart";
import { Book } from "../classes/Book";
import { Movie } from "../classes/Movie";
import { Purchasable } from "../classes/Purchasable";

describe("Cart class", () => {
  let cart: Cart<Purchasable>;
  let book: Book;
  let movie: Movie;

  beforeEach(() => {
    cart = new Cart<Purchasable>();
    book = new Book(1, "1984", 500, "George Orwell", 1949);
    movie = new Movie(2, "Avengers", 1000, "Joss Whedon", 2012);
  });

  test("should add items and calculate total", () => {
    cart.addItem(book);
    cart.addItem(movie);

    expect(cart.getTotal()).toBe(1500);
    expect(cart.getTotalWithDiscount(10)).toBe(1350);
  });

  test("should remove item by id", () => {
    cart.addItem(book);
    cart.addItem(movie);

    cart.removeById(1);

    expect(cart.getItems()).toEqual([movie]);
    expect(cart.getTotal()).toBe(1000);
  });
});

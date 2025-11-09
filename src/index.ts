import { Cart } from "./classes/Cart";
import { UniqueCart } from "./classes/UniqueCart";
import { Book } from "./classes/Book";
import { Movie } from "./classes/Movie";
import { Purchasable } from "./classes/Purchasable";

const cart = new Cart<Purchasable>();
const uniqueCart = new UniqueCart<Purchasable>();

const book = new Book(1, "1984", 500, "George Orwell", 1949);
const movie = new Movie(2, "Avengers", 1000, "Joss Whedon", 2012);

cart.addItem(book);
cart.addItem(movie);

uniqueCart.addItem(book);
uniqueCart.addItem(book); 

console.log(cart.getTotal());       
console.log(uniqueCart.getTotal()); 

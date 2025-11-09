import { Movie } from "../classes/Movie";

describe("Movie class", () => {
  let movie: Movie;

  beforeEach(() => {
    movie = new Movie(1, "Avengers", 1000, "Joss Whedon", 2012);
  });

  test("should create a movie with correct properties", () => {
    expect(movie.id).toBe(1);
    expect(movie.title).toBe("Avengers");
    expect(movie.price).toBe(1000);
    expect(movie.director).toBe("Joss Whedon");
    expect(movie.year).toBe(2012);
  });

  test("getInfo should return correct string", () => {
    expect(movie.getInfo()).toBe("Avengers by Joss Whedon, 2012");
  });
});

import { Purchasable } from "./Purchasable";

export class Movie implements Purchasable {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public director: string,
    public year: number,
    public country?: string,
    public slogan?: string,
    public genre?: string[],
    public durationMinutes?: number
  ) {}

  getInfo(): string {
    return `${this.title} by ${this.director}, ${this.year}`;
  }
}

import { Purchasable } from "./Purchasable";

export class Book implements Purchasable {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public author: string,
    public year: number
  ) {}

  getInfo(): string {
    return `${this.title} by ${this.author}, ${this.year}`;
  }
}

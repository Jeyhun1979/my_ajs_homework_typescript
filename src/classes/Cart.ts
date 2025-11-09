import { Purchasable } from "./Purchasable";

export class Cart<T extends Purchasable> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeById(id: number): void {
    this.items = this.items.filter((i) => i.id !== id);
  }

  getItems(): T[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((acc, i) => acc + i.price, 0);
  }

  getTotalWithDiscount(discountPercent: number): number {
    const total = this.getTotal();
    return total - (total * discountPercent) / 100;
  }
}

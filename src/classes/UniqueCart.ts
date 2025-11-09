import { Cart } from "./Cart";
import { Purchasable } from "./Purchasable";

export class UniqueCart<T extends Purchasable> extends Cart<T> {
  addItem(item: T): void {
    if (!this.getItems().find((i) => i.id === item.id)) {
      super.addItem(item);
    }
  }
}

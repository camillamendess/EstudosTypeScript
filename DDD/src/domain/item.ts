import type { Id } from "./common/id";
import type { Price } from "./common/price";

export class Item {
  constructor(
    readonly id: Id,
    public name: string,
    public price: Price,
    public sku: string,
    public quantity: number,
  ) {
    if (name === undefined) {
      throw new Error("Name is required");
    }

    if (price === undefined) {
      throw new Error("Price is required");
    }

    if (sku === undefined) {
      throw new Error("Sku is required");
    }

    if (price.value < 0) {
      throw new Error("Price must be positive");
    }

    if (quantity < 0) {
      throw new Error("Quantity must be positive");
    }
  }
  // Regra de negócio
  getTotal() {
    return this.price.multiply(this.quantity);
  }
}
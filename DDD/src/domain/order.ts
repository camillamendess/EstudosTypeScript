import type { Address } from "./common/address";
import type { Id } from "./common/id";
import type { Item } from "./item";
import { Price } from "./common/price";
import { Aggregate } from "./common/aggregate";

export class Order extends Aggregate {
  private _items: Item[] = [];
  public createdAt = new Date();

  constructor(
    readonly id: Id,
    public customerName: string,
    public deliveryPerson: string,
    private _address: Address,
  ) {
    super();
  }

  addItem(item: Item) {
    const itemAlreadyExists = this._items.find((i) => i.id === item.id);
    if (itemAlreadyExists) {
      throw new Error("Item already exists");
    }

    this._items.push(item);
  }

  updateItemName(id: Id, name: string) {
    const itemIndex = this._items.findIndex((i) => i.id.equals(id));
    if (itemIndex === -1) {
      throw new Error("Item not found");
    }

    this._items[itemIndex].name = name;
  }

  calculateTotal() {
    return this._items.reduce(
      (total, item) => total.add(item.getTotal()),
      new Price(0),
    );
  }

  get items(): ReadonlyArray<Readonly<Item>> {
    return this._items;
  }
}

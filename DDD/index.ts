interface ValueObject {
  equals(other: this): boolean;
}

class Address implements ValueObject {
  constructor(
    readonly city: string,
    readonly street: string,
    readonly country: string,
    readonly zip: Zip,
    readonly number: string,
  ) {
    if (city === undefined) {
      throw new Error("City is required");
    }
  }

  equals(other: this): boolean {
    return (
      this.city === other.city &&
      this.street === other.street &&
      this.country === other.country &&
      this.zip.equals(other.zip) &&
      this.number === other.number
    );
  }
}

class Zip implements ValueObject {
  constructor(readonly value: string) {
    if (!/^\d{8}$/.test(value)) {
      throw new Error("Invalid zip code");
    }
  }
  // Format to correct format to zip code
  format() {
    return `${this.value.slice(0, 5)}-${this.value.slice(5)}`;
  }

  equals(other: this): boolean {
    return this.value === other.value;
  }
}

class Price {
  private cents: number;

  constructor(value: number) {
    this.cents = Math.round(value * 100);
  }

  get value() {
    return this.cents / 100;
  }

  add(amount: Price) {
    return new Price(this.value + amount.value);
  }

  sub(amount: Price) {
    return new Price(this.value - amount.value);
  }

  multiply(value: number) {
    return new Price(this.value * value);
  }

  divide(value: number) {
    return new Price(this.value / value);
  }

  discount(value: number) {
    return new Price(this.value * (1 - value));
  }
}

class Item {
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

class Id implements ValueObject {
  constructor(readonly value: string) {
    if (value === undefined) {
      throw new Error("Id is required");
    }
  }

  static generate() {
    return new Id(Bun.randomUUIDv7());
  }

  equals(other: this): boolean {
    return this.value === other.value;
  }
}

const item = new Item(
  Id.generate(),
  "Bola de basquete",
  new Price(10),
  "0194618d-d752-7db0-b51e-82c0ec8846b0",
  1,
);

class Order {
  private _items: Item[] = [];
  public createdAt = new Date();

  constructor(
    readonly id: Id,
    public customerName: string,
    public deliveryPerson: string,
    private _address: Address,
  ) { }

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

const order = new Order(
  Id.generate(),
  "Christian",
  "Lucas",
  new Address("city", "street", "country", new Zip("12345678"), "number"),
);

order.addItem(item);

order.updateItemName(item.id, "Bola de futebol");

class Item {
  constructor(
    readonly id: string,
    public name: string,
    public price: number,
    public sku: string,
    public quantity: number,
  ) { }
}

class Address {
  constructor(
    readonly city: string,
    readonly street: string,
    readonly country: string,
    readonly zip: Zip, // Give a meaningful name to the property, better than string, because string is too generic
    readonly number: string,) { }
}

class Zip {
  constructor(
    readonly value: string) { }

  // Format to correct format to zip code
  format() {
    return `${this.value.slice(0, 5)}-${this.value.slice(5)}`;
  }
}

class Order {
  private _items: Item[] = [];
  public createdAt = new Date();

  constructor(
    readonly id: string,
    public customerName: string,
    public deliveryPerson: string,
    private _address: Address,
  ) { }
}


const item = new Item(
  "1",
  "Bola de basquete",
  100,
  "0194618d-d752-7db0-b51e-82c0ec8846b0",
  1,
);

const order = new Order(
  "1",
  "Camilla",
  "Lucas",
  new Address("city", "street", "country", new Zip("12345678"), "number"),
);

console.log(order);
console.log(item);
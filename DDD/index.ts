import { Address } from "./src/domain/common/address";
import { Id } from "./src/domain/common/id";
import { Price } from "./src/domain/common/price";
import { Zip } from "./src/domain/common/zip";
import { Item } from "./src/domain/item/item";
import { Order } from "./src/domain/order/order";


const item = new Item(
  Id.generate(),
  "Bola de basquete",
  new Price(10),
  "0194618d-d752-7db0-b51e-82c0ec8846b0",
  1,
);

const order = new Order(
  Id.generate(),
  "Christian",
  "Lucas",
  new Address("city", "street", "country", new Zip("12345678"), "number"),
);

order.addItem(item);

order.updateItemName(item.id, "Bola de futebol");

import type { ValueObject } from "./value-object";
import type { Zip } from "./zip";

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

export { Address };
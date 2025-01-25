import type { ValueObject } from "./value-object";

export class Price implements ValueObject {
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

  equals(other: this): boolean {
    return other.cents === this.cents;
  }
}
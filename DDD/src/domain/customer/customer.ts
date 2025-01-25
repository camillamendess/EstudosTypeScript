import { Aggregate } from "../common/aggregate";
import type { Id } from "../common/id";

export class Customer extends Aggregate {
  constructor(
    readonly id: Id,
    public name: string,
  ) {
    super();
  }

}
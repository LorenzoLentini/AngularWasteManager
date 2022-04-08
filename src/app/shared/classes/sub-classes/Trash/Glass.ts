import { Trash } from "../../Trash";

export class Glass extends Trash {
  constructor(
    name: string,
    amount: number,
    inCo2Val: number,
    reCo2Val: number){
      super(name, amount, inCo2Val, reCo2Val);
    }
}

export class Trash {
  protected name: string;
  protected amount: number;
  protected incinarateCo2Value: number;
  protected recyclingCo2Value: number;
  
  constructor(
    name: string,
    amount: number,
    inCo2Val: number,
    reCo2Val: number
  ) {
    this.name = name;
    this.amount = amount;
    this.incinarateCo2Value = inCo2Val;
    this.recyclingCo2Value = reCo2Val;
  }
  getName() {
    return this.name;
  }
  getAmount() {
    return this.amount;
  }
  getInCo2Val() {
    return this.incinarateCo2Value;
  }
  getReCo2Val() {
    return this.recyclingCo2Value;
  }

  setName(name: string) {
    this.name = name;
  }
  setAmount(amount: number) {
    this.amount = amount;
  }
  setInCo2Val(inCo2Val: number) {
    this.incinarateCo2Value = inCo2Val;
  }
  setReCo2Val(reCo2Val: number) {
    this.recyclingCo2Value = reCo2Val;
  }
}

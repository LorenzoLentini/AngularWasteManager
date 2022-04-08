import { Trash } from './Trash';

export class Recycling {
  name: string;
  typeTreated: Trash[];
  nbLine: number;
  capacity: number;
  constructor(
    name: string,
    typeTreated: Trash[],
    nbLine: number,
    capacity: number
  ) {
    this.name = name;
    this.typeTreated = typeTreated;
    this.nbLine = nbLine;
    this.capacity = capacity;
  }
}

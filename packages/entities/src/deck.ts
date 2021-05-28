import { Card } from "./card";

export enum Formats {
  Vintage,
  Legacy,
  Modern,
  Standard,
}

export class Deck {
  id: string
  name: string
  format: Formats
  cards: ReadonlyArray<Card> = []
}
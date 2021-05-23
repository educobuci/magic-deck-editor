import { Card } from "./card";

export enum Formats {
  Vintage,
  Legacy,
  Standard,
}

export class Deck {
  id: string
  name: string
  format: Formats
  cards: Iterable<Card> = []
}
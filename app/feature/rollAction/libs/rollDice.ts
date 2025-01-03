import { DiceValues } from "@/app/models/rollAction.model";

export function rollDice():DiceValues{
  const result = Math.floor(Math.random() * 3) + 1 as DiceValues
  return result
}
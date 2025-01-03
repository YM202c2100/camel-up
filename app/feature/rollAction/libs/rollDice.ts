import { CamelColor, DiceValues } from "@/app/models/rollAction.model";

export function rollDice(camelColor:CamelColor):DiceValues{
  if(camelColor==="black" || camelColor==="white"){
    return Math.floor(Math.random() * 4) + 2 as DiceValues
  }else{
    return Math.floor(Math.random() * 3) + 1 as DiceValues
  }
}
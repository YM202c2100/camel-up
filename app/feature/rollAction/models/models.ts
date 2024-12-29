export type RollResult = {
  camel: CamelColor
  dice: DiceValues,
}

export const camelColors = ["purple","pink","orange","green","blue","black","white"] as const
export type CamelColor = typeof camelColors[number]

export type DiceValues = 1|2|3
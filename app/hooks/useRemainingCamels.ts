import { useContext } from "react"
import { RoundResultContext } from "../page"
import { CamelColor, camelColors } from "../feature/rollAction/models/models"

export function useRemainingCamels():CamelColor[]{
  const roundResult = useContext(RoundResultContext)
  const selectedColors = roundResult.map(result => result.camel)
  const remainingCamelColors = camelColors.filter(color => !selectedColors.includes(color))

  return remainingCamelColors
}
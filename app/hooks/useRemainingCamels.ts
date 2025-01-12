import { useContext } from "react"
import { RoundResultContext } from "@/app/context/context"
import { CamelColor, camelColors } from "@/app/models/rollAction.model"

export function useRemainingCamels():CamelColor[]{
  const roundResult = useContext(RoundResultContext)
  const selectedColors = roundResult.map(result => result.camel)
  const remainingCamelColors = camelColors.filter(color => !selectedColors.includes(color))

  return remainingCamelColors
}
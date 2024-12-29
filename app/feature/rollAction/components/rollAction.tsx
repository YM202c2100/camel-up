import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { RollResult, CamelColor, camelColors, DiceValues } from "../models/models"
import { getRandomCamel } from "../libs/camelSelector"
import { rollDice } from "../libs/rollDice"

type RollActionProps = {
  roundNum: number
  setRollResult:Dispatch<SetStateAction<RollResult|undefined>>
}
export const RollAction:React.FC<RollActionProps> = ({roundNum, setRollResult})=>{
  const [remainingCamels, setRemainingCamels] = useState<CamelColor[]>([...camelColors])
  const rollLimit = 5

  useEffect(()=>{
    setRemainingCamels([...camelColors])
  },[roundNum])

  return(
    <div>
      <button 
        onClick={advanceRace}
        className="border-2 border-black p-3 m-3"
      >
        レースを進める
      </button>
    </div>
  )

  function advanceRace(){
    const canRoll = (camelColors.length - remainingCamels.length < rollLimit)
    if(canRoll){
      const camelResult:CamelColor = getRandomCamel(remainingCamels)
      const diceResult:DiceValues = rollDice()

      updateRemainingCamels(camelResult)

      setRollResult({camel:camelResult, dice:diceResult})
    }
  }

  function updateRemainingCamels(camelResult:CamelColor){
    const newRemainingCamels = remainingCamels.filter(camel => camel !== camelResult)
    setRemainingCamels(newRemainingCamels)
  }
}
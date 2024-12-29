import { Dispatch, SetStateAction, useState } from "react"
import { RollResult, CamelColor, camelColors, DiceValues } from "../models/models"
import { getRandomCamel } from "../libs/camelSelector"
import { rollDice } from "../libs/rollDice"

export const RollAction:React.FC<{setRollResult:Dispatch<SetStateAction<RollResult|undefined>>}> = ({setRollResult})=>{
  const [remainingCamels, setRemainingCamels] = useState<CamelColor[]>([...camelColors])
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
    if(remainingCamels.length !== 0){
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
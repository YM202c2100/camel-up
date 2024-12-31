import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { RollResult, CamelColor, camelColors, DiceValues } from "../models/models"
import { getRandomCamel } from "../libs/camelSelector"
import { rollDice } from "../libs/rollDice"
import { RollAnimation } from "./animation/rollAnimation"
import { rollLimit } from "@/app/config"

type RollActionProps = {
  roundNum: number
  setRoundResult:Dispatch<SetStateAction<RollResult[]>>
}
export const RollAction:React.FC<RollActionProps> = ({roundNum, setRoundResult})=>{
  const [remainingCamels, setRemainingCamels] = useState<CamelColor[]>([...camelColors])
  const [isAnimate, setIsAnimate] = useState<boolean>(false)

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
      {isAnimate &&
        <RollAnimation quitAnimation={quitAnimation}/>
      }
    </div>
  )

  function advanceRace(){
    const canRoll = (camelColors.length - remainingCamels.length < rollLimit)
    if(canRoll){
      const camelResult:CamelColor = getRandomCamel(remainingCamels)
      const diceResult:DiceValues = rollDice()

      updateRemainingCamels(camelResult)
      const rollResult = {camel:camelResult, dice:diceResult}
      setRoundResult(prev => [...prev, rollResult])
      setIsAnimate(true)
    }
  }

  function updateRemainingCamels(camelResult:CamelColor){
    const newRemainingCamels = remainingCamels.filter(camel => camel !== camelResult)
    setRemainingCamels(newRemainingCamels)
  }

  function quitAnimation(){
    setIsAnimate(false)
  }
}
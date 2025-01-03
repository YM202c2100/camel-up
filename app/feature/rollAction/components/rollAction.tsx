import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { RollResult, CamelColor, camelColors, DiceValues } from "@/app/models/rollAction.model"
import { getRandomCamel } from "../libs/camelSelector"
import { rollDice } from "../libs/rollDice"
import { RollAnimation } from "./animation/rollAnimation"
import { rollLimit } from "@/app/config"
import Image from "next/image"
import { useRemainingCamels } from "@/app/hooks/useRemainingCamels"

type RollActionProps = {
  setRoundResult:Dispatch<SetStateAction<RollResult[]>>
}
export const RollAction:React.FC<RollActionProps> = ({setRoundResult})=>{
  const [isAnimate, setIsAnimate] = useState<boolean>(false)
  const remainingCamels = useRemainingCamels()

  return(<>
    <div
      className="h-full w-full cursor-pointer"
      onClick={advanceRace}
    >
      <Image src={"/SVG/pyramidIcon.svg"}
        alt={"pyramid svg icon"}
        fill style={{objectFit:"contain", transform:"scale(1.3) translateY(20px)"}}
      />
    </div>

    {isAnimate &&
      <RollAnimation quitAnimation={quitAnimation}/>
    }
  </>)

  function advanceRace(){
    const canRoll = (camelColors.length - remainingCamels.length < rollLimit)
    if(canRoll){
      const camelResult:CamelColor = getRandomCamel(remainingCamels)
      const diceResult:DiceValues = rollDice()

      const rollResult = {camel:camelResult, dice:diceResult}
      setRoundResult(prev => [...prev, rollResult])
      setIsAnimate(true)
    }
  }

  function quitAnimation(){
    setIsAnimate(false)
  }
}
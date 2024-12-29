import { useState } from "react"

type DiceValues = 1|2|3

export const RollDice:React.FC = ()=>{
  const [diceResult, setDiceResult] = useState<DiceValues|null>(null)
  return(
    <div>
      <button onClick={rollTheDice}>サイコロを振る</button>
      <div>
        サイコロの目：{diceResult}
      </div>
    </div>
  )

  function rollTheDice(){
    const result = Math.floor(Math.random() * 3) + 1 as DiceValues
    setDiceResult(result)
  }
}
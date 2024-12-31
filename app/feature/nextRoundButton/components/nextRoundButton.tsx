import { diceResultFont } from "@/app/page"
import { Dispatch, SetStateAction } from "react"

export const NextRoundButton:React.FC<{setRoundNum:Dispatch<SetStateAction<number>>}> = ({setRoundNum})=>{
  return(
    <button
      onClick={incrementRound}
      className={`bg-red-800 p-3 rounded-3xl m-8 text-white text-6xl ${diceResultFont.className}`}
    >
      <p className="text-start">NEXT</p>
      <p className="text-end">ROUND</p>
    </button>
  )

  function incrementRound(){
    setRoundNum(prev => prev+1)
  }
}
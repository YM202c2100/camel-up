import { rollLimit } from "@/app/config"
import { diceResultFont, RoundResultContext } from "@/app/page"
import { Dispatch, SetStateAction, useContext } from "react"

export const NextRoundButton:React.FC<{setRoundNum:Dispatch<SetStateAction<number>>}> = ({setRoundNum})=>{
  const roundResult = useContext(RoundResultContext)
  const isDisabled = (roundResult.length != rollLimit)
  return(
    <button
      onClick={incrementRound}
      className={`p-3 m-8 text-6xl rounded-3xl
        ${isDisabled ? "bg-gray-400 text-gray-300":"bg-red-800 text-white"} 
        ${diceResultFont.className}`
      }
      disabled={isDisabled}
    >
      <p className="text-start">NEXT</p>
      <p className="text-end">ROUND</p>
    </button>
  )

  function incrementRound(){
    setRoundNum(prev => prev+1)
  }
}
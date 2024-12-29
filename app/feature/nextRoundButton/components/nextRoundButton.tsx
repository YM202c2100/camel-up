import { Dispatch, SetStateAction } from "react"

export const NextRoundButton:React.FC<{setRoundNum:Dispatch<SetStateAction<number>>}> = ({setRoundNum})=>{
  return(
    <button
      onClick={incrementRound}
      className="border-2 border-black p-3 m-3"
    >
      次のラウンドへ
    </button>
  )

  function incrementRound(){
    setRoundNum(prev => prev+1)
  }
}
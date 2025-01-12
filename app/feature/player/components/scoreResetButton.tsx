import { dotFont } from "@/app/font/font"
import { SetInfoAction } from "@/app/models/playerCards.model"
import { useState } from "react"

type ResetButtonProps = {
  setPlayersInfo: (action: SetInfoAction&{idx:number})=>void
}
export const ScoreResetButton:React.FC<ResetButtonProps> = ({setPlayersInfo})=>{
  const [isHover, setIsHover] = useState<boolean>(false)
  return(
    <div
    onClick={()=>setPlayersInfo({type:"resetScore", idx:0})}
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    className="w-[30px] aspect-square bg-white rounded-full
      border-2 border-gray-300
      fixed top-2 left-2
      cursor-pointer"
    >
      <div className={`text-center ${dotFont.className} text-gray-400`}>0</div>
      <Tooltip isHover={isHover}/>
    </div>
  )

}

const Tooltip:React.FC<{isHover:boolean}> = ({isHover})=>{
  return(
    <div
      className={`absolute top-[-2px] right-[-5px] translate-x-[100%]
        whitespace-nowrap bg-white p-1 border border-black
        text-sm text-black
        ${isHover ? "opacity-100":"opacity-0"} transition-opacity duration-200
        pointer-events-none`}
    >
      スコアをリセット
    </div>
  )
}
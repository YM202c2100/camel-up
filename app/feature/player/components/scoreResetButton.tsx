import { SetInfoAction } from "@/app/models/playerCards.model"
import { dotFont } from "@/app/page"

type ResetButtonProps = {
  setPlayersInfo: (action: SetInfoAction&{idx:number})=>void
}
export const ScoreResetButton:React.FC<ResetButtonProps> = ({setPlayersInfo})=>{
  return(
    <div
      className={`w-[30px] aspect-square bg-white rounded-full
        border-2 border-gray-300
        fixed top-2 left-2 cursor-pointer
        text-center ${dotFont.className} text-gray-400`}
      onClick={()=>setPlayersInfo({type:"resetScore", idx:0})}
    >
      0
    </div>
  )
}
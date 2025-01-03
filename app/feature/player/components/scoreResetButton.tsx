import { SetInfoAction } from "@/app/models/playerCards.model"

type ResetButtonProps = {
  setPlayersInfo: (action: SetInfoAction&{idx:number})=>void
}
export const ScoreResetButton:React.FC<ResetButtonProps> = ({setPlayersInfo})=>{
  return(
    <div
      className="w-[30px] aspect-square bg-white rounded-full
        border-2 border-gray-300
        fixed top-2 left-2 cursor-pointer"
      onClick={()=>setPlayersInfo({type:"resetScore", idx:0})}
    ></div>
  )
}
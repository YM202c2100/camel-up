import { PlayerCardProps } from "@/app/models/playerCards.model";
import { dotFont } from "@/app/font/font";
import { useState } from "react";

export const Score:React.FC<PlayerCardProps> = ({info, setInfo})=>{
  const [isAcceptingEntries, setIsAccepted] = useState<boolean>(false)
  const [returns, setReturns] = useState<number>(1)
  return(
    <div className="relative">
      <p
        onClick={()=>{
          setIsAccepted(true)
        }}
        className="text-7xl"
      >
        {info.score}
      </p>

      {isAcceptingEntries &&
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[110%] z-10 w-[200px] bg-white p-3 rounded-md shadow-2xl border-4 border-gray-800">
          <p className={`text-2xl text-center ${dotFont.className}`}>収益を入力</p>
          <input type="number"
            onChange={e => setReturns(parseInt(e.target.value))}
            onKeyDown={e => {
              if(e.key === "Enter"){
                setInfo({type:"addScore", value:returns})
                setReturns(1)
                setIsAccepted(false)
              }
            }}
            onBlur={()=>setIsAccepted(false)}
            autoFocus
            placeholder=" 1"
            className="w-[60px] bg-black text-white text-center
              border border-black
              block mt-3 mx-auto"
          />
        </div>
      }
    </div>
  )
}
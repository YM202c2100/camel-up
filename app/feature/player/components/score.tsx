import { dotFont } from "@/app/page"
import { useState } from "react";

export const Score:React.FC = ()=>{
  const [isAcceptingEntries, setIsAccepted] = useState<boolean>(false)
  const [roundReturns, setReturns] = useState<number>(0)
  return(
    <div className="relative">
      <p 
        onClick={()=>{
          setIsAccepted(prev => !prev)
        }} 
        className="text-7xl"
      >
        24
      </p>

      {isAcceptingEntries &&
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[110%] z-10 w-[250px] bg-white p-3 rounded-md shadow-2xl border-4 border-gray-800">
          <p className={`text-2xl ${dotFont.className}`}>ラウンド収益を入力</p>
          <input type="number" 
            onChange={e => setReturns(parseInt(e.target.value))}
            onKeyDown={e => {
              if(e.key === "Enter"){
                console.log(roundReturns);
                setIsAccepted(false)
              }
            }}
            onBlur={()=>setIsAccepted(false)}
            autoFocus
            className="w-[60px] bg-black text-white text-center
              border border-black 
              block mt-3 mx-auto"
          />
        </div>
      }
    </div>
  )
}
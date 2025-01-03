import { PlayerCardProps } from "@/app/models/playerCards.model"
import { useState } from "react"
import { Score } from "./score"

export const PlayerCard:React.FC<PlayerCardProps> = ({info,setInfo})=>{
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [name, setName] = useState<string>(info.name)
  return(
    <div 
      className="bg-white rounded-xl flex-grow
        border-4 border-gray-300
        flex items-center justify-between
        p-4"
    >
      <div 
        onDoubleClick={()=>setIsEditing(true)} 
        onBlur={()=>setIsEditing(false)}
        className="text-5xl" 
      >
        <div className="flex">
          <p>{name}</p>
          {isEditing && <>
            <div className="w-[2px] bg-black animate-flickering"></div>

            <input 
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)} 
              onKeyDown={e => {
                if(e.key === "Enter"){
                  setInfo({type:"changeName", value:name})
                  setIsEditing(false)
                }
              }}
              autoFocus
              className="opacity-0 -z-10 absolute"
            />
          </>}
        </div>
      </div>
      <Score info={info} setInfo={setInfo}/>
    </div>
  )
}
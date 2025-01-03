"use client"
import { useReducer, useState } from "react"
import { Score } from "./score"
import { PlayerCardProps, SetInfoAction } from "@/app/models/playerCards.model"
import { PlayerInfo } from "@/app/models/playerCards.model"

export const PlayerCards:React.FC = ()=>{
  const [playersInfo, setPlayersInfo] = useReducer(playersInfoReuducer, Array(5).fill({name:"Player", score:0}))
  
  return(
    <div className="col-span-7 flex flex-col gap-2">
      {playersInfo.map((info,idx) => (
        <PlayerCard key={info.name+idx} info={info} setInfo={setIndivisualInfo(idx)}/>
      ))}
    </div>
  )

  function playersInfoReuducer(
    infoArray:PlayerInfo[], 
    action: SetInfoAction & {idx:number}
  ):PlayerInfo[]{
    return infoArray.map((info, idx) =>{
      if(idx !== action.idx) return {...info};
      
      switch (action.type){
        case "changeName":
          return {...info, name: action.value}
        case "addScore":
          return {...info, score: info.score+action.value}
        case "incrementScore":
          return {...info, score: info.score+1}
      }
    })
  }

  function setIndivisualInfo(idx:number):(action:SetInfoAction)=>void{
    return(
      (action:SetInfoAction)=>{
        setPlayersInfo({idx:idx, ...action})
      }
    )
  }
}

const PlayerCard:React.FC<PlayerCardProps> = ({info,setInfo})=>{
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
      <Score/>
    </div>
  )
}
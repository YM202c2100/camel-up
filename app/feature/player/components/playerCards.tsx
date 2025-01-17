"use client"
import { useReducer } from "react"
import { SetInfoAction } from "@/app/models/playerCards.model"
import { PlayerInfo } from "@/app/models/playerCards.model"
import { PlayerCard } from "./playerCard"
import { ScoreResetButton } from "./scoreResetButton"

export const PlayerCards:React.FC = ()=>{
  const [playersInfo, setPlayersInfo] = useReducer(playersInfoReuducer, Array(4).fill({name:"Player", score:0}))

  return(<>
    <ScoreResetButton setPlayersInfo={setPlayersInfo}/>
    <div className="col-span-7 flex flex-col gap-2">
      {playersInfo.map((info,idx) => (
        <PlayerCard key={info.name+idx} info={info} setInfo={setIndivisualInfo(idx)}/>
      ))}
    </div>
  </>)

  function playersInfoReuducer(
    infoArray:PlayerInfo[],
    action: SetInfoAction & {idx:number}
  ):PlayerInfo[]{
    return infoArray.map((info, idx) =>{
      if(action.type === "resetScore"){
        return {...info, score:0}
      }
      if(idx !== action.idx) return {...info};

      switch (action.type){
        case "changeName":
          return {...info, name: action.value}
        case "addScore":
          return {...info, score: info.score+action.value}
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
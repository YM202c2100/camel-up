export type PlayerInfo = {
  name: string,
  score: number,
}

export type SetInfoAction = 
  {type:"changeName", value:string}
  |{type:"addScore", value:number}
  |{type:"incrementScore", value:null}

export type PlayerCardProps = {
  info: PlayerInfo,
  setInfo: (action:SetInfoAction)=>void
}
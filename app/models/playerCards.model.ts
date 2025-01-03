export type PlayerInfo = {
  name: string,
  score: number,
}

export type SetInfoAction =
  {type:"changeName", value:string}
  |{type:"addScore", value:number}
  |{type:"resetScore"}

export type PlayerCardProps = {
  info: PlayerInfo,
  setInfo: (action:SetInfoAction)=>void
}
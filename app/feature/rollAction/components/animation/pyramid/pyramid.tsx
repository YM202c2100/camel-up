import { SandSmoke } from "./sandSmoke"

export const Pyramid:React.FC = ()=>{
  return(
    <div className="flex items-end justify-center">
      <SandSmoke side="left"/>
      <div className="w-[300px] h-[300px] bg-red-300 animate-pyramid"></div>
      <SandSmoke side="right"/>
    </div>
  )
}
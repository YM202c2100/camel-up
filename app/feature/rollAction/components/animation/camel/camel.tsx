import { CamelIcon } from "@/app/components/camelIcon"
import { DiceResult } from "./diceResult"

export const Camel:React.FC = ()=>{
  return(
    <>
      <div className="w-[250px] h-[250px] relative animate-appear">
        <CamelIcon camelColor="purple"/>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-[100%] -translate-y-[68%]">
        <DiceResult/>
      </div>
    </>
  )
}
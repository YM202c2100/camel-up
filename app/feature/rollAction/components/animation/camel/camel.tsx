import { CamelIcon } from "@/app/components/camelIcon"
import { DiceResult } from "./diceResult"
import { useContext } from "react"
import { RollResultContext } from "@/app/page"

export const Camel:React.FC = ()=>{
  const rollResult = useContext(RollResultContext)
  return(
    <>
      <div className="w-[250px] h-[250px] relative animate-appear">
        <CamelIcon camelColor={rollResult.camel}/>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-[100%] -translate-y-[68%]">
        <DiceResult/>
      </div>
    </>
  )
}
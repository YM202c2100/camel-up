import { diceResultFont, RoundResultContext } from "@/app/page";
import { useContext } from "react";

export const DiceResult:React.FC = ()=>{
  const rollResult = useContext(RoundResultContext).slice(-1)[0]
  return(
    <p 
      className={`${diceResultFont.className} font-bold 
        text-[#930b55] text-7xl 
        origin-bottom animate-diceResult`}
      >
        {rollResult.dice}
      </p>
  )
}
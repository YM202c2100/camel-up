import { Ribeye } from "next/font/google";
const diceResultFont = Ribeye({subsets:['latin'], weight:["400"]})

export const DiceResult:React.FC = ()=>{
  return(
    <p className={`${diceResultFont.className} font-bold text-[#930b55] text-7xl origin-bottom animate-diceResult`}>1</p>
  )
}
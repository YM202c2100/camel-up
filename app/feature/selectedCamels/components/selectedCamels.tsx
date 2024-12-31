import { CamelIcon } from "@/app/components/camelIcon"
import { diceResultFont, dotFont, RoundResultContext } from "@/app/page"
import { useContext } from "react"
import { RollResult } from "../../rollAction/models/models"
import { rollLimit } from "@/app/config"
import { Honk } from "next/font/google"
const camelCardFont = Honk({weight:["400"]})

export const SelectedCamels:React.FC = ()=>{
  const roundRollResult = useContext(RoundResultContext)
  const roundResultfilledNull = [...roundRollResult, ...Array(rollLimit-roundRollResult.length).fill(null)]
  return(<>
    {roundResultfilledNull.map((result, idx) => (
      <CamelCard result={result} idx={idx} key={idx}/>
    ))}
  </>)
}

const CamelCard:React.FC<{result:RollResult|undefined, idx:number}> = ({result, idx})=>{
  return(
    <div className="flex justify-center items-end relative border-4 border-gray-300 bg-blue-50 rounded-xl">
      <p className={`absolute top-0 right-0 m-1 text-xl ${dotFont.className}`}>{idx+1}頭目</p>
      {result &&
        <>
          <div className="w-[170px] aspect-square absolute z-10 -scale-x-100 bottom-8 left-10">
            <CamelIcon camelColor={result.camel}/>
            <div className="absolute -z-10 w-[100px] h-[20px] bg-black opacity-80 blur-lg bottom-1"></div>
          </div>
          <div
            className="w-[75%] h-[30%] -skew-x-[45deg]
            bg-amber-50 border-[4px] border-amber-950 rounded-md
            relative bottom-3
            flex justify-around items-center"
          >
            <p className={`text-[40px] ${camelCardFont.className}`}>Camel up!</p>
            <p className={`text-5xl text-amber-950 ${diceResultFont.className}`}>{result.dice}</p>
          </div>
        </>
      }
    </div>
  )
}
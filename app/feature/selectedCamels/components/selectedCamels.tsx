import { CamelIcon } from "@/app/components/camelIcon"
import { dotFont, RoundResultContext } from "@/app/page"
import { useContext } from "react"
import { RollResult } from "../../rollAction/models/models"
import { rollLimit } from "@/app/config"

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
    <div className="flex justify-center items-end relative border-4 border-gray-400 rounded-md">
      <p className={`absolute top-0 right-0 m-1 text-xl ${dotFont.className}`}>{idx+1}頭目</p>
      {result &&
        <>
          <div className="w-[100px] aspect-square absolute z-10 -scale-x-100 bottom-6 left-10">
            <CamelIcon camelColor={result.camel}/>
          </div>
          <div className="w-[75%] h-[30%] -skew-x-[45deg] bg-green-200 relative bottom-3 rounded-md flex justify-end items-center">
            <p className="text-3xl mr-5">{result.dice}</p>
          </div>
        </>
      }
    </div>
  )
}
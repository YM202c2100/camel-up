import { CamelIcon } from "@/app/components/camelIcon"
import { RoundResultContext } from "@/app/context/context"
import { diceResultFont, dotFont } from "@/app/font/font"
import { useContext } from "react"
import { RollResult } from "@/app/models/rollAction.model"
import { rollLimit } from "@/app/config"

export const SelectedCamels:React.FC = ()=>{
  const roundRollResult = useContext(RoundResultContext)
  const roundResultfilledNull = [...roundRollResult, ...Array(rollLimit-roundRollResult.length).fill(null)]
  return(
    <div className="row-span-4 bg-red-50 border-4 border-[#930b55] rounded-md flex flex-col">
      <p className={`text-2xl text-[#73204e] mx-auto ${dotFont.className}`}>排出結果</p>
      <div className="flex-grow flex flex-col justify-around items-center">
        {roundResultfilledNull.map((result, idx) => (
          <ComeOutCamel result={result} key={idx}/>
        ))}
      </div>
    </div>
  )
}

const ComeOutCamel:React.FC<{result:RollResult|undefined}> = ({result})=>{
  return(
      <div>
        <div className="flex items-end space-x-1">
          <div className="w-[90px] aspect-square">
            {result && <CamelIcon camelColor={result.camel} reverse/>}
          </div>
            {result &&
              <div className={`text-5xl text-[#930b55] ${diceResultFont.className}`}>
                {result.dice}
              </div>
            }
        </div>
        <div className="h-[3px] bg-[#73204e] mx-auto mb-2"></div>
      </div>
  )
}
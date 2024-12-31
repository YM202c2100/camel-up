import { RoundResultContext } from "@/app/page"
import { useContext } from "react"
import { camelColors } from "../rollAction/models/models"
import { CamelIcon } from "@/app/components/camelIcon"

export const RemainginCamels:React.FC = ()=>{
  const roundResult = useContext(RoundResultContext)
  const selectedColors = roundResult.map(result => result.camel)
  const remainingCamelColors = camelColors.filter(color => !selectedColors.includes(color))
  
  return(<>
    {remainingCamelColors.map(color => (
      <div className="w-[60px]"  key={color}>
        <CamelIcon camelColor={color}/>
      </div>
    ))}
  </>)
}
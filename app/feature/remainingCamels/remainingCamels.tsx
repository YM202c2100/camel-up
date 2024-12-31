import { CamelIcon } from "@/app/components/camelIcon"
import { useRemainingCamels } from "@/app/hooks/useRemainingCamels"

export const RemainginCamels:React.FC = ()=>{
  const remainingCamelColors = useRemainingCamels()
  
  return(<>
    {remainingCamelColors.map(color => (
      <div className="w-[60px] translate-y-3"  key={color}>
        <CamelIcon camelColor={color}/>
      </div>
    ))}
  </>)
}
import { CamelIcon } from "@/app/components/camelIcon"
import { useRemainingCamels } from "@/app/hooks/useRemainingCamels"

export const RemainginCamels:React.FC = ()=>{
  const remainingCamelColors = useRemainingCamels()
  
  return(<>
    {remainingCamelColors.map(color => (
      <div className="w-[60px]"  key={color}>
        <CamelIcon camelColor={color}/>
      </div>
    ))}
  </>)
}
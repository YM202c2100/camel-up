import { PyramidImage } from "./pyramidImage"
import { SandSmoke } from "./sandSmoke"

export const Pyramid:React.FC = ()=>{
  return(
    <div className="flex items-end justify-center">
      <SandSmoke side="left"/>
      <PyramidImage/>
      <SandSmoke side="right"/>
    </div>
  )
}
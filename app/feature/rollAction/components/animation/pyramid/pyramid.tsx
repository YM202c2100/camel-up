import { PyramidImage } from "./pyramidImage"
import { SandSmoke } from "./sandSmoke"

export const Pyramid:React.FC = ()=>{
  return(
    <div>
      <PyramidImage/>
      <SandSmoke side="left"/>
      <SandSmoke side="right"/>
      <SandSmoke side="center"/>
    </div>
  )
}
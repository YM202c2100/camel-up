import { PyramidImage } from "./pyramidImage"
import { SandSmoke } from "./sandSmoke"

export const Pyramid:React.FC = ()=>{
  return(
    <div>
      <div 
        className="w-[600px] aspect-[10/7] relative
          animate-pyramid origin-bottom"
      >
        <PyramidImage/>
      </div>
      
      <SandSmoke side="left"/>
      <SandSmoke side="right"/>
      <SandSmoke side="center"/>
    </div>
  )
}
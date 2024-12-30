import { Camel } from "./camel/camel"
import { Pyramid } from "./pyramid/pyramid"
import { SunLight } from "./sunLight/sunLight"

export const RollAnimation:React.FC = ()=>{
  return(
    <div className="fixed inset-0 bg-white overflow-hidden">
      <div 
        className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Pyramid/>
      </div>

      <div className="z-0 absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-[45%]">
        <Camel/>
      </div>

      <div className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SunLight/>
      </div>
    </div>
  )
}
import Image from "next/image"

type Position = "left"|"center"|"right"
export const SandSmoke:React.FC<{side:Position}> = ({side})=>{
  const stylesByPosition:Record<Position, string> = {
    left: "origin-bottom-right animate-sand-left bottom-5 -left-12",
    center: "origin-bottom animate-sand-right -bottom-3 right-24",
    right: "origin-bottom-left animate-sand-right bottom-7 -right-11"
  }
  const reverse = (side==="left") ? "scale(-1,1)":"scale(1,1)"
  return(
    <div 
      className={`w-[50px] h-[50px] absolute 
        ${stylesByPosition[side]}`}
    >
      <Image src={"/SVG/sandSmoke.svg"}
        alt={"sandSmoke"}
        fill style={{objectFit:"contain", transform:reverse}}
      />
    </div>
  )
}
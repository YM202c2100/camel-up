import Image from "next/image"

export const SandSmoke:React.FC<{side:"left"|"right"}> = ({side})=>{
  const origin = (side==="left") ? "origin-bottom-right":"origin-bottom-left"
  const animation = (side==="left") ? "animate-sand-left":"animate-sand-right"
  const topOffset = (side==="left") ? "top-2":"top-1"
  const scaleReverse = (side==="left") ? "scale(-1,1)":"scale(1,1)"
  return(
    <div 
      className={`w-[50px] h-[50px] relative 
        ${origin} ${animation} ${topOffset}`}
    >
      <Image src={"/SVG/sandSmoke.svg"}
        alt={"sandSmoke"}
        fill style={{objectFit:"contain", transform:scaleReverse}}
      />
    </div>
  )
}
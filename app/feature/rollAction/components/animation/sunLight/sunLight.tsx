import Image from "next/image"

export const SunLight:React.FC = ()=>{
  return(
    <div className="animate-appear">
      <div className="w-[1700px] h-[1700px] relative animate-sunlight">
        <Image src={"/SVG/sunLight.svg"}
        alt={"sun light svg"}
        fill style={{objectFit:"contain"}}
        />
      </div>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[1050px] aspect-square rounded-full
          bg-sunGrad"
      ></div>
    </div>
  )
}
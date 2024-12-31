import Image from "next/image"

export const PyramidImage:React.FC = ()=>{
  return(
    <Image src={"/Image/pyramid.png"}
      alt={"pyramid image"}
      fill style={{objectFit:"fill"}}
    />
  )
}
import Image from "next/image"

export const PyramidImage:React.FC = ()=>{
  return(
    <div>
      <Image src={"/Image/pyramid.png"}
        width={600} height={600 * 10/7}
        alt={"pyramid image"}
        className="animate-pyramid"
      />
    </div>
  )
}
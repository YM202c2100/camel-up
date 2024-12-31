import { CamelIcon } from "@/app/components/camelIcon"

export const SelectedCamels:React.FC = ()=>{
  return(<>
    <CamelCard/>
    <CamelCard/>
    <CamelCard/>
    <CamelCard/>
    <CamelCard/>
  </>)
}

const CamelCard:React.FC = ()=>{
  return(
    <div className="flex justify-center items-end relative border-4 rounded-md">
      <p className="absolute top-0 right-0 m-1">1頭目</p>
      <div className="w-[100px] aspect-square absolute z-10 -scale-x-100 bottom-6 left-10">
        <CamelIcon camelColor="black"/>
      </div>
      <div className="w-[75%] h-[30%] -skew-x-[45deg] bg-green-200 relative bottom-3 rounded-md flex justify-end items-center">
        <p className="text-3xl mr-5">3</p>
      </div>
    </div>
  )
}
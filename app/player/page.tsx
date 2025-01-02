import { PlayerCards } from "../feature/player/components/playerCards"

export default function Home(){
  return(
    <div className="grid grid-cols-2 h-lvh p-10 gap-3 bg-[#f4f1ce]">
      <div className="grid grid-cols-5 gap-3">
        <PlayerCards/>
        <div className="col-span-3 grid grid-cols-2 grid-rows-3 gap-2">
          <div className="bg-blue-200"></div>
          <div className="bg-blue-200"></div>
          <div className="bg-blue-200"></div>
          <div className="bg-blue-200"></div>
          <div className="bg-blue-200"></div>
          <div className="bg-blue-200"></div>
        </div>
      </div>
      <div className="grid grid-rows-10 gap-3">
        <div className="border-4 border-orange-300 bg-orange-50 row-span-7 rounded-md shadow-2xl relative"></div>
        <div className="bg-black row-span-3 rounded-md flex justify-center p-3 relative"></div>
      </div>
    </div>
  )
}
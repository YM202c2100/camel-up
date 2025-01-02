import { PlayerCards } from "../feature/player/components/playerCards"

export default function Home(){
  return(
    <div className="grid grid-cols-20 h-lvh p-10 gap-3 bg-[#f4f1ce]">
      <PlayerCards/>

      <div className="col-span-10 grid grid-rows-10 gap-3">
        <div className="border-4 border-orange-300 bg-orange-50 row-span-7 rounded-md shadow-2xl relative"></div>
        <div className="bg-black row-span-3 rounded-md flex justify-center p-3 relative"></div>
      </div>

      <div className="col-span-3 bg-white border border-gray-300"></div>
    </div>
  )
}
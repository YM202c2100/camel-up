"use client"

import { createContext, useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";
import { SelectedCamels } from "./feature/selectedCamels/components/selectedCamels";
import { RemainginCamels } from "./feature/remainingCamels/remainingCamels";
import { DotGothic16 } from "next/font/google";
export const RoundResultContext = createContext<RollResult[]>([])

export const dotFont = DotGothic16({subsets:["latin"], weight:["400"]})
export default function Home() {
  const [roundResult, setRoundResult] = useState<RollResult[]>([])
  const [roundNum, setRoundNum] = useState<number>(1)
  
  useEffect(()=>{
    setRoundResult([])
  },[roundNum])
  
  return (
    <RoundResultContext value={roundResult}>
      <div className="grid grid-cols-2 h-lvh p-10 gap-3">
        <div className="grid grid-rows-10 gap-3">
          <div className="border-4 border-orange-300 bg-orange-50 row-span-7 rounded-md shadow-2xl relative">
            <p className={`absolute left-1/2 -translate-x-1/2 text-3xl mt-5 ${dotFont.className}`}>レースを進める</p>
            <RollAction roundNum={roundNum} setRoundResult={setRoundResult}/>
          </div>
          <div className="bg-black row-span-3 rounded-md flex justify-center p-3 relative">
            <p className={`absolute left-1/2 -translate-x-1/2 text-white text-xl ${dotFont.className}`}>残りのラクダ</p>
            <RemainginCamels/>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          <SelectedCamels/>
          <NextRoundButton setRoundNum={setRoundNum}/>
        </div>
      </div>
    </RoundResultContext>
  );
}

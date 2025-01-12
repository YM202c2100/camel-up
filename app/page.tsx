"use client"

import { useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "@/app/models/rollAction.model";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";
import { SelectedCamels } from "./feature/selectedCamels/components/selectedCamels";
import { RemainginCamels } from "./feature/remainingCamels/remainingCamels";
import { PlayerCards } from "./feature/player/components/playerCards";
import { dotFont } from "./font/font";
import { RoundResultContext } from "./context/context";

export default function Home() {
  const [roundResult, setRoundResult] = useState<RollResult[]>([])
  const [roundNum, setRoundNum] = useState<number>(1)

  useEffect(()=>{
    setRoundResult([])
  },[roundNum])

  return (
    <RoundResultContext value={roundResult}>
      <div className="grid grid-cols-20 h-lvh p-10 gap-3">
        <PlayerCards/>
        <div className="col-span-10 grid grid-rows-10 gap-3">
          <div className="border-4 border-orange-300 bg-orange-50 row-span-7 rounded-md shadow-2xl relative overflow-hidden">
            <p className={`absolute left-1/2 -translate-x-1/2 text-4xl mt-5 ${dotFont.className}`}>レースを進める</p>
            <RollAction setRoundResult={setRoundResult}/>
          </div>
          <div className="bg-black row-span-3 rounded-md flex justify-center p-3 relative">
            <p className={`absolute left-1/2 -translate-x-1/2 text-white text-3xl ${dotFont.className}`}>残りのラクダ</p>
            <RemainginCamels/>
          </div>
        </div>

        <div className="col-span-3 grid grid-rows-5 gap-3">
          <SelectedCamels/>
          <NextRoundButton setRoundNum={setRoundNum}/>
        </div>
      </div>
    </RoundResultContext>
  );
}

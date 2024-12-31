"use client"

import { createContext, useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";
import { SelectedCamels } from "./feature/selectedCamels/components/selectedCamels";

export const RoundResultContext = createContext<RollResult[]>([])

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
          <div className="bg-red-300 row-span-7 rounded-md">
              <RollAction roundNum={roundNum} setRoundResult={setRoundResult}/>
          </div>
          <div className="bg-blue-300 row-span-3 rounded-md"></div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          <SelectedCamels/>
          <NextRoundButton setRoundNum={setRoundNum}/>
        </div>
      </div>
    </RoundResultContext>
  );
}

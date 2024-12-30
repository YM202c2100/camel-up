"use client"

import { createContext, useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";
import { RollAnimation } from "./feature/rollAction/components/animation/rollAnimation";

export const RollResultContext = createContext<RollResult>({camel:"black", dice:1})

export default function Home() {
  const [rollResult, setRollResult] = useState<RollResult|undefined>(undefined)
  const [roundNum, setRoundNum] = useState<number>(1)

  useEffect(()=>{
    setRollResult(undefined)
  }, [roundNum])
  
  return (
    <div>
      <RollAction roundNum={roundNum} setRollResult={setRollResult}/>
      {rollResult &&
        <RollResultContext value={rollResult}>
          <RollAnimation quitAnimation={quitAnimation}/>
        </RollResultContext>
      }
      <NextRoundButton setRoundNum={setRoundNum}/>
    </div>
  );

  function quitAnimation(){
    setRollResult(undefined)
  }
}

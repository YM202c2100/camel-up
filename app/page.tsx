"use client"

import { useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";

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
        <div>
          結果：{rollResult.camel}が+{rollResult.dice}
        </div>
      }
      <NextRoundButton setRoundNum={setRoundNum}/>
    </div>
  );
}

"use client"

import { useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";
import { CamelIcon } from "./components/camelIcon";
import { SandSmoke } from "./feature/rollAction/components/animation/sandSmoke";

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
        <div className="flex items-center">
          <div className="w-[100px] h-[100px]">
            <CamelIcon camelColor={rollResult.camel}/>
          </div>
          <div className="text-5xl font-extrabold">+{rollResult.dice}</div>
        </div>
      }
      <NextRoundButton setRoundNum={setRoundNum}/>
      <div 
        className="flex items-end justify-center
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <SandSmoke side="left"/>
        <div className="w-[300px] h-[300px] bg-red-300 animate-pyramid"></div>
        <SandSmoke side="right"/>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[250px] h-[250px] relative animate-camel">
          <CamelIcon camelColor="purple"/>
        </div>
      </div>
    </div>
  );
}

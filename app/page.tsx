"use client"

import { useEffect, useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";
import { NextRoundButton } from "./feature/nextRoundButton/components/nextRoundButton";
import { CamelIcon } from "./components/camelIcon";
import { SandSmoke } from "./feature/rollAction/components/animation/sandSmoke";
import { SunLight } from "./feature/rollAction/components/animation/sunLight";
import { Ribeye } from "next/font/google";
const diceResultFont = Ribeye({subsets:['latin'], weight:["400"]})

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
      <div className="fixed inset-0 bg-white overflow-hidden">
        <div 
          className="flex items-end justify-center
            z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <SandSmoke side="left"/>
          <div className="w-[300px] h-[300px] bg-red-300 animate-pyramid"></div>
          <SandSmoke side="right"/>
        </div>

        <div className="z-0 absolute top-1/2 left-1/2 -translate-x-[47%] -translate-y-[45%]">
          <div className="w-[250px] h-[250px] relative animate-appear">
            <CamelIcon camelColor="purple"/>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-[100%] -translate-y-[68%]">
            <p className={`${diceResultFont.className} font-bold text-[#930b55] text-7xl origin-bottom animate-diceResult`}>1</p>
          </div>
        </div>

        <div className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <SunLight/>
        </div>
      </div>
    </div>
  );
}

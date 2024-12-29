"use client"

import { useState } from "react";
import { RollAction } from "./feature/rollAction/components/rollAction";
import { RollResult } from "./feature/rollAction/models/models";

export default function Home() {
  const [rollResult, setRollResult] = useState<RollResult|undefined>(undefined)
  
  return (
    <div>
      <RollAction setRollResult={setRollResult}/>
      {rollResult && 
        <div>
          結果：{rollResult.camel}が+{rollResult.dice}
        </div>
      }
    </div>
  );
}

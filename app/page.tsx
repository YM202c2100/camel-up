"use client"

import { CamelSelector } from "./CamelSelector/camelSelector"
import { RollDice } from "./RollDice/rollDice";

export default function Home() {
  return (
    <div>
      <CamelSelector/>
      <RollDice/>
    </div>
  );
}

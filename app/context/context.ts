import { createContext } from "react";
import { RollResult } from "../models/rollAction.model";

export const RoundResultContext = createContext<RollResult[]>([])
import { Dispatch, SetStateAction } from "react";
import { CamelColor } from "../models/models";

export function getRandomCamel(
  remainingCamels:CamelColor[],
):CamelColor{
  const numOfCamels = remainingCamels.length
  const randomIndex = Math.floor(Math.random() * numOfCamels)

  const selectedCamel = remainingCamels[randomIndex]

  return selectedCamel
}
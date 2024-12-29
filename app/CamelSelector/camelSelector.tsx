import { useState } from "react"

const camelColors = ["purple","pink","orange","green","blue","black","white"] as const
export type CamelColor = typeof camelColors[number]

export const CamelSelector:React.FC = ()=>{
  const [selectedCamel, setCamel] = useState<CamelColor|null>(null)
  return(
    <div>
      <button onClick={SelectRandomCamel}>start</button>
      <div>
        抽選結果：{selectedCamel ?? "---"}
      </div>
    </div>
  )

  function SelectRandomCamel(){
    const numOfCamels = camelColors.length

    const randomIndex = Math.floor(Math.random() * numOfCamels)
    setCamel(camelColors[randomIndex])
  }
}
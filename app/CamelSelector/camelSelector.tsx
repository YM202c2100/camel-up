import { useState } from "react"

const camelColors = ["purple","pink","orange","green","blue","black","white"] as const
export type CamelColor = typeof camelColors[number]

export const CamelSelector:React.FC = ()=>{
  const [selectedCamel, setCamel] = useState<CamelColor|null>(null)
  const [remainingCamels, setRemainingCamels] = useState<CamelColor[]>([...camelColors])
  
  return(
    <div>
      <button onClick={SelectRandomCamel}>start</button>
      <div>
        抽選結果：{selectedCamel ?? "---"}
      </div>
    </div>
  )

  function SelectRandomCamel(){
    const numOfCamels = remainingCamels.length
    if(numOfCamels === 0){
      console.log("すべて抽選済みです");
      return
    }

    const randomIndex = Math.floor(Math.random() * numOfCamels)

    const selectedCamel = remainingCamels[randomIndex]
    setCamel(selectedCamel)

    const newRemainingCamels = remainingCamels.filter(camel => camel !== selectedCamel)
    setRemainingCamels(newRemainingCamels)
  }
}
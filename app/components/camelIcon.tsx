import { CamelColor } from "@/app/models/rollAction.model"

export const CamelIcon:React.FC<{camelColor:CamelColor, reverse?:boolean}> = ({camelColor, reverse=false})=>{

  const fillingColor = getFillingColor(camelColor)
  const strokeColor = (camelColor==="black") ? "white":"gray"
  const scaleForReverse = reverse ? "scale(-1,1)":"scale(1,1)"
  return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" width="100%" height="100%" transform={scaleForReverse}>
      <defs>
        <GradDef id="black" bottomColor="#000" topColor="#323232"/>
        <GradDef id="white" bottomColor="#e9e9e9" topColor="#fff"/>
        <GradDef id="blue" bottomColor="#1972cc" topColor="#1e90ff"/>
        <GradDef id="green" bottomColor="#18a918" topColor="#32cd32"/>
        <GradDef id="orange" bottomColor="#ff8c00" topColor="#eda956"/>
        <GradDef id="purple" bottomColor="#6409ba" topColor="#8a2be2"/>
        <GradDef id="pink" bottomColor="#d22179" topColor="#ff69b4"/>
      </defs>
      <path d="M511.874,92.334c-3.346-26.823-23.47-32.411-34.645-32.411c-11.174,0-21.517,0-21.517,0
        s-4.187-17.602-16.762-17.602c-5.587,0-34.365,0-34.365,0l-17.882-5.587c-6.7,4.474,2.234,16.762,2.234,16.762
        s-12.295,9.782-12.295,47.78c0,37.998,0,51.414,0,63.702c0,24.591-39.975,31.344-56.48,5.709
        C290.589,124.745,252.583,120.271,228,82.28c-16.868-26.074-34.153-34.706-45.933-35.069c-11.78-0.364-23.145,4.384-31.155,13.03
        L30.784,178.348C8.949,198.509,0,218.626,0,243.216c0,24.583,0,53.641,0,67.057c0,13.408,22.35,15.649,22.35,2.233
        c0-13.408,0-58.122,0-58.122s15.657-11.168,15.657,0c0,11.183,0,69.298,0,84.946c0,15.65-17.883,31.298-17.883,40.239
        c0,8.942,31.291,93.873,31.291,93.873h31.291c0,0-20.116-71.523-20.116-80.464c0-7.146,19.465-30.2,28.83-45.842
        c-0.954,14.506-14.347,29.852-13.491,38.022c0.931,8.896,40.891,90.11,40.891,90.11l31.117-3.255c0,0-27.445-69.04-28.376-77.936
        c-0.931-8.895,25.893-45.758,27.536-59.068c3.642-29.595,2.135-18.201,2.135-18.201c-0.977-9.305,2.43-15.793,9.07-19.949
        c36.538,0,83.394,0,98.544,0c20.116,0,17.876,15.649,15.65,24.591c-2.241,8.941-19.669,58.115-19.669,58.115l2.234,93.88h31.291
        c0,0,2.24-82.705,2.24-89.406c0-2.324,4.157-11.152,9.6-22.175c0.795,9.91,1.575,17.701,1.575,17.701l13.408,93.88h31.291
        c0,0-8.934-82.705-8.934-89.406c0-5.686,5.36-72.507,7.889-100.838c75.544-2.559,103.911-42.216,103.911-136.989
        c0-29.058,4.475-29.066,14.53-29.066c10.054,0,26.785,2.006,35.72-1.34c8.949-3.347,6.708-11.175,6.708-11.175
        S512.994,103.509,511.874,92.334z" fill={fillingColor} stroke={strokeColor} strokeWidth={5}></path>
    </svg>
  )

  function getFillingColor(camelColor:CamelColor){
    const fillingColors:Record<CamelColor, string> = {
      black:  "url(#black)",
      white:  "url(#white)",
      blue:   "url(#blue)",
      green:  "url(#green)",
      orange: "url(#orange)",
      pink:   "url(#pink)",
      purple: "url(#purple)"
    }
    
    return fillingColors[camelColor]
  }
}

type GradDefProps = {
  id:string,
  bottomColor:string,
  topColor:string
}
const GradDef:React.FC<GradDefProps> = ({id, bottomColor, topColor})=>{
  return(
    <linearGradient id={id} x1={"0%"} x2={"0%"} y1={"0%"} y2={"100%"}>
      <stop offset={"0%"} stopColor={topColor}></stop>
      <stop offset={"100%"} stopColor={bottomColor}></stop>
    </linearGradient>
  )
}
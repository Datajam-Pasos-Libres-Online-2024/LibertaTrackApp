import * as React from "react"
import Svg, { Path } from "react-native-svg"


const LeftArrowBlackIcon = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 20 20"
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-left"
    {...props}
  >
    <Path d="m15 18-6-6 6-6" />
  </Svg>
)
  
export default LeftArrowBlackIcon
  

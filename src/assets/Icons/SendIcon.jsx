import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function SendIcon({color}) {
    return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={23}
          height={22}
          viewBox="0 0 23 22"
          
        >
          <Defs>
            <LinearGradient
              id="a"
              x1={0.006}
              y1={0.006}
              x2={0.986}
              y2={0.986}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor={color} />
              <Stop offset={1} stopColor={color} stopOpacity={0.8} />
            </LinearGradient>
          </Defs>
          <Path
            d="M22.524 10.231L1.167.076a.81.81 0 00-.982.237.862.862 0 00-.02 1.039s4.592 5.513 6.885 8.662c.05.066 4.45.986 4.45.986s-4.4.9-4.45.963C4.755 15.114.165 20.646.165 20.646a.864.864 0 00.018 1.039.81.81 0 00.639.315.8.8 0 00.343-.078l21.357-10.154a.857.857 0 000-1.537z"
            fill="url(#a)"
          />
        </Svg>
      )
}

export default SendIcon

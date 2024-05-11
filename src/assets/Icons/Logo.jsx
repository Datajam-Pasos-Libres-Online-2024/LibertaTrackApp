import * as React from "react"
import Svg, { Text, TSpan } from "react-native-svg"
const Logo = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={136} height={24} {...props}>
    <Text
      fill="#031a2c"
      fontFamily="MicrosoftSansSerif, Microsoft Sans Serif"
      fontSize={24}
      transform="translate(0 22)"
    >
      <TSpan x={0} y={0}>
        {"LibertaTrack"}
      </TSpan>
    </Text>
  </Svg>
)
export default Logo

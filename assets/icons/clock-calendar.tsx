import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function IncomingFile(props: SvgProps) {
   
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={512}
      height={512}
      {...props}
    >
      <Path fill={props.color} d="M17.5 11.039a6.508 6.508 0 00-6.5 6.5C11 21.102 13.916 24 17.5 24s6.5-2.916 6.5-6.5c0-3.563-2.916-6.461-6.5-6.461zM17.5 23c-3.032 0-5.5-2.45-5.5-5.461 0-3.033 2.468-5.5 5.5-5.5S23 14.489 23 17.5c0 3.033-2.468 5.5-5.5 5.5zm1.354-4.854a.5.5 0 01-.708.707l-1-1a.5.5 0 01-.146-.354v-2a.5.5 0 011 0v1.793l.854.854zM19.5 2H18V.5a.5.5 0 00-1 0V2H7V.5a.5.5 0 00-1 0V2H4.5A4.505 4.505 0 000 6.5v13C0 21.981 2.019 24 4.5 24h6a.5.5 0 000-1h-6C2.57 23 1 21.43 1 19.5V9h22v1.5a.5.5 0 001 0v-4C24 4.019 21.981 2 19.5 2zM1 8V6.5C1 4.57 2.57 3 4.5 3h15C21.43 3 23 4.57 23 6.5V8H1z" />
    </Svg>
    )
  }
  
  export default IncomingFile
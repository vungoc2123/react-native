import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function IncomingFile(props: SvgProps) {
   
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill={props.color} d="M8 0H5C2.243 0 0 2.243 0 5v3c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2zM2 8V5c0-1.654 1.346-3 3-3h3v6H2zm12 2h6c1.103 0 2-.897 2-2V5c0-2.757-2.243-5-5-5h-3c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h3c1.654 0 3 1.346 3 3v3h-6V2zM8 12H2c-1.103 0-2 .897-2 2v3c0 2.757 2.243 5 5 5h3c1.103 0 2-.897 2-2v-6c0-1.103-.897-2-2-2zm-3 8c-1.654 0-3-1.346-3-3v-3h6v6H5zm18.707 2.293l-2.54-2.54A4.969 4.969 0 0022 17c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.969 4.969 0 002.753-.833l2.54 2.54a.997.997 0 001.414 0 .999.999 0 000-1.414zM14 17c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </Svg>
    )
  }
  
  export default IncomingFile
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
        <Path fill={props.color} d="M16.899 20c-.465 2.279-2.485 4-4.899 4s-4.435-1.721-4.899-4H16.9zM20.5 7C22.43 7 24 5.43 24 3.5S22.43 0 20.5 0 17 1.57 17 3.5 18.57 7 20.5 7zm.24 1.988c-.08.003-.159.012-.24.012A5.506 5.506 0 0115 3.5c0-.904.223-1.756.612-2.509a8.322 8.322 0 00-12.06 5.525l-2.35 7.597a3 3 0 002.866 3.886h15.656c2.08 0 3.529-2.065 2.821-4.021l-1.806-4.992z" />
      </Svg>
    )
  }
  
  export default IncomingFile
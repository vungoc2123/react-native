import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function Priority(props: SvgProps) {
   
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={512}
      height={512}
      {...props}
    >
      <Path fill={props.color} d="M1 24a1 1 0 01-1-1V4c0-2.206 1.794-4 4-4h17.998c1.6-.055 2.604 1.958 1.598 3.203L20.359 7.5l3.237 4.297c1.007 1.245.003 3.258-1.598 3.203H2v8a1 1 0 01-1 1z" />
    </Svg>
    )
  }
  
  export default Priority
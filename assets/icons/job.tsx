import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function job(props: SvgProps) {
   
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={512}
        height={512}
        {...props}
      >
        <Path fill={props.color} d="M19 4h-1.1A5.009 5.009 0 0013 0h-2a5.009 5.009 0 00-4.9 4H5a5.006 5.006 0 00-5 5v3h24V9a5.006 5.006 0 00-5-5zM8.184 4A3 3 0 0111 2h2a3 3 0 012.816 2zM13 15a1 1 0 01-2 0v-1H0v5a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5v-5H13z" />
      </Svg>
    )
  }
  
  export default job
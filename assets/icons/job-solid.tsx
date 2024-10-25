import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function JobSolid(props: SvgProps) {
   
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path fill={props.color} d="M9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zM9 1c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm13 13h-7c-1.103 0-2 .897-2 2v8h11v-8c0-1.103-.897-2-2-2zm1 9h-9v-7c0-.552.449-1 1-1h7c.551 0 1 .448 1 1v7zm-6-6h3v1h-3v-1zm-8 1.247l2-2.25v1.506l-2 2.25-4.219-4.747A4.005 4.005 0 001 19v5H0v-5c0-2.757 2.243-5 5-5h.225L9 18.247z" />
    </Svg>
    )
  }
  
  export default JobSolid

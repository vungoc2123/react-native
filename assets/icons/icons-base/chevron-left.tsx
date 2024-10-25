import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
const ChevronLeft = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0893 4.4107C13.4147 4.73614 13.4147 5.26378 13.0893 5.58921L8.67853 9.99996L13.0893 14.4107C13.4147 14.7361 13.4147 15.2638 13.0893 15.5892C12.7638 15.9147 12.2362 15.9147 11.9108 15.5892L6.91076 10.5892C6.58533 10.2638 6.58533 9.73614 6.91076 9.4107L11.9108 4.4107C12.2362 4.08527 12.7638 4.08527 13.0893 4.4107Z"
      fill={props.color || "#525252"}
    />
  </Svg>
)
export default ChevronLeft

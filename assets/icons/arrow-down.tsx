import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const ArrowDown = (props: SvgProps) => {
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={512}
        height={512}
        {...props}
      >
        <Path fill={props.color} d="M12 17.17a5 5 0 01-3.54-1.46L.29 7.54a1 1 0 011.42-1.42l8.17 8.17a3 3 0 004.24 0l8.17-8.17a1 1 0 111.42 1.42l-8.17 8.17A5 5 0 0112 17.17z" />
      </Svg>
    )
}

export default ArrowDown;

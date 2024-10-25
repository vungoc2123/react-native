import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Assign = (props: SvgProps) => {
    return (
        <Svg
        fill={props.color || '#FFFFFF'}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          {...props}
        >
          <Path d="M1.5 4a2 2 0 113.999-.001A2 2 0 011.5 4zM7 9c0-1.103-.897-2-2-2H2C.897 7 0 7.897 0 9v1h7V9zm13.5-3a2 2 0 10.001-3.999A2 2 0 0020.5 6zM24 9c0-1.103-.897-2-2-2h-3c-1.103 0-2 .897-2 2v1h7V9zM12 4a2 2 0 10.001-3.999A2 2 0 0012 4zm3.5 3c0-1.103-.897-2-2-2h-3c-1.103 0-2 .897-2 2v1h7V7zM14 11.107c0-.996-.681-1.92-1.664-2.08A2.001 2.001 0 0010 11v8.817a232.093 232.093 0 01-2.145-1.784 2.292 2.292 0 00-3.235.109 2.288 2.288 0 00.098 3.23l2.886 2.693L23 24v-4.5l-9-3.538v-4.855z" />
        </Svg>
    )
}

export default Assign;

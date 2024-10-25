import React from "react";
import Svg, {G, Path, SvgProps} from "react-native-svg";

const Calendar = (props: SvgProps) => {
  return (
    <Svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G stroke={props.color ?? '#000'} strokeLinecap="round" strokeLinejoin="round">
        <Path
          d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <G strokeWidth={2}>
          <Path
            d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Calendar;
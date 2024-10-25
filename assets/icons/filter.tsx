import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const Filter = (props: SvgProps) => {
    return (
        <Svg viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg" {...props}>
          <Path d="M14.546 6.201a.554.554 0 01-.554.554h-1.79a2.22 2.22 0 01-4.298 0H1.008a.554.554 0 010-1.108h6.896a2.22 2.22 0 014.299 0h1.789a.554.554 0 01.554.554zm0 3.7a.554.554 0 01-.554.554H6.987a2.22 2.22 0 01-4.298 0h-1.68a.554.554 0 010-1.108h1.68a2.22 2.22 0 014.298 0h7.005a.554.554 0 01.554.554zm0 3.7a.554.554 0 01-.554.555h-1.79a2.22 2.22 0 01-4.298 0H1.008a.554.554 0 010-1.109h6.896a2.22 2.22 0 014.299 0h1.789a.554.554 0 01.554.554zm-8.597-3.7a1.11 1.11 0 10-1.111 1.111 1.112 1.112 0 001.11-1.11zm5.215-3.7a1.111 1.111 0 10-1.11 1.11 1.112 1.112 0 001.11-1.11zm0 7.4a1.111 1.111 0 10-1.11 1.111 1.112 1.112 0 001.11-1.11z" />
        </Svg>
      )
}

export default Filter;
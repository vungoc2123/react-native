import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function IncomingFile(props: SvgProps) {
   
    return (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={512}
      height={512}
      {...props}
    >
      <Path fill={props.color} d="M4.5 1h5.515c.334 0 .663.03.985.088V6.5C11 7.878 12.122 9 13.5 9h5.411c.033.178.057.359.071.541a.507.507 0 00.539.458.5.5 0 00.458-.539 6.503 6.503 0 00-1.883-4.07l-3.485-3.485A6.457 6.457 0 0010.015.001H4.5A4.504 4.504 0 000 4.5v15C0 21.981 2.019 24 4.5 24h4a.5.5 0 000-1h-4C2.57 23 1 21.43 1 19.5v-15C1 2.57 2.57 1 4.5 1zm12.889 5.096A5.51 5.51 0 0118.629 8H13.5c-.827 0-1.5-.673-1.5-1.5V1.368a5.487 5.487 0 011.904 1.243l3.485 3.485zm5.878 5.636c-.943-.944-2.592-.944-3.535 0l-7.707 7.707A3.477 3.477 0 0011 21.914V23.5a.5.5 0 00.5.5h1.586c.935 0 1.814-.364 2.475-1.025l7.707-7.707c.472-.472.732-1.1.732-1.768s-.26-1.296-.732-1.768zm-.707 2.828l-7.707 7.707c-.472.472-1.1.732-1.768.732h-1.086v-1.086c0-.668.26-1.295.732-1.768l7.707-7.707c.566-.566 1.555-.566 2.121 0 .283.283.439.66.439 1.061s-.156.777-.439 1.061z" />
    </Svg>
    )
  }
  
  export default IncomingFile
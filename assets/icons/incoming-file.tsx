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
      <Path fill={props.color} d="M15.904 16.143a.5.5 0 01.008.707l-2.515 2.57c-.381.381-.88.574-1.378.579a2.05 2.05 0 01-1.413-.575L8.087 16.85a.5.5 0 01.715-.699l2.515 2.57a.962.962 0 00.183.143v-7.363a.5.5 0 011 0v7.363a.985.985 0 00.187-.146l2.511-2.566a.501.501 0 01.707-.008zM22 9.986v9.515c0 2.481-2.019 4.5-4.5 4.5h-11a4.505 4.505 0 01-4.5-4.5V4.5C2 2.019 4.019 0 6.5 0h5.515c1.735 0 3.368.676 4.597 1.904l3.484 3.485A6.453 6.453 0 0122 9.985zm-8-3.485c0 .827.673 1.5 1.5 1.5h5.132a5.49 5.49 0 00-1.244-1.904l-3.484-3.485A5.506 5.506 0 0014 1.369v5.132zm7 3.485c0-.334-.03-.663-.088-.985H15.5a2.503 2.503 0 01-2.5-2.5V1.088A5.551 5.551 0 0012.015 1H6.5C4.57 1 3 2.57 3 4.5v15C3 21.43 4.57 23 6.5 23h11c1.93 0 3.5-1.57 3.5-3.5V9.985zM12.019 20c-.007 0 .006 0 0 0z" />
    </Svg>
    )
  }
  
  export default IncomingFile
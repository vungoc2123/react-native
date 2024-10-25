import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const NotYetProcess = (props: SvgProps) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M24 3.5c0 .28-.22.5-.5.5H.5C.22 4 0 3.78 0 3.5S.22 3 .5 3h23c.28 0 .5.22.5.5zM7.5 21h-7c-.28 0-.5.22-.5.5s.22.5.5.5h7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm8-9H.5c-.28 0-.5.22-.5.5s.22.5.5.5h15c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z" />
    </Svg>
  )
}


export default NotYetProcess;

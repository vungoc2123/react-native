import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const CheckboxChecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={5.5}
      fill={props.color || '#155EEF'}
    />
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={5.5}
      stroke={props.color || '#155EEF'}
    />
    <Path
      d="M14.6654 6.5L8.2487 12.9167L5.33203 10"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckboxChecked;

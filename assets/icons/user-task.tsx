import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const UserTask = (props: SvgProps) => {
    return (
        <Svg
          viewBox="0 0 24 24"
          width={512}
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          {...props}
        >
          <Path 
          fill={props.color || '#FFFFFF'}
          d="M17 10a7 7 0 107 7 7.008 7.008 0 00-7-7zm2.707 9.707a1 1 0 01-1.414 0l-2-2A1 1 0 0116 17v-3a1 1 0 012 0v2.586l1.707 1.707a1 1 0 010 1.414zM8.474 11a5.5 5.5 0 115.5-5.5 5.506 5.506 0 01-5.5 5.5zm2.882 13H1a1 1 0 01-1-1.011 10.275 10.275 0 016.553-9.6 6.685 6.685 0 012.394-.384 9.087 9.087 0 00-.424.995A8.853 8.853 0 008 17a8.983 8.983 0 003.356 7z" />
        </Svg>
      );
}

export default UserTask;

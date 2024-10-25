import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const InvateAlt = (props: SvgProps) => {
    return (
        <Svg
            fill={props.color || '#FFFFFF'}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            {...props}
        >
            <Path d="M18 12a6 6 0 100 12 6 6 0 000-12zm0 2a2 2 0 11.001 3.999A2 2 0 0118 14zm3 6.64l-.011.015a3.986 3.986 0 01-2.753 1.338c-1.282.076-2.449-.476-3.236-1.375v-.119a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v.14zM24 7.5V10a1.5 1.5 0 01-3 0H3v8.5A2.5 2.5 0 005.5 21h4a1.5 1.5 0 010 3h-4A5.5 5.5 0 010 18.5v-11A5.5 5.5 0 015.5 2H6v-.5a1.5 1.5 0 013 0V2h6v-.493C15 .674 15.675 0 16.507 0h.038C17.349 0 18 .652 18 1.455V2h.5A5.5 5.5 0 0124 7.5z" />
        </Svg>
    )
}

export default InvateAlt;

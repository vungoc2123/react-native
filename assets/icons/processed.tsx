import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Processed = (props: SvgProps) => {
    return (
        <Svg
            fill={props.color || '#FFFFFF'}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M24 12c0-1.626-.714-3.16-1.925-4.124a5.49 5.49 0 00-1.59-4.362c-1.15-1.149-2.735-1.728-4.277-1.555-2.014-2.556-6.365-2.604-8.332-.035a5.467 5.467 0 00-4.361 1.59c-1.149 1.15-1.729 2.74-1.555 4.277-2.556 2.014-2.605 6.365-.035 8.333a5.49 5.49 0 001.59 4.362c1.15 1.149 2.737 1.73 4.277 1.555 2.014 2.556 6.365 2.604 8.332.035a5.5 5.5 0 004.361-1.59c1.149-1.15 1.729-2.74 1.555-4.277A5.487 5.487 0 0024 12.001zm-6.46-1.434l-4.739 4.568c-1.163 1.161-3.066 1.151-4.229-.013L6.32 13.029a1 1 0 011.361-1.465l2.278 2.117c.418.417 1.05.416 1.44.025l4.752-4.581a1 1 0 011.389 1.44z" />
        </Svg>
    )
}

export default Processed;

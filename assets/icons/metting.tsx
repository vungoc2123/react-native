import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Metting = (props: SvgProps) => {
    return (
        <Svg
            fill={props.color || '#FFFFFF'}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            {...props}
        >
            <Path d="M0 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM4 22H1a1 1 0 000 2h3a1 1 0 000-2zM21.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-15 9H5v-5.5a2.5 2.5 0 10-5 0V17a3.003 3.003 0 002.948 2.999L6.5 20a.5.5 0 01.5.5V23a1 1 0 002 0v-2.5C9 19.122 7.878 18 6.5 18zm8.5 2.5V23a1 1 0 002 0v-2.5a.5.5 0 01.5-.5l3.552-.001A3.003 3.003 0 0024 17v-4.5a2.5 2.5 0 10-5 0V18h-1.5a2.503 2.503 0 00-2.5 2.5zm8 1.5h-3a1 1 0 000 2h3a1 1 0 000-2zm-6-8a1 1 0 00-1-1H8a1 1 0 000 2h8a1 1 0 001-1zm-5.086-4.498c-.362 0-.729-.128-1.021-.387L9.545 7.999h-.093a2.503 2.503 0 01-2.5-2.5v-3c0-1.378 1.122-2.5 2.5-2.5h5c1.378 0 2.5 1.122 2.5 2.5v3c0 1.378-1.122 2.5-2.5 2.5h-.187L12.89 9.137a1.468 1.468 0 01-.977.365z" />
        </Svg>
    )
}

export default Metting;

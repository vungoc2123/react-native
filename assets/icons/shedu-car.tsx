import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SheduCar = (props: SvgProps) => {
    return (
        <Svg
            fill={props.color || '#FFFFFF'}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            {...props}
        >
            <Path d="M15.9 16.093A2.99 2.99 0 0013.036 14h-2.072A2.99 2.99 0 008.1 16.093l-.672 2.119C7.205 19.31 6.256 21.814 8 22v1a1 1 0 002 0v-1h4v1a1 1 0 002 0v-1c1.744-.188.8-2.688.568-3.789zM10.964 16h2.072a1 1 0 01.953.7L14.4 18H9.6l.414-1.3a1 1 0 01.95-.7zM24 9.762v9.365a5.009 5.009 0 01-3.748 4.841A1 1 0 0119 22.994V13a3 3 0 00-3-3H8a3 3 0 00-3 3v9.994a1 1 0 01-1.252.974A5.009 5.009 0 010 19.127V9.762a5 5 0 012.2-4.144l7-4.724a5 5 0 015.594 0l7 4.724A5 5 0 0124 9.762z" />
        </Svg>
    )
}

export default SheduCar;

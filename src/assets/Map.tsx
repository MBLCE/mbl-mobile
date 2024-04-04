import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const MapSvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <G fill="#000">
      <Path d="M9 4 3 8v12l6-4 6 4 6-4V4l-6 4-6-4z" />
      <Path
        fillRule="evenodd"
        d="M21.472 3.118A1 1 0 0 1 22 4v12a1 1 0 0 1-.445.832l-6 4a1 1 0 0 1-1.11 0L9 17.202l-5.445 3.63A1 1 0 0 1 2 20V8a1 1 0 0 1 .445-.832l6-4a1 1 0 0 1 1.11 0L15 6.798l5.445-3.63a1 1 0 0 1 1.027-.05zM4 8.535v9.596l4.445-2.963a1 1 0 0 1 1.11 0L15 18.798l5-3.333V5.869l-4.445 2.963a1 1 0 0 1-1.11 0L9 5.202 4 8.535z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default MapSvgComponent;

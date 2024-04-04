import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const NoMapSvgComponent = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 3 18 18"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4.782 5.61 2.445 7.168A1 1 0 0 0 2 8v12a1 1 0 0 0 1.555.832L9 17.202l5.445 3.63a1 1 0 0 0 1.11 0l2.67-1.78L4.781 5.61zm16.834 11.178A1 1 0 0 0 22 16V4a1 1 0 0 0-1.555-.832L15 6.798l-5.445-3.63a1 1 0 0 0-1.11 0l-.269.18 13.44 13.44z"
      clipRule="evenodd"
    />
  </Svg>
);
export default NoMapSvgComponent;

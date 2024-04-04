import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import tw from 'twrnc';

type Props = {
  color: string;
  style?: StyleProp<ViewStyle>;
};

export class Dot extends React.Component<Props> {
  render() {
    const dotStyle = {
      borderRadius: 5,
      backgroundColor: this.props.color,
    };

    return (
      <View
        style={[
          this.props.style,
          dotStyle,
          tw`h-3 w-3 self-center rounded-full`,
        ]}
      />
    );
  }
}

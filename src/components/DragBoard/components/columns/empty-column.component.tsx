import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptySvgComponent from '../../../../assets/EmptySvgComponent';
import tw from 'twrnc';
type Props = {};

export default class EmptyColumn extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <EmptySvgComponent style={tw`mt-12`} />
        <Text style={styles.textStyle}>{'Empty'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
  },
  textStyle: {
    color: '#eaeaea',
    fontSize: 24,
    textAlign: 'center',
  },
});

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class LogoutIn extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text>Email</Text>
          <TextInput />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LogoutIn;
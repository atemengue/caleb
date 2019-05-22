import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComponent from 'react-native-button-component';

class Inscription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Nom:</Text>
          <TextInput underlineColorAndroid={'gray'} />
        </View>
        <View>
          <Text>Premon:</Text>
          <TextInput underlineColorAndroid={'gray'} />
        </View>
        <View>
          <Text>Telephone:</Text>
          <TextInput underlineColorAndroid={'gray'} />
        </View>
        <View>
          <Text>methode contraceptive:</Text>
          <TextInput underlineColorAndroid={'gray'} />
        </View>
        <View style={{ marginTop: 30 }}>
          <ButtonComponent
            backgroundColors={['#ffa323', '#ffa323']}
            onPress={() => this.props.navigation.navigate('switchTwo')}
            text='Connexion'
          />
        </View>
      </View>
    );
  }
}

export default Inscription;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  }
});

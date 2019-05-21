import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from 'react-native-button-component';

class ConnectView extends Component {
  render() {
    const {
      container,
      secondView,
      buttonLog,
      backView,
      textView,
      textColor,
      appTitle
    } = styles;
    return (
      <View style={container}>
        <View style={{ flex: 3 }}>
          <ImageBackground
            source={require('../../assets/images/home.jpg')}
            style={{ width: '100%', height: '100%' }}
          >
            <View style={backView}>
              <View style={textView}>
                <Image
                  source={require('../../assets/images/gender1.png')}
                  style={{ width: 80, height: 80 }}
                />
                <Text style={[textColor, appTitle]}>CALEB</Text>
              </View>
              <View style={textView}>
                <Text style={textColor}>Methodes Contraceptive Hormonale</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={secondView}>
          <View style={buttonLog}>
            <ButtonComponent
              backgroundColors={['#BF8173', '#A67538']}
              onPress={() => this.props.navigation.navigate('newUser')}
              text='Inscription'
            />
          </View>
          <View style={buttonLog}>
          <ButtonComponent
              backgroundColors={['#ffa323', '#ffa323']}
              onPress={() => this.props.navigation.navigate('switchTwo')}
              text='Connexion'
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secondView: {
    flex: 2,
    justifyContent: 'center'
  },
  buttonLog: {
    margin: 10
  },
  backView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  textColor: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'BalooBhai-Regular'
  },
  appTitle: {
    fontFamily: 'BalooBhai-Regular',
    fontSize: 26
  }
});

export default ConnectView;

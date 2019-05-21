import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonComponent from 'react-native-button-component/dist/ButtonComponent';

export default class MethodView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    this.setState({ data: this.props.navigation.getParam('id') });
  }
  render() {
    console.log(this.state.data);
    return (
      <ScrollView>
        <View style={{ height: 200 }}>
          <ImageBackground
            source={this.state.data.image}
            style={{ width: '100%', height: '100%' }}
          >
            <View style={styles.backView}>
              <Text style={styles.textColor}>{this.state.data.name}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ margin: 10 }}>
          <View style={styles.titleParent}>
            <Image
              source={require('../../assets/images/like2.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.title}>Avantages</Text>
          </View>
          <Text>{this.state.data.description}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <View style={styles.titleParent}>
            <Image
              source={require('../../assets/images/like3.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.title}>Inconvenients</Text>
          </View>
          <Text>{this.state.data.inconvenient}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <View style={styles.titleParent}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.title}>Modes d'emploi</Text>
          </View>
          <Text>{this.state.data.mode}</Text>
        </View>
        <View style={{ margin: 50 }}>
          <ButtonComponent
            backgroundColors={['#BF8173', '#BF8173']}
            text='Enregistrer'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  textColor: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'BalooBhai-Regular'
  },
  titleParent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    justifyContent: 'center',
    margin: 10,
    fontFamily: 'BalooBhai-Regular'
  }
});

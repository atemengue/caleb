import React, { Component } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import ButtonComponent from 'react-native-button-component/dist/ButtonComponent';

export default class MethodView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
      data: {}
    };
  }

  componentWillMount() {
    this.setState({ data: this.props.navigation.getParam('id') });
  }
  render() {
    const headerInterpolate = this.state.animation.interpolate({
      inputRange: [0, 100],
      outputRange: [200, 80],
      extrapolate: 'clamp'
    })

    const fontSizeInterpolate = this.state.animation.interpolate({
      inputRange: [0, 100],
      outputRange: [26, 20],
      extrapolate: 'clamp'
    })

    const headerStyle = {
      height: headerInterpolate,
    }

    const fontStyle = {
      fontSize: fontSizeInterpolate
    }
    console.log(this.state.data);
    return (
      <View style={{flex: 1 }}>
        <ScrollView
          contentContainerStyle={{paddingTop: 200}}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
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
          <Animated.View style={[styles.header, headerStyle ]}>
          <ImageBackground
            source={this.state.data.image}
            style={{ width: '100%', height: '100%' }}
          >
            <View style={styles.backView}>
              <Animated.Text style={[styles.textColor, fontStyle]}>{this.state.data.name}</Animated.Text>
            </View>
          </ImageBackground>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: 0,
    right: 0
  },
  backView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  textColor: {
    color: 'white',
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

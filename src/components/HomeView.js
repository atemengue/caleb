import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { method } from '../data/data';
import CardComponent from './cardComponent';

export default class HomeView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          style={styles.logout}
          onPress={() => navigation.navigate('switchOne')}
        >
          <Image
            source={require('../../assets/images/logout.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      )
    };
  };

  renderCard = () => {
    return method.map((item, index) => {
      return (
        <CardComponent
          key={index}
          source={item.image}
          title={item.name}
          description={item.description.substr(0, 200)}
          onPress={() => this.props.navigation.navigate('method', { id: item })}
        />
      );
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.methodText}>
          <Text style={styles.textColor}>Methodes</Text>
        </View>
        {this.renderCard()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  methodText: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BF8173'
  },
  textColor: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'BalooBhai-Regular'
  },
  logout: {
    marginRight: 10
  }
});

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardComponent = ({ onPress, title, description, source }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.cardContent}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={source}
        />
      </View>
      <View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  cardContent: {
    margin: 5
  },
  title: {
    fontSize: 16,
    fontFamily: 'BalooBhai-Regular'
  }
});

export default CardComponent;

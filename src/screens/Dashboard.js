import React from 'react';
import {Text, View} from 'react-native';

const Dashboard = ({params}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SWAPI</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    padding: 20,
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fbe83a',
    backgroundColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    // textShadowColor: 'blue',
  },
};

export default Dashboard;

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {commonStyles} from '../utils/Theme';

const CustomSidebarMenu = (props) => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>SWAPI</Text>
      <DrawerContentScrollView {...props}>
        <View style={styles.customItem}>
          <Text
            style={styles.label}
            onPress={() => {
              props.navigation.navigate('People');
            }}>
            People
          </Text>
        </View>
        <View style={styles.customItem}>
          <Text
            style={styles.label}
            onPress={() => {
              props.navigation.navigate('Films');
            }}>
            Films
          </Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = {
  customItem: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {fontSize: 18, fontWeight: 'bold', textAlign: 'center'},
};

export default CustomSidebarMenu;

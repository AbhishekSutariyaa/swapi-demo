import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import People from '../screens/People';
import Films from '../screens/Films';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import Details from '../screens/Details';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DashboardDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="People"
        options={{drawerLabel: 'People', title: 'People'}}
        component={People}
      />
      <Drawer.Screen
        name="Films"
        options={{drawerLabel: 'Films'}}
        component={Films}
      />
    </Drawer.Navigator>
  );
};
export default Routes;

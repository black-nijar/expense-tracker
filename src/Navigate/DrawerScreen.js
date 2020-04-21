import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TransactionList } from '../Components/TransactionList';
import AddTransaction from '../Components/AddTransaction';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
      <Drawer.Navigator>
      <Drawer.Screen name="Transaction" component={TransactionList} />
      <Drawer.Screen name="Add transaction" component={AddTransaction} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen;
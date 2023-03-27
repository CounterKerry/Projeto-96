import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer"
import TabNavigation from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    <Drawer.Navigation>
        <Drawer.Screen name="Início" component={TabNavigator}/>
        <Drawer.Screen name="Perfil" component={Profile}/>
    </Drawer.Navigation>
}

export default DrawerNavigator;
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { GetStarted, Splash, Register, UploadPhoto1, Messages, Profile, Login, Chatting } from '../pages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Messages" component={Messages} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {

    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="UploadPhoto1" component={UploadPhoto1} options={{headerShown: false}} />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
            <Stack.Screen name="Chatting" component={Chatting} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router
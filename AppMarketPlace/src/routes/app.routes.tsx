import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginWithEmailScreen} from '../screens/LoginWithEmailScreen';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginWithEmailScreen} />
        </Stack.Navigator>
    );
}

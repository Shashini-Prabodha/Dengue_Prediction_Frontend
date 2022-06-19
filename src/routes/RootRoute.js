import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screens --------------------------------------------------------------------------------------------------------------
import WelcomeScreen from '../screens/WelcomeScreen';
import DemoScreen from '../screens/InformationScreen';
import LogInScreen from '../screens/LogInScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeRoute from './HomeRoute';
import SignUpScreen from '../screens/SignUpScreen';
import UserDataInputScreen from '../screens/UserDataInputScreen';

//Create Stack ---------------------------------------------------------------------------------------------------------
const Stack = createStackNavigator();


const RootRoute = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isLaunch, setIsLaunch] = useState(null);

    useEffect(() => {

        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsLaunch(true);
            } else {
                setIsLaunch(false);
            }
        });

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    if (isLaunch === null) {
        return null;
    } else if (isLaunch === true) {
        return (
            isLoading ? <WelcomeScreen/> : (
                <NavigationContainer independent={true}>
                    <Stack.Navigator
                        shifting="true"
                        screenOptions={() => ({
                            headerShown: false,
                            gestureEnabled: true,
                            cardOverlayEnabled: false,
                            gestureDirection: 'horizontal',
                        })}
                    >
                        <Stack.Screen name="LogInScreen" component={LogInScreen}/>

                    </Stack.Navigator>
                </NavigationContainer>
            )
        );
    } else {
        return (
            isLoading ? <WelcomeScreen/> : (
                <NavigationContainer independent={true}>
                    <Stack.Navigator
                        shifting="true"
                        screenOptions={() => ({
                            headerShown: false,
                            gestureEnabled: true,
                            cardOverlayEnabled: false,
                            gestureDirection: 'horizontal',
                        })}
                    >
                        {/*<Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>*/}
                        {/*<Stack.Screen name="UserDataInputScreen" component={UserDataInputScreen}/>*/}
                        {/*<Stack.Screen name="LogInScreen" component={LogInScreen}/>*/}
                        {/*<Stack.Screen name="SignUpScreen" component={SignUpScreen}/>*/}
                        <Stack.Screen name="HomeRoute" component={HomeRoute}/>


                    </Stack.Navigator>
                </NavigationContainer>
            )
        );
    }
};

export default RootRoute;

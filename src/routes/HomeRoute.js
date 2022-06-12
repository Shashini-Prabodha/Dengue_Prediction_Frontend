import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, StyleSheet} from "react-native";

//Import Screens -------------------------------------------------------------------------------------------------------
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import DemoScreen from "../screens/DemoScreen";

//Tab Navigator --------------------------------------------------------------------------------------------------------
const Tab = createMaterialBottomTabNavigator();

const HomeRoute = () => {
    return (
        <NavigationContainer independent={true}>

            {/*Tab Screens ------------------------------------------------------------------------------------------*/}
            <Tab.Navigator
                initialRouteName="DemoScreen"
                activeColor="#F52D54"
                inactiveColor="#F52D54"
                barStyle={[{backgroundColor: '#202020'}]}
                shifting="true"
                screenOptions={() => ({
                    headerShown: false,
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    gestureDirection: 'horizontal',
                })}
            >
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color}) => (
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={styles.menuIcons}
                            />
                        ),
                    }}
                    name="HomeScreen"
                    component={HomeScreen}
                />


                <Tab.Screen
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({color}) => (
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={styles.MenuLogo}
                            />
                        ),
                    }}
                    name="DemoScreen"
                    component={DemoScreen}
                />

                <Tab.Screen
                    options={{
                        tabBarLabel: 'Report',
                        tabBarIcon: ({color}) => (
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode="contain"
                                style={styles.menuIcons}
                            />
                        ),
                    }}
                    name="ReportScreen"
                    component={ReportScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    MenuLogo: {
        width: 38,
        height: 38,
        marginTop: "-25%"
    },
    menuIcons: {
        width: 30,
        height: 30,
        marginTop: "-15%"
    }
});

export default HomeRoute;

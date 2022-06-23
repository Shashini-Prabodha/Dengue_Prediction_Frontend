import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, StyleSheet} from "react-native";

//Import Screens -------------------------------------------------------------------------------------------------------
import HomeScreen from "../screens/HomeScreen";
import ToDoScreen from "../screens/ToDoScreen";
import InformationScreen from "../screens/InformationScreen";
import ProfileScreen from "../screens/ProfileScreen";

//Tab Navigator --------------------------------------------------------------------------------------------------------
const Tab = createMaterialBottomTabNavigator();

const HomeRoute = () => {


    return (
        <NavigationContainer independent={true}>

            {/*Tab Screens ------------------------------------------------------------------------------------------*/}
            <Tab.Navigator
                initialRouteName="HomeScreen"
                activeColor="#F52D54"
                inactiveColor="#F52D54"
                barStyle={[{backgroundColor: '#181818'}]}
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
                        tabBarLabel: 'Information',
                        tabBarIcon: ({color}) => (
                            <Image
                                source={require('../assets/icons/activity_history_50px.png')}
                                resizeMode="contain"
                                style={styles.MenuLogo}
                            />
                        ),
                    }}
                    name="InformationScreen"
                    component={InformationScreen}
                />

                <Tab.Screen
                    options={{
                        tabBarLabel: 'To-Do',
                        tabBarIcon: ({color}) => (
                            <Image
                                source={require('../assets/icons/checklist_50px.png')}
                                resizeMode="contain"
                                style={styles.menuIcons}
                            />
                        ),
                    }}
                    name="ReportScreen"
                    component={ToDoScreen}
                />

                <Tab.Screen
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({color}) => (
                            <Image
                                source={require('../assets/icons/profile.png')}
                                resizeMode="contain"
                                style={styles.MenuLogo}
                            />
                        ),
                    }}
                    name="ProfileScreen"
                    component={ProfileScreen}
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

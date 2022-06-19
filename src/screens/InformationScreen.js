import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import * as Animatable from 'react-native-animatable';
import {createStackNavigator} from '@react-navigation/stack';
import SymptomsScreen from './SymptomsScreen';
import {useNavigation} from '@react-navigation/native';
import AboutDisesScreen from './AboutDisesScreen';
import ControlInSideScreen from './ControlInSideScreen';
import ControlOutSideScreen from './ControlOutSideScreen';
import FoodScreen from './FoodScreen';
import DiagnosisTreatScreen from './DiagnosisTreatScreen';

const InfoCardStack = createStackNavigator();

const InformationScreen = () => {

    const useNavigate = useNavigation();

    const navigateInfoCard1 = () => {
        useNavigate.navigate('SymptomsScreen');
    };

    const navigateInfoCard2 = () => {
        useNavigate.navigate('AboutDisesScreen');
    };
    const navigateInfoCard3 = () => {
        useNavigate.navigate('ControlOutSideScreen');
    };
    const navigateInfoCard4 = () => {
        useNavigate.navigate('ControlInSideScreen');
    };

    const navigateInfoCard5 = () => {
        useNavigate.navigate('FoodScreen');
    };

    const navigateInfoCard6 = () => {
        useNavigate.navigate('DiagnosisTreatScreen');
    };

    return (
        <Animatable.View style={styles.container} animation="fadeInRight">
            <View style={styles.mainView}>

                {/*Title View ---------------------------------------------------------------------------------------*/}
                <View style={styles.titleMainView}>
                    <View style={styles.topView}>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>INFORMATION</Text>
                        </View>
                        <Image
                            source={require('../assets/icons/d1.png')}
                            resizeMode="contain"
                            style={styles.logo}>
                        </Image>
                    </View>
                </View>


                {/*information view ---------------------------------------------------------------------------------*/}
                <View style={styles.infoContentView}>

                    {/*Info card section ----------------------------------------------------------------------------*/}
                    <View style={styles.infoCardSection}>
                        <TouchableOpacity style={styles.infoCardView}
                                          onPress={() => navigateInfoCard2()}
                        >
                            <ImageBackground
                                source={require('../assets/icons/card1.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                                <View style={styles.infoCardTitleView}>
                                    <Text style={styles.infoCardText}>
                                        About Dengue Disease
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <View style={styles.infoMidView}/>
                        <TouchableOpacity style={styles.infoCardView}
                                          onPress={() => navigateInfoCard1()}
                        >
                            <ImageBackground
                                source={require('../assets/icons/sample-img.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                                <View style={styles.infoCardTitleView}>
                                    <Text style={styles.infoCardText}>
                                        Symptoms of Dengue
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.infoCardSection}>
                        <TouchableOpacity style={styles.infoCardView}
                                          onPress={() => navigateInfoCard3()}
                        >
                            <ImageBackground
                                source={require('../assets/icons/control.png')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                                <View style={styles.infoCardTitleView}>
                                    <Text style={styles.infoCardText}>
                                        Control Mosquitoes Outside Your Home
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <View style={styles.infoMidView}/>

                        <TouchableOpacity style={styles.infoCardView}
                                          onPress={() => navigateInfoCard4()}>
                            <ImageBackground
                                source={require('../assets/icons/in.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                                <View style={styles.infoCardTitleView}>
                                    <Text style={styles.infoCardText}>
                                        Control  Mosquitoes  Inside Your Home
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.infoCardSection}>
                        <TouchableOpacity style={styles.infoCardView}
                                          onPress={() => navigateInfoCard5()}
                        >
                            <ImageBackground
                                source={require('../assets/icons/food.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                                <View style={styles.infoCardTitleView}>
                                    <Text style={styles.infoCardText}>
                                        Food for Dengue
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <View style={styles.infoMidView}/>

                        <TouchableOpacity style={styles.infoCardView}
                                          onPress={() => navigateInfoCard6()}>
                            <ImageBackground
                                source={require('../assets/icons/treat.png')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                                <View style={styles.infoCardTitleView}>
                                    <Text style={styles.infoCardText}>
                                        Diagnosis & Treatment
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    {/*<View style={styles.infoCardSection}>*/}
                    {/*    <TouchableOpacity style={styles.infoCardView}>*/}
                    {/*        <ImageBackground*/}
                    {/*            source={require('../assets/icons/sample-img.jpg')}*/}
                    {/*            resizeMode="cover"*/}
                    {/*            style={styles.infoImg}>*/}
                    {/*            <View style={styles.infoCardTitleView}>*/}
                    {/*                <Text style={styles.infoCardText}>*/}
                    {/*                    Info Card 07*/}
                    {/*                </Text>*/}
                    {/*            </View>*/}
                    {/*        </ImageBackground>*/}
                    {/*    </TouchableOpacity>*/}

                    {/*    <View style={styles.infoMidView}/>*/}

                    {/*    <TouchableOpacity style={styles.infoCardView}>*/}
                    {/*        <ImageBackground*/}
                    {/*            source={require('../assets/icons/sample-img.jpg')}*/}
                    {/*            resizeMode="cover"*/}
                    {/*            style={styles.infoImg}>*/}
                    {/*            <View style={styles.infoCardTitleView}>*/}
                    {/*                <Text style={styles.infoCardText}>*/}
                    {/*                    Info Card 08*/}
                    {/*                </Text>*/}
                    {/*            </View>*/}
                    {/*        </ImageBackground>*/}
                    {/*    </TouchableOpacity>*/}
                    {/*</View>*/}


                </View>

                {/*bottom view --------------------------------------------------------------------------------------*/}
                <View style={styles.bottomView}>
                    <View style={styles.bottom}>
                        <WavyBackground
                            height={400}
                            width={1300}
                            amplitude={50}
                            frequency={1}
                            offset={180}
                            color="rgba(155,155,155,0.3)"
                        />
                    </View>
                    <View style={styles.bottom2}>
                        <WavyBackground
                            height={400}
                            width={1300}
                            amplitude={50}
                            frequency={1}
                            offset={180}
                            color="rgba(255,72,72,0.5)"
                        />
                    </View>
                </View>
            </View>
        </Animatable.View>
    );
};

const InfoCardStackScreen = () => (
    <InfoCardStack.Navigator screenOptions={{headerShown: false}}>
        <InfoCardStack.Screen name={'InformationScreen'} component={InformationScreen}/>
        <InfoCardStack.Screen name={'ControlInSideScreen'} component={ControlInSideScreen}/>
        <InfoCardStack.Screen name={'ControlOutSideScreen'} component={ControlOutSideScreen}/>
        <InfoCardStack.Screen name={'SymptomsScreen'} component={SymptomsScreen}/>
        <InfoCardStack.Screen name={'AboutDisesScreen'} component={AboutDisesScreen}/>
        <InfoCardStack.Screen name={'FoodScreen'} component={FoodScreen}/>
        <InfoCardStack.Screen name={'DiagnosisTreatScreen'} component={DiagnosisTreatScreen}/>
    </InfoCardStack.Navigator>
);

export default InfoCardStackScreen;

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#ff00ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // titleMainView: {
    //     width: '100%',
    //     height: '10%',
    //     backgroundColor: '#2e42a6',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    infoContentView: {
        width: '100%',
        height: '82%',
        // backgroundColor: '#64e79d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomView: {
        width: '100%',
        height: '4.5%',
        // backgroundColor: '#ff6a00'
    },
    infoCardSection: {
        width: '98%',
        height: '32%',
        // backgroundColor: '#6b6b6b',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 30,

    },
    infoCardView: {
        width: '47%',
        height: '92%',
        borderRadius: 30,
    },
    infoMidView: {
        width: '2%',

    },
    infoImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10,

    },
    infoCardTitleView: {
        width: '100%',
        height: '35%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoCardText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        width: '100%',
        height: '8%',
        bottom: -55,
        rotation: 180,
        position: 'absolute',
        zIndex: 1,
    },
    bottom2: {
        width: '100%',
        height: '5%',
        bottom: -80,
        rotation: 180,
        position: 'absolute',
        zIndex: 2,
    },
    titleMainView: {
        width: '100%',
        height: '10%',
        // backgroundColor: '#ff0f00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#f6a800',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    titleView: {
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        // backgroundColor: 'rgba(224,224,224,0.8)',

    },
    title: {

        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // topView: {
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: '#ec2edc',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    //
    // },
    // titleView: {
    //     width: '80%',
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignSelf:'center',
    //     borderRadius: 100,
    //     backgroundColor: 'rgb(85,253,13)',
    // },
    // title: {
    //     fontSize: 25,
    //     fontFamily: 'Poppins-SemiBold',
    //     color: '#000000',
    //
    // },
    logo: {
        width: 55,
        height: 55,

    },
});


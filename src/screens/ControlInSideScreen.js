import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WavyBackground from 'react-native-wavy-background';
import Unorderedlist from 'react-native-unordered-list';

const ControlInSideScreen = () => {

    const useNavigate = useNavigation();

    const navigateDemo = () => {
        useNavigate.navigate('DemoScreen');
    };


    return (
        <View style={styles.container}>
            <View style={styles.titleMainView}>
                <View style={styles.topView}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>
                            CONTROL MOSQUITOES INSIDE YOUR HOME
                        </Text>
                    </View>
                    <Image
                        source={require('../assets/icons/d1.png')}
                        resizeMode="contain"
                        style={styles.logo}>
                    </Image>
                </View>
            </View>

            <View style={styles.content}>
                <ScrollView style={styles.screen}>

                    <View style={styles.details}>
                        <View style={styles.detailsView}>
                            <Text style={styles.h1}>
                                Keep Mosquitoes Out
                            </Text>
                            <Text style={{fontSize: 15,marginTop:'2%'}}>
                                To keep mosquitoes outside of your home, you can:

                            </Text>


                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>
                                Install or repair and use window and door screens.
                            </Text></Unorderedlist>
                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}> Close doors, including garage doors. Do not leave doors propped
                                open.</Text></Unorderedlist>
                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}> Use air conditioning when possible.</Text></Unorderedlist>

                            <Text style={styles.h1}>
                                Control Mosquitoes Inside Your Home
                            </Text>
                            <Text style={{fontSize: 15,marginTop:'2%'}}>
                                Mosquitoes rest in dark, humid places like under sinks, in showers, in closets, under
                                furniture, or in the laundry room. Mosquitoes entering your house from outdoors can
                                start laying eggs indoors. Take the following steps:
                            </Text>
                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>
                                Once a week, empty and scrub, turn over, cover, or throw out any items that hold water,
                                such as vases or flowerpot saucers, to remove mosquito eggs and larvae.
                            </Text></Unorderedlist>
                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>Use an indoor insecticide if you still have mosquitoes in your home
                                after installing and repairing screens and emptying and scrubbing
                                containers.</Text>
                                <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>An indoor insect spray or fogger will kill mosquitoes and treat
                                    areas where they rest.</Text>
                                    <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>These products work quickly but may need to be
                                        reapplied.</Text></Unorderedlist>
                                    <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>Always follow label directions.</Text></Unorderedlist>
                                    <Unorderedlist style={{marginTop: '2%'}}><Text  style={{marginTop: '2%'}}>Using only an indoor insecticide will not keep your home free
                                        of mosquitoes.</Text></Unorderedlist>

                                </Unorderedlist>

                                <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>Hire a pest control professional to treat areas inside your
                                    home.</Text>
                                </Unorderedlist>
                                <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>For more information on insecticides and health:</Text>
                                    <Unorderedlist><Text>The Environmental Protection Agency oversees the registration
                                        of these chemicals.</Text></Unorderedlist>

                                </Unorderedlist>

                            </Unorderedlist>


                        </View>
                    </View>

                    <View style={styles.imageView}>
                        <View style={styles.detailsView}>

                            <ImageBackground
                                source={require('../assets/icons/inside.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                            </ImageBackground>
                        </View>
                    </View>

                </ScrollView>
            </View>

            <View style={styles.footer}>
                {/*bottom view --------------------------------------------------------------------------------------*/}
                {/*<View style={styles.bottomView}>*/}
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
                {/*</View>*/}
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffcf00'
    },
    titleMainView: {
        width: '100%',
        height: '15%',
        // backgroundColor: '#ff0f00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#f6a800',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    titleView: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        // backgroundColor: 'rgba(224,224,224,0.8)',

    },
    title: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',

    },

    screen: {
        // width: '100%',
        // height: '100%',
        // backgroundColor: '#ffcf00',

    },
    details: {
        width: '100%',
        height: 650,
        // backgroundColor: '#b60000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsView: {
        width: '90%',
        height: '100%',
        // backgroundColor: '#4d29a9',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    imageView: {
        width: '100%',
        height: 370,
        // backgroundColor: '#13c7b0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    midSpace: {
        height: 10,
    },
    text: {
        fontSize: 20,
        color: '#000000',
    },
    logo: {
        width: 55,
        height: 55,

    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#820e8a',
        marginTop: '5%',
    },
    content: {
        width: '100%',
        height: '75%',
        // backgroundColor: '#377db6',
    },
    btn: {
        width: '80%',
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        // backgroundColor: '#ff6a00'
    },
    // bottomView: {
    //     width: '100%',
    //     height: '10%',
    //     // backgroundColor: '#ff6a00'
    // },
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
    infoImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10,

    },
});

export default ControlInSideScreen;

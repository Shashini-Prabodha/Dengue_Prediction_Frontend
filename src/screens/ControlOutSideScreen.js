import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WavyBackground from 'react-native-wavy-background';
import Unorderedlist from 'react-native-unordered-list';

const ControlOutSideScreen = () => {

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
                            CONTROL MOSQUITOES OUTSIDE YOUR HOME
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
                                Remove Standing Water Where Mosquitoes Lay Eggs
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                Once a week, empty and scrub, turn over, cover, or throw out any items that hold water
                                like tires, buckets, planters, toys, pools, birdbaths, flowerpot saucers, or trash
                                containers. Mosquitoes lay eggs near water.
                            </Text></Unorderedlist>
                            <Unorderedlist><Text style={{marginTop: '2%'}}>Tightly cover water storage containers (buckets, cisterns, rain
                                barrels) so mosquitoes cannot get inside to lay eggs</Text></Unorderedlist>
                            <Unorderedlist><Text style={{marginTop: '2%'}}> For containers without lids, use wire mesh with holes smaller than an
                                adult mosquito.</Text></Unorderedlist>
                            <Unorderedlist><Text style={{marginTop: '2%'}}> Fill tree holes to prevent them from filling with
                                water.</Text></Unorderedlist>
                            <Unorderedlist><Text style={{marginTop: '2%'}}> If you have a septic tank, repair cracks or gaps. Cover open vent or
                                plumbing pipes. Use wire mesh with holes smaller than an adult
                                mosquito.</Text></Unorderedlist>

                            <Text style={styles.h1}>
                                Kill Mosquito Larvae Outside Your Home
                            </Text>

                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>
                                Use larvicides to treat large bodies of water that will not be used for drinking and cannot be covered or dumped out.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '2%'}}><Text style={{marginTop: '2%'}}>
                                When using larvicides, always follow label instructions.
                            </Text></Unorderedlist>

                            <Text style={styles.h1}>
                                Kill Mosquitoes Outside Your Home
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '2%'}}>
                                Use an outdoor adulticide to kill adult mosquitoes in areas where they rest.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '2%'}}>
                                Mosquitoes rest in dark, humid areas like under patio furniture or under the carport or garage. When using insecticides, always follow label instructions.
                            </Text></Unorderedlist>

                        </View>
                    </View>

                    <View style={styles.imageView}>
                        <View style={styles.detailsView}>

                            <ImageBackground
                                source={require('../assets/icons/out.jpg')}
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
        height: 600,
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
        height: 530,
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


export default ControlOutSideScreen;

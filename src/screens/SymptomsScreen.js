import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WavyBackground from 'react-native-wavy-background';
import Unorderedlist from 'react-native-unordered-list';

const SymptomsScreen = () => {

    const useNavigate = useNavigation();

    const navigateDemo = () => {
        useNavigate.navigate('DemoScreen');
    };


    return (
        <View style={styles.container}>
            <View style={styles.titleMainView}>
                <View style={styles.topView}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>SYMPTOMS OF DENGUE</Text>
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
                                Patients should seek medical advice in the presence of following features particularly
                                when fever settles:
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>Severe
                                vomiting</Text></Unorderedlist>
                            <Unorderedlist><Text>Abdominal pain </Text></Unorderedlist>
                            <Unorderedlist><Text>Increase thrust</Text></Unorderedlist>
                            <Unorderedlist><Text>Drowsiness and excessive sleepiness</Text></Unorderedlist>
                            <Unorderedlist><Text>Refusing to eat or drink</Text></Unorderedlist>
                            <Unorderedlist><Text>Abnormal bleeding manifestations – eg: heavy menstrual bleeding or
                                menstruation starting earlier than usual</Text></Unorderedlist>
                            <Unorderedlist><Text>Reduced urine output</Text></Unorderedlist>

                            <Text style={styles.h1}>
                                If the following features are present seek medical attention immediately:
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>Cold clammy skin
                                and extremities</Text></Unorderedlist>
                            <Unorderedlist><Text>Restless and irritability</Text></Unorderedlist>
                            <Unorderedlist><Text>Skin mottling</Text></Unorderedlist>
                            <Unorderedlist><Text>Decreased/no urine output</Text></Unorderedlist>
                            <Unorderedlist><Text>Behaviour changes – confusion or using foul
                                language</Text></Unorderedlist>
                        </View>
                    </View>

                    <View style={styles.imageView}>
                        <View style={styles.detailsView}>

                            <ImageBackground
                                source={require('../assets/icons/symptoms.jpg')}
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
        height: '8%',
        // backgroundColor: '#ff0f00',
        justifyContent: 'center',
        alignItems: 'center'
    },topView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#f6a800',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

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
        height: 400,
        // backgroundColor: '#b60000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsView: {
        width: '90%',
        height: '90%',
        // backgroundColor: '#4d29a9',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: '80%',
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

export default SymptomsScreen;

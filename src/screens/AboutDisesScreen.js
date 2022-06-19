import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WavyBackground from 'react-native-wavy-background';
import Unorderedlist from 'react-native-unordered-list';

const AboutDisesScreen = () => {

    const useNavigate = useNavigation();

    const navigateDemo = () => {
        useNavigate.navigate('DemoScreen');
    };


    return (
        <View style={styles.container}>
            <View style={styles.titleMainView}>
                <View style={styles.topView}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>ABOUT DENGUE DISEASE</Text>
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
                                Dengue is a mosquito-borne viral disease that has rapidly spread to all regions of WHO
                                in recent years. Dengue virus is transmitted by female mosquitoes mainly of the species
                                Aedes aegypti and, to a lesser extent, Ae. albopictus. These mosquitoes are also vectors
                                of chikungunya, yellow fever and Zika viruses. Dengue is widespread throughout the
                                tropics, with local variations in risk influenced by climate parameters as well as
                                social and environmental factors.
                            </Text>


                            <Text style={styles.h1}>
                                Dengue causes a wide spectrum of disease. This can range from subclinical disease
                                (people may not know they are even infected) to severe flu-like symptoms in those
                                infected. Although less common, some people develop severe dengue, which can be any
                                number of complications associated with severe bleeding, organ impairment and/or plasma
                                leakage. Severe dengue has a higher risk of death when not managed appropriately. Severe
                                dengue was first recognized in the 1950s during dengue epidemics in the Philippines and
                                Thailand. Today, severe dengue affects most Asian and Latin American countries and has
                                become a leading cause of hospitalization and death among children and adults in these
                                regions.
                            </Text>

                            <Text style={styles.h1}>
                                Dengue is caused by a virus of the Flaviviridae family and there are four distinct, but
                                closely related, serotypes of the virus that cause dengue (DENV-1, DENV-2, DENV-3 and
                                DENV-4). Recovery from infection is believed to provide lifelong immunity against that
                                serotype. However, cross-immunity to the other serotypes after recovery is only partial,
                                and temporary. Subsequent infections (secondary infection) by other serotypes increase
                                the risk of developing severe dengue.
                            </Text>

                            <Text style={styles.h1}>
                                Dengue has distinct epidemiological patterns, associated with the four serotypes of the
                                virus. These can co-circulate within a region, and indeed many countries are
                                hyper-endemic for all four serotypes. Dengue has an alarming impact on both human health
                                and the global and national economies. DENV is frequently transported from one place to
                                another by infected travellers; when susceptible vectors are present in these new areas,
                                there is the potential for local transmission to be established.

                            </Text>
                        </View>
                    </View>

                    <View style={styles.imageView}>
                        {/*<View style={styles.detailsView}>*/}

                            <ImageBackground
                                source={require('../assets/icons/65930299.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                            </ImageBackground>
                        {/*</View>*/}
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
        height: 850,
        // backgroundColor: '#b60000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsView: {
        width: '90%',
        height: '100%',
        // backgroundColor: '#09bac0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        width: '90%',
        height: 400,
        // backgroundColor: '#9f8a22',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        alignSelf:'center'
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
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#333333',
        marginTop: '5%',
        textAlign: 'justify',

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
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AboutDisesScreen;

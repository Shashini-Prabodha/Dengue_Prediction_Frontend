import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WavyBackground from 'react-native-wavy-background';
import Unorderedlist from 'react-native-unordered-list';

const DiagnosisTreatScreen = () => {

    const useNavigate = useNavigation();

    const navigateDemo = () => {
        useNavigate.navigate('DemoScreen');
    };


    return (
        <View style={styles.container}>
            <View style={styles.titleMainView}>
                <View style={styles.topView}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}> DIAGNOSIS & TREATMENT</Text>
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
                                Diagnosis
                            </Text>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}>Diagnosing dengue fever can be
                                difficult because its signs
                                and symptoms can be easily confused with those of other diseases — such as chikungunya,
                                Zika virus, malaria and typhoid fever.
                            </Text>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}>Your doctor will likely ask about your
                                medical and travel
                                history. Be sure to describe international trips in detail, including the countries you
                                visited and the dates, as well as any contact you may have had with mosquitoes.
                            </Text>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}>Your doctor may also draw a sample of
                                blood to be tested in
                                a lab for evidence of infection with one of the dengue viruses.
                            </Text>


                            <Text style={styles.h1}>
                                Treatment
                            </Text>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}> No specific treatment for dengue
                                fever exists.
                            </Text>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}> While recovering from dengue
                                fever,drink plenty of fluids. Call your doctor right away if
                                you have any of the following signs and symptoms of dehydration:
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>Decreased
                                urination</Text></Unorderedlist>
                            <Unorderedlist><Text>Few or no tears</Text></Unorderedlist>
                            <Unorderedlist><Text>Dry mouth or lips</Text></Unorderedlist>
                            <Unorderedlist><Text>Lethargy or confusion</Text></Unorderedlist>
                            <Unorderedlist><Text>Cold or clammy extremities</Text></Unorderedlist>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}> The over-the-counter (OTC) drug
                                acetaminophen (Tylenol, others) can help reduce muscle pain and fever. But if you have
                                dengue fever, you should avoid other OTC pain relievers, including aspirin, ibuprofen
                                (Advil, Motrin IB, others) and naproxen sodium (Aleve). These pain relievers can
                                increase the risk of dengue fever bleeding complications.
                            </Text>

                            <Text style={{marginTop: '2%', textAlign: 'justify'}}> If you have severe dengue fever, you may need:
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>Supportive care in a hospital</Text></Unorderedlist>
                            <Unorderedlist><Text>Intravenous (IV) fluid and electrolyte replacement</Text></Unorderedlist>
                            <Unorderedlist><Text>Dry mouth or lips</Text></Unorderedlist>
                            <Unorderedlist><Text>Blood pressure monitoring</Text></Unorderedlist>
                            <Unorderedlist><Text>Transfusion to replace blood loss</Text></Unorderedlist>


                        </View>
                    </View>

                    <View style={styles.imageView}>
                        <View style={styles.detailsView}>

                            <ImageBackground
                                source={require('../assets/icons/ambulance.jpg')}
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
        height: 750,
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

export default DiagnosisTreatScreen;

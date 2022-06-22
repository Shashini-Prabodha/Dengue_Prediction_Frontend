import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import WavyBackground from 'react-native-wavy-background';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
    return (


        <Animatable.View style={styles.container} animation="fadeInRight" >

            <View style={styles.bottom}>
                <WavyBackground
                                height={400}
                                width={1300}
                                amplitude={50}
                                frequency={1}
                                offset={180}
                                color='rgba(155,155,155,0.3)'
                />
            </View>
            <View style={styles.bottom2}>
                <WavyBackground
                    height={400}
                    width={1300}
                    amplitude={50}
                    frequency={1}
                    offset={180}
                    color='rgba(255,72,72,0.5)'
                />
            </View>
            <View style={styles.homeTopView}>
                <View style={styles.homeTitleView}>
                    <Text style={styles.homeTitle}>DAILY UPDATES</Text>
                </View>
                <Image
                    source={require('../assets/icons/d1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>
            </View>

            {/*Home Content View ------------------------------------------------------------------------------------*/}
            <View style={styles.homeContentView}>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                    <Animatable.View style={styles.ZoneCardView} >
                        <TouchableOpacity style={styles.ZoneCard}>

                            <View style={styles.homeCol0Top}>

                                <View style={styles.homeCol0TxtView}>
                                    <Text style={styles.ZoneTitleTxt}>Your District Zone</Text>
                                </View>

                                <View style={styles.zoneCircleView}>
                                    <View style={styles.zoneCircle}>
                                        {/*<Image*/}
                                        {/*    source={require('../assets/icons/zone.png')}*/}
                                        {/*    resizeMode="contain"*/}
                                        {/*    style={styles.homeCol0Logo}>*/}
                                        {/*</Image>*/}
                                        <LottieView style={styles.icon}
                                                    source={require('../assets/icons/rd2.json')}
                                                    colorFilters={[{
                                                        keypath: "button",
                                                        color: "#F00000"
                                                    }, {
                                                        keypath: "Sending Loader",
                                                        color: "#F00000"
                                                    }]}
                                                    autoPlay
                                                    loop
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.zoneColMid}>
                                <Text style={styles.zoneMidTxt}>Yellow Zone</Text>
                            </View>

                        </TouchableOpacity>

                        <View style={styles.HomeMiniCardMidSpace}/>

                    </Animatable.View>

                    <View style={styles.HomeCardMidSpace}/>

                    <Animatable.View style={styles.HomeCardView} >
                        <View style={styles.HomeCardSection1}>
                            <View style={styles.homeCol0Top}>

                                <View style={styles.homeCol0TxtView}>
                                    <Text style={styles.homeCol0Txt}>District</Text>
                                </View>

                                <View style={styles.homeCol0CircleView}>
                                    <View style={styles.homeCol0Circle}>
                                        <Image
                                            source={require('../assets/icons/img_2.png')}
                                            resizeMode="contain"
                                            style={styles.homeCol0Logo}>
                                        </Image>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.homeColMid}>
                                <Text style={styles.homeColMidTxt}>Polonnaruwa</Text>
                            </View>

                            <View style={styles.homeCol0Bottom}>
                                <Text style={styles.changeDis}>
                                    Change
                                </Text>
                            </View>

                        </View>

                        <View style={styles.HomeMiniCardMidSpace}/>

                        <View style={styles.HomeCardSection2}>

                            <View style={styles.homeCol0Top}>

                                <View style={styles.homeCol0TxtView}>
                                    <Text style={styles.homeCol0Txt}>This Month Cases</Text>
                                </View>

                                <View style={styles.homeCol0CircleView}>
                                    <View style={styles.homeCol0Circle}>
                                        <Image
                                            source={require('../assets/icons/present_48px.png')}
                                            resizeMode="contain"
                                            style={styles.homeCol0Logo}>
                                        </Image>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.homeColMid}>
                                <Text style={styles.homeColMidTxt}>5000</Text>
                            </View>


                        </View>
                    </Animatable.View>

                    <View style={styles.HomeCardMidSpace}/>

                    <Animatable.View style={styles.HomeCardView} >
                        <View style={styles.HomeCardSection3}>

                            <View style={styles.homeCol0Top}>

                                <View style={styles.homeCol0TxtView}>
                                    <Text style={styles.homeCol0Txt}>Last Month Cases</Text>
                                </View>

                                <View style={styles.homeCol0CircleView}>
                                    <View style={styles.homeCol0Circle}>
                                        <Image
                                            source={require('../assets/icons/tenses_52px.png')}
                                            resizeMode="contain"
                                            style={styles.homeCol0Logo}>
                                        </Image>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.homeColMid}>
                                <Text style={styles.homeColMidTxt}>452</Text>
                            </View>


                        </View>

                        <View style={styles.HomeMiniCardMidSpace}/>

                        <View style={styles.HomeCardSection4}>

                            <View style={styles.homeCol0Top}>

                                <View style={styles.homeCol0TxtView}>
                                    <Text style={styles.homeCol0Txt}>This Year</Text>
                                </View>

                                <View style={styles.homeCol0CircleView}>
                                    <View style={styles.homeCol0Circle}>
                                        <Image
                                            source={require('../assets/icons/calendar_22_52px.png')}
                                            resizeMode="contain"
                                            style={styles.homeCol0Logo}>
                                        </Image>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.homeColMid}>
                                <Text style={styles.homeColMidTxt}> 54200</Text>
                            </View>


                        </View>
                    </Animatable.View>

                    <View style={styles.HomeCardMidSpace}/>


                </ScrollView>
            </View>

            <View style={styles.homeBottomView}>

            </View>
        </Animatable.View>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeTopView: {
        width: '100%',
        height: '12%',
        // backgroundColor: '#f6a800',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    homeTitleView: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        // backgroundColor: 'rgba(224,224,224,0.8)',

    },
    homeTitle: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',

    },
    //Home Content -------------------------------------------------------------
    homeContentView: {
        width: '90%',
        height: '85%',
        justifyContent: 'center',
        // backgroundColor: '#eb4d4b',
        position: 'relative',
        top: '2%',

    },
    ZoneCardView: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        // backgroundColor: '#1580bb',

    },
    ZoneTitleTxt: {
        fontSize: 18,
        color: '#ffffff',
        marginLeft: '5%',
        fontFamily: 'Poppins-LightItalic',
    },
    zoneMidTxt: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        // marginLeft:18,
        justifyContent: 'center',
        // backgroundColor:'#00ff00',
        alignSelf: 'center',
    },
    zoneCircleView: {

        borderTopRightRadius: 25,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '5%',
        bottom: '-10%',
    },
    zoneCircle: {
        width: 75,
        height: 75,
        borderRadius: 100,
        // margin:40,
        backgroundColor: 'rgba(215,215,215,0.37)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    zoneColMid: {
        width: '65%',
        height: '35%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginRight: '15%',
    },
    HomeCardView: {
        width: '100%',
        height: 180,
        flexDirection: 'row',
        // backgroundColor: '#1580bb',

    },

    homeCol0Top: {
        width: '100%',
        height: '35%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    homeCol0Txt: {
        fontSize: 15,
        color: '#000000',
        margin: '5%',
        fontFamily: 'Poppins-LightItalic',
    },
    homeCol0TxtView: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeCol0CircleView: {
        width: '37%',
        height: '100%',
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeCol0Circle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: '-12%',
        backgroundColor: 'rgba(96,96,96,0.58)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    homeCol0Logo: {
        width: '50%',
        height: '50%',
    },
    homeColMid: {
        width: '100%',
        height: '35%',
        justifyContent: 'center',
    },
    homeColMidTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#090909',
        // marginLeft:18,
        justifyContent: 'center',
        fontFamily: 'Poppins-LightItalic',
        alignSelf: 'center',
    },
    homeCol0Bottom: {
        width: '100%',
        height: '27%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: 'center',
    },
    changeDis: {
        textAlign: 'right',
        fontSize: 17,
        marginRight: '10%',
        color: '#ffffff',
    },
    HomeCardMidSpace: {
        height: 20,
    },
    HomeMiniCardMidSpace: {
        width: '4%',
        height: '100%',
        // backgroundColor:'#00ff00'
    },
    HomeCardSection1: {
        width: '48%',
        height: '100%',
        borderRadius: 27,
        // borderColor:'#eb4d4b',
        // borderWidth:2,
        backgroundColor: '#ffffff',
        // backgroundColor: '#eb4d4b',
        shadowColor: '#4b4b4b',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 10,

    },
    //Card 2---------------------------
    HomeCardSection2: {
        width: '48%',
        height: '100%',
        borderRadius: 27,
        // borderWidth:2,
        // borderColor:'#7158e2',
        backgroundColor: '#ffffff',
        // backgroundColor: '#7158e2',
        shadowColor: '#4b4b4b',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 10,
    },

    //Card 3---------------------------
    HomeCardSection3: {
        width: '48%',
        height: '100%',
        borderRadius: 27,
        // borderWidth:2,
        // borderColor:'#ff9f1a',
        backgroundColor: '#ffffff',
        // backgroundColor: '#ff9f1a',
        shadowColor: '#4b4b4b',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 10,
    },

    //Card 4---------------------------
    HomeCardSection4: {
        width: '48%',
        height: '100%',
        borderRadius: 27,
        // borderWidth:2,
        // borderColor:'#17c0eb',
        backgroundColor: '#ffffff',
        // backgroundColor: '#17c0eb',
        shadowColor: '#4b4b4b',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 10,
    },

    //Card 5---------------------------
    ZoneCard: {
        width: '98%',
        height: '100%',
        borderRadius: 27,

        // backgroundColor: '#ffffff',
        backgroundColor: '#ecd807',
        shadowColor: '#050505',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    //Card 6---------------------------
    HomeCardSection6: {
        width: '48%',
        height: '100%',
        borderRadius: 27,
        // backgroundColor: '#2ed573',
    },

    //Home Content End -------------------------------------------------------------


    homeBottomView: {
        width: '100%',
        // height: '10%',
        backgroundColor: 'green',
    },
    logo:{
        width:55,
        height:55,

    },
    bottom: {
        width: '100%',
        height: '8%',
        bottom:-55,
        rotation:180,
        position:'absolute',
        zIndex:1,
    },
    bottom2: {
        width: '100%',
        height: '5%',
        bottom:-80,
        rotation:180,
        position:'absolute',
        zIndex:2,
    },
});

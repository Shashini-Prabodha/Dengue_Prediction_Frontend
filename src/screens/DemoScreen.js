import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const DemoScreen = () => {
    return (
        <Animatable.View style={styles.container} animation="fadeInRight">

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

            <View style={styles.topView}>
                <View style={styles.titleView}>
                    <Text style={styles.title}>INFORMATIONS</Text>
                </View>
                <Image
                    source={require('../assets/icons/d1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>
            </View>



        </Animatable.View>
    );
};

export default DemoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
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
    topView: {
        width: '100%',
        height: '12%',
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
    logo:{
        width:55,
        height:55,
        shadowColor: '#050505',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});

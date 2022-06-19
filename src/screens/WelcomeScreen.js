import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import WavyBackground from 'react-native-wavy-background';
import LinearGradient from 'react-native-linear-gradient';
// import Wave from 'react-wavify';

const WelcomeScreen = () => {
    return (
        <View style={[styles.container, styles.bg1]}>
            <View style={styles.top}>
                {/*<WavyBackground*/}
                {/*    height={280}*/}
                {/*    width={1200}*/}
                {/*    amplitude={-50}*/}
                {/*    frequency={1}*/}
                {/*    offset={180}*/}
                {/*    color='#fa983a'*/}
                {/*/>*/}
            </View>

            <View style={styles.shape}>
                <LinearGradient
                    style={styles.shape1}
                    start={{x: 0.0, y: 0.4}} end={{x: .81, y: 1.01}}
                    colors={['rgb(255,255,255)', '#efefef']}

                ></LinearGradient>

            </View>

            <Animatable.View animation="bounceIn" duration={4000}>

                <Image
                    source={require('../assets/icons/d1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>
            </Animatable.View>

            <Animatable.View animation="bounceIn" duration={4000}>

                {/*<Image*/}
                {/*    source={require('../assets/icons/logo.png')}*/}
                {/*    resizeMode="contain"*/}
                {/*    style={styles.logo}>*/}
                {/*</Image>*/}

            </Animatable.View>

            {/*<View style={styles.bottom}>*/}
            {/*    <WavyBackground*/}
            {/*                    height={400}*/}
            {/*                    width={1300}*/}
            {/*                    amplitude={50}*/}
            {/*                    frequency={1}*/}
            {/*                    offset={180}*/}
            {/*                    color="#a41501"*/}
            {/*    />*/}


            {/*</View>*/}
            {/*<View style={styles.bottom2}>*/}
            {/*    <WavyBackground*/}
            {/*        height={400}*/}
            {/*        width={1300}*/}
            {/*        amplitude={50}*/}
            {/*        frequency={1}*/}
            {/*        offset={180}*/}
            {/*        color="#feca57"*/}
            {/*    />*/}


            {/*</View>*/}
            {/*<View style={styles.bottom3}>*/}
            {/*    <WavyBackground*/}
            {/*        height={400}*/}
            {/*        width={1300}*/}
            {/*        amplitude={50}*/}
            {/*        frequency={1}*/}
            {/*        offset={180}*/}
            {/*        color="#ffeaa7"*/}
            {/*    />*/}


            {/*</View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    top: {
        width: '100%',
        height: '20%',
        top:-180
    },
    bottom: {
        width: '100%',
        height: '18%',
        bottom:-10,
        rotation:180,
        position:'absolute',
        zIndex:2,
    },
    bottom2: {
        width: '100%',
        height: '20%',
        bottom:8,
        left:2,
        zIndex:1,
        rotation:180,
        position:'absolute'
    },
    bottom3: {
        width: '100%',
        height: '20%',
        bottom:22,
        left:2,
        rotation:180,
        position:'absolute'
    },
    bg1: {
        backgroundColor: '#ffffff',
    },
    fontColor: {
        color: '#000000',
    },
    logo: {
        // backgroundColor: '#a41501',
        width: 200,
        height: 200,
      top:'-190%',


    },
    shape: {
        // backgroundColor: 'rgb(227,225,225)',
        width: '100%',
        height:'100%',
        borderBottomEndRadius: 0,
        borderBottomStartRadius:5,
        marginTop:-150,
        transform: [{ scaleX: 1.5 }],

    },
    shape1:{
        width:'100%',
        height:'100%',
        // borderBottomEndRadius: 300,
        // borderBottomStartRadius:300,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:350,
        shadowColor: '#050505',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    shape2:{
        width:'100%',
        height:'100%',
        // borderBottomEndRadius: 300,
        // borderBottomStartRadius:300,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:350,
        shadowColor: '#050505',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
});

export default WelcomeScreen;

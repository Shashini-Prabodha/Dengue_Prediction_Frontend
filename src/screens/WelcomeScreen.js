import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import WavyBackground from 'react-native-wavy-background';
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
        backgroundColor: '#fdfdfd',
    },
    fontColor: {
        color: '#000000',
    },
    logo: {
        // backgroundColor: '#a41501',
        width: 200,
        height: 200,
      top:'-150%',

    },
    shape: {
        backgroundColor: 'rgba(227,225,225,0.44)',
        width: '100%',
        height:'100%',
        borderBottomEndRadius: 300,
        borderBottomStartRadius:300,
        marginTop:-220,
        transform: [{ scaleX: 1.5 }],
    },
});

export default WelcomeScreen;

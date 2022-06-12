import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeScreen = () => {
    return(
        <View style={[styles.container,styles.bg1]}>
            <Text style={styles.fontColor}>
                Welcome  Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg1:{
       backgroundColor:'#00e8ff'
    },
    fontColor:{
        color: '#000000'
    }
});

export default WelcomeScreen;

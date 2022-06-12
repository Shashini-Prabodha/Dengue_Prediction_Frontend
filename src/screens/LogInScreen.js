import React from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import CheckBox from 'react-native-check-box';

import PasswordInputText from 'react-native-hide-show-password-input';

const LogInScreen = () => {
    return(
        <KeyboardAvoidingView style={styles.container}>

            <Image
                source={require('../assets/icons/logo.png')}
                resizeMode="contain"
                style={styles.logo}>
            </Image>
            <Text style={styles.joinN} onPress={this.JoinNow}>
                Join now </Text>
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    label="Email"
                    activeUnderlineColor={'#0984e3'}
                    UnderlineColor={'#cdcdcd'}
                    onChangeText={text => this.setState(
                        {email: text},
                    )}

                />

                <PasswordInputText
                    style={styles.input}

                />


            </View>


            <CheckBox
                style={styles.checkBox}
                rightText={'Remember me.'}
                checkBoxColor={'#009640'}
            />


            <Text style={styles.lmore}>
                Learn More
            </Text>

            <Text style={styles.fpw}>
                Forgot password?
            </Text>
            <View style={styles.body}>

                <TouchableOpacity style={styles.btnCont} mode="contained">
                    <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>

                <View style={styles.line}></View>

                <Text style={styles.txtOr}>Or</Text>

                <TouchableOpacity style={styles.gsignbtn} mode="contained" >
                    <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode="contain"
                        style={styles.google}>
                    </Image>
                    <Text style={styles.textG}> Sign in with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.gsignbtn} mode="contained">
                    <Image
                        source={require('../assets/icons/home.png')}
                        resizeMode="contain"
                        style={styles.google}>
                    </Image>
                    <Text style={styles.textG}> Sign in with Apple</Text>
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    logo: {
        width: 90,
        height: 65,
        marginLeft: 25,

    },
    title: {
        color: 'black',
        fontSize: 25,
        marginLeft: 25,
        marginTop: 15,
        fontWeight: 'bold',

    },
    input: {
        width: 360,
        marginTop: 5,
        backgroundColor: 'white',
        color: 'black',
        margin: 8,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,

    },
    checkBox: {
        marginLeft: 20,
    },
    lmore: {
        color: '#0984e3',
        fontWeight: 'bold',
        marginTop: -22,
        marginLeft: 158,
    },
    joinN: {
        color: '#0984e3',
        fontWeight: 'bold',
        marginTop: -41,
        fontSize: 17,
        marginLeft: 310,
    },
    fpw: {
        color: '#0984e3',
        fontWeight: 'bold',
        marginTop: 22,
        marginLeft: 23,

    },
    btnCont: {
        margin: 5,
        color: 'white',
        width: 370,
        borderRadius: 20,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        padding: 10,
        // marginTop: 30,
        borderWidth: 1.5,
        borderColor: '#0984e3',


    },
    gsignbtn: {
        margin: 5,
        flexDirection: 'row',
        borderColor: '#888888',
        borderRadius: 20,
        borderWidth: 1.5,
        padding: 10,
        width: 370,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    line: {
        width: 370,
        borderColor: '#d6d6d6',
        margin: 10,
        borderTopWidth: 1,
    },
    txtOr: {
        marginTop: -22,
        color: '#c3c3c3',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    google: {
        width: 22,
        height: 22,
    },
    textG: {
        fontSize: 16,
        color: '#6d6d6d',
        fontWeight: 'bold',

    },
});

export default LogInScreen;

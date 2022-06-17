import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SCREEN_HEIGHT = Dimensions.get('window').height;


const SignUpScreen = () => {
    console.disableYellowBox = true;

    return (
        <KeyboardAwareScrollView style={{height: SCREEN_HEIGHT}}>
            <View style={{height: SCREEN_HEIGHT}}>

                <View style={styles.container}>

                    <View style={styles.topTitleView}>
                        <Text style={styles.title}>SIGN UP</Text>
                    </View>

                    <View style={styles.imgView}>
                        <Image
                            source={require('../assets/icons/d1.png')}
                            resizeMode="contain"
                            style={styles.logo}>
                        </Image>
                    </View>

                    <View style={styles.loginDetailsView}>

                        <View style={styles.emailView}>
                            <TextInput style={styles.txtField}
                                       placeholder="Email Address"
                                       placeholderTextColor="#ee5253"
                                // value={valuData}
                                //        onChangeText={onChangeData}
                                //        secureTextEntry={secureText}
                            >
                            </TextInput>
                        </View>

                        <View style={styles.passwordView}>
                            <TextInput style={styles.txtPassword}
                                       placeholder="Password"
                                       placeholderTextColor="#ee5253"
                                // value={valuData}
                                //        onChangeText={onChangeData}
                                       secureTextEntry={true}
                            >
                            </TextInput>
                        </View>

                        <View style={styles.passwordView}>
                            <TextInput style={styles.txtPassword}
                                       placeholder="Confirm Password"
                                       placeholderTextColor="#ee5253"
                                // value={valuData}
                                //        onChangeText={onChangeData}
                                       secureTextEntry={true}
                            >
                            </TextInput>
                        </View>


                        <View style={styles.btnView}>
                            <TouchableOpacity style={styles.btnSignUp} mode="contained">
                                <Text style={styles.btnSignUpTxt}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </View>

        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    topTitleView: {
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#ee5253',
        fontSize: 35,
        fontWeight: 'bold',
        // fontFamily:"Poppins-Black"
    },
    imgView: {
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },

    loginDetailsView: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    emailView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    txtField: {
        width: '80%',
        borderColor: '#ee5253',
        borderWidth: 1.5,
        borderRadius: 40,
        color: '#ee5253',
        backgroundColor: 'rgba(255,255,255,0)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 17,
    },

    passwordView: {
        marginTop: '5%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },

    txtPassword: {
        width: '80%',
        borderColor: '#ee5253',
        borderWidth: 1.5,
        borderRadius: 40,
        color: '#ee5253',
        backgroundColor: 'rgba(255,255,255,0)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 17,
    },

    btnView: {
        width: '80%',
        height: 50,
        marginTop: '5%',
    },
    btnSignUp: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#ee5253',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSignUpTxt: {
        fontSize: 20,
        color: '#ffffff',
    },
});



export default SignUpScreen;





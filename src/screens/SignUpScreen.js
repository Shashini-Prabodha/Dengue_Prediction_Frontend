import React, {useEffect, useState} from 'react';
import {
    Alert, Button,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Dialog, Root, Toast} from 'react-native-alert-notification';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {MONGO_USER_SIGN_UP} from '../api/api';


const SCREEN_HEIGHT = Dimensions.get('window').height;


const SignUpScreen = () => {
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const [cpassword, setCPassword] = useState();

        const useNavigate = useNavigation();

        const navigateAgent = () => {
            useNavigate.navigate('UserDataInputScreen');
        };

        const navigateLogIn = () => {
            useNavigate.navigate('LogInScreen');
        };
        const signup = async () => {

            console.log('press**********');
            try {
                if (email && password && cpassword) {
                    // if (this.getData.bind(this)) {
                    if (email !== null && password !== null) {

                        await AsyncStorage.setItem('email', email);
                        await AsyncStorage.setItem('password', password);
                        // await AsyncStorage.setItem('alreadyLaunched', 'true');

                        console.log('11' + email + ' ' + password);
                        console.log('press');

                        signUpUser();

                    } else {
                        Dialog.show({
                            type: ALERT_TYPE.DANGER,
                            title: 'Something wrong!',
                            textBody: 'Incorrect Email or password..! Please check or sign up',
                            button: 'Close',
                        });
                    }
                    Dialog.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Success!',
                        textBody: 'Sign Up Success...!',
                        button: 'Close',
                    });
                    navigateAgent();

                } else {

                    Dialog.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Something wrong!',
                        textBody: 'Please Input Email or Password',
                        button: 'Close',
                    });

                }


            } catch (e) {
                // saving error
            }

        };

        const signUpUser = () => {
            console.log('in sign up ' + MONGO_USER_SIGN_UP);
            try {
                fetch(MONGO_USER_SIGN_UP, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'email': email,
                        'password': password,
                        'name': '',
                        'district': '',
                    }),
                })
            } catch (error) {
                console.error(error);
            }


        };

        return (
            <KeyboardAwareScrollView style={{height: SCREEN_HEIGHT}}>
                <Animatable.View animation="fadeInLeft">

                    <Root>
                        <SafeAreaView>
                            <View style={{height: SCREEN_HEIGHT}}>

                                <View style={styles.container}>

                                    <View style={styles.topTitleView}>
                                        <Text style={styles.title}>SIGN UP</Text>
                                    </View>
                                    <View style={styles.imgView}>
                                        <Animatable.View animation="bounceIn" duration={4000}>
                                            <Image
                                                source={require('../assets/icons/d1.png')}
                                                resizeMode="contain"
                                                style={styles.logo}>
                                            </Image>
                                        </Animatable.View>
                                    </View>
                                    <View style={styles.loginDetailsView}>

                                        <View style={styles.emailView}>
                                            <TextInput style={styles.txtField}
                                                       placeholder="Email Address"
                                                       placeholderTextColor="#ee5253"
                                                // value={valuData}
                                                       onChangeText={e => setEmail(e)}

                                            >
                                            </TextInput>
                                        </View>

                                        <View style={styles.passwordView}>
                                            <TextInput style={styles.txtPassword}
                                                       placeholder="Password"
                                                       placeholderTextColor="#ee5253"
                                                // value={valuData}
                                                       onChangeText={e => setPassword(e)}
                                                       secureTextEntry={true}
                                            >
                                            </TextInput>
                                        </View>

                                        <View style={styles.passwordView}>
                                            <TextInput style={styles.txtPassword}
                                                       placeholder="Confirm Password"
                                                       placeholderTextColor="#ee5253"
                                                // value={valuData}
                                                       onChangeText={e => setCPassword(e)}
                                                       secureTextEntry={true}
                                            >
                                            </TextInput>
                                        </View>


                                        <View style={styles.btnView}>
                                            <TouchableOpacity style={styles.btnSignUp} mode="contained" onPress={()=>signup()}>
                                                <Text style={styles.btnSignUpTxt}>Sign Up</Text>
                                            </TouchableOpacity>

                                            <View style={styles.loginView}>
                                                <View>
                                                    <Text>
                                                        Already have an account?
                                                    </Text>
                                                </View>

                                                <TouchableOpacity style={styles.btnLogin} onPress={() => navigateLogIn()}>
                                                    <Text style={styles.btnLoginTxt}>Sign In</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>


                                    </View>
                                </View>
                            </View>
                        </SafeAreaView>
                    </Root>
                </Animatable.View>

            </KeyboardAwareScrollView>
        );
    }
;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    topTitleView: {
        width: '100%',
        height: '18%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'green'
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
        // backgroundColor:'purple'

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
        // backgroundColor:'black'
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
        alignItems: 'center',
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
    loginView: {
        flexDirection: 'row',
        margin: '2%',
        width: '80%',
        height: '50%',
        // backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLogin: {},
    btnLoginTxt: {
        fontSize: 15,
        color: '#ee5253',
        fontWeight: 'bold',
        marginLeft: '10%',
    },
});


export default SignUpScreen;





import React, {useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';

const SCREEN_HEIGHT = Dimensions.get('window').height;


const LogInScreen = () => {
    // console.disableYellowBox = true;

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const useNavigate = useNavigation();

    const navigateAgent = () => {
        useNavigate.navigate('HomeScreen');
    };
    const navigateSignUp = () => {
        useNavigate.navigate('SignUpScreen');
    };
    const signIn = async () => {

        console.log('press**********');
        try {
            if (email && password) {
                // if (this.getData.bind(this)) {
                if (email !== null && password !== null) {

                    await AsyncStorage.setItem('email', email);
                    await AsyncStorage.setItem('password', password);

                    console.log('11' + email + ' ' + password);
                    console.log('press');

                } else {
                    Dialog.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'Something wrong!',
                        textBody: 'Incorrect Email or password..! Please check or sign up',
                        button: 'Close',
                    });
                    // Alert.alert('Incorrect Email or password..! Please check or sign up');
                }
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success!',
                    textBody: 'Login Success...!',
                    button: 'Close',
                });
                navigateAgent();

                // Alert.alert('Data Saved !');
                //
            } else {
                // Alert.alert("Please input Email or Password ")
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
    return (

        <KeyboardAwareScrollView style={[{height: SCREEN_HEIGHT}]}>
            <Animatable.View animation="fadeInRight">

                <View style={[{height: SCREEN_HEIGHT}]}>

                    <View style={styles.container}>


                        <View style={styles.topTitleView}>
                            <Text style={styles.title}>SIGN IN</Text>
                        </View>

                        <View style={styles.imgView}>
                            <Animatable.View animation="bounceIn" duration={4000}>

                                <Image
                                    source={require('../assets/icons/d1.png')}
                                    resizeMode="contain"
                                    style={styles.logo}>
                                </Image></Animatable.View>
                        </View>

                        <View style={styles.loginDetailsView}>

                            <View style={styles.emailView}>
                                <TextInput style={styles.txtField}
                                           placeholder="Email Address"
                                           placeholderTextColor="#ee5253"
                                    // value={valuData}
                                           onChangeText={e => setEmail(e)}
                                    //        secureTextEntry={secureText}
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

                            <View style={styles.btnView}>
                                <TouchableOpacity style={styles.btnSignIn} mode="contained" onPress={() => signIn()}>
                                    <Text style={styles.btnSignInTxt}>Sign In</Text>
                                </TouchableOpacity>

                                <View style={styles.loginView}>

                                    <View>
                                        <Text>
                                            Don't have an account?
                                        </Text>
                                    </View>

                                    <TouchableOpacity style={styles.btnLogin} onPress={() => navigateSignUp()}>
                                        <Text style={styles.btnSignUpTxt}>Sign Up</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>


                        </View>
                    </View>
                </View>
            </Animatable.View>

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
    checkBox: {
        marginLeft: 20,
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
        alignItems: 'center',
    },
    btnSignIn: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#ee5253',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSignInTxt: {
        fontSize: 20,
        color: '#ffffff',
    },
    btnSignUpTxt: {
        fontSize: 15,
        color: '#ee5253',
        fontWeight: 'bold',
        marginLeft: '10%',
    },
    loginView: {
        flexDirection: 'row',
        margin: '2%',
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default LogInScreen;





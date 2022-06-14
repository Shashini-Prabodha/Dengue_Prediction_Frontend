// import React, {useEffect, useState} from 'react';
// import {Animated, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
//
// import PasswordInputText from 'react-native-hide-show-password-input';
//
// const LogInScreen = () => {
//
//     console.disableYellowBox = true;
//
//     return (
//         <KeyboardAvoidingView style={styles.container} behavior="padding"  >
//
//             {/*<Text style={styles.title}>Sign in</Text>*/}
//
//             {/*<Image*/}
//             {/*    source={require('../assets/icons/den.png')}*/}
//             {/*    resizeMode="contain"*/}
//             {/*    style={styles.logo}>*/}
//             {/*</Image>*/}
//
//             {/*<View style={styles.body}>*/}
//             {/*   */}
//             {/*</View>*/}
//
//             {/*<View style={styles.btnView}>*/}
//
//             {/*    <TouchableOpacity style={styles.btnSignIn} mode="contained">*/}
//             {/*        <Text style={styles.text}>Sign In</Text>*/}
//             {/*    </TouchableOpacity>*/}
//
//
//             {/*</View>*/}
//
//             <View style={styles.topTitleView}>
//                 <Text style={styles.title}>Sign in</Text>
//             </View>
//
//             <View style={styles.imgView}>
//                 <Image

//                     resizeMode="contain"
//                     style={styles.logo}>
//                 </Image>
//             </View>
//
//             <View style={styles.loginDetailsView}>
//
//                 <View style={styles.emailView}>
//                     <TextInput style={styles.txtField}
//                                placeholder="Email Address"
//                                placeholderTextColor="#deb204"
//                         // value={valuData}
//                         //        onChangeText={onChangeData}
//                         //        secureTextEntry={secureText}
//                     >
//                     </TextInput>
//                 </View>
//
//                 <View style={styles.passwordView}>
//                     <TextInput style={styles.txtPassword}
//                                placeholder="Password"
//                                placeholderTextColor="#deb204"
//                         // value={valuData}
//                         //        onChangeText={onChangeData}
//                         //        secureTextEntry={secureText}
//                     >
//                     </TextInput>
//                 </View>
//
//                 <View style={styles.btnView}>
//                     <TouchableOpacity style={styles.btnSignIn} mode="contained">
//                         <Text style={styles.btnSignInTxt}>Sign In</Text>
//                     </TouchableOpacity>
//                 </View>
//
//
//             </View>
//
//
//         </KeyboardAvoidingView>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//
//     topTitleView: {
//         width: '100%',
//         height: '10%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         color: '#ee5253',
//         fontSize: 35,
//         fontWeight: 'bold',
//     },
//     imgView: {
//         width: '100%',
//         height: '40%',
//         // backgroundColor:'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     logo: {
//         width: 200,
//         height: 200,
//     },
//
//     loginDetailsView: {
//         width: '100%',
//         height: '40%',
//         backgroundColor:'blue',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//
//     emailView: {
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 50,
//     },
//     txtField: {
//         width: '80%',
//         borderColor: '#deb204',
//         borderWidth: 2,
//         borderRadius: 40,
//         color: '#deb204',
//         backgroundColor: 'rgba(255,255,255,0)',
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         fontSize: 20,
//     },
//
//     passwordView: {
//         marginTop: '5%',
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: 50,
//     },
//
//     txtPassword: {
//         width: '80%',
//         borderColor: '#deb204',
//         borderWidth: 2,
//         borderRadius: 40,
//         color: '#deb204',
//         backgroundColor: 'rgba(255,255,255,0)',
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         fontSize: 20,
//     },
//
//     btnView:{
//         width:'80%',
//         height:50,
//         marginTop:'5%',
//     },
//     btnSignIn:{
//         width:'100%',
//         height:'100%',
//         borderRadius:40,
//         backgroundColor:'#ffcb00',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     btnSignInTxt:{
//         fontSize:20,
//         color:'#ffffff'
//     }
//
//     // container: {
//     //     flex: 1,
//     //     backgroundColor: 'white',
//     // },
//     //
//     // logo: {
//     //     width: 150,
//     //     height: 150,
//     //     marginLeft: 120,
//     //     marginTop:50
//     //
//     // },
//     // title: {
//     //     color: '#ee5253',
//     //     fontSize: 35,
//     //     marginLeft: 130,
//     //     marginTop: 15,
//     //     fontWeight: 'bold',
//     //
//     // },
//     // txtField:{
//     //     borderColor: '#00B5FF',
//     //     borderWidth: 2,
//     //     borderRadius: 40,
//     //     color: '#55B5FF',
//     //     backgroundColor:'rgba(255,255,255,0)',
//     //     paddingVertical: 10,
//     //     paddingHorizontal: 10,
//     //     fontSize: 20,
//     // },
//     // input: {
//     //     width: 360,
//     //     marginTop: 5,
//     //     backgroundColor: 'white',
//     //     color: 'black',
//     //     margin: 8,
//     // },
//     // btnView: {
//     //     width:"100%",
//     //     height:"10%",
//     //     // backgroundColor: 'blue',
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     // },
//     // text: {
//     //     fontSize: 16,
//     //     color: 'white',
//     //     fontWeight: 'bold',
//     // },
//     // btnSignIn: {
//     //     margin: 5,
//     //     color: 'white',
//     //     width: 370,
//     //     borderRadius: 20,
//     //     backgroundColor: '#ff4d4d',
//     //     alignItems: 'center',
//     //     padding: 10,
//     //     // marginTop: 30,
//     //     borderWidth: 1.5,
//     //     borderColor: '#ff4d4d',
//     //
//     //
//     // },
// });
//
// export default LogInScreen;


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


const LogInScreen = () => {
    console.disableYellowBox = true;

    return (
        <KeyboardAwareScrollView style={[{height: SCREEN_HEIGHT}]}>
            <View style={[{height: SCREEN_HEIGHT}]}>

                <View style={styles.container}>


                <View style={styles.topTitleView}>
                    <Text style={styles.title}>Sign In</Text>
                </View>

                <View style={styles.imgView}>
                    <Image
                        source={require('../assets/icons/den.png')}
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

                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.btnSignIn} mode="contained">
                            <Text style={styles.btnSignInTxt}>Sign In</Text>
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
        // fontWeight: 'bold',
        fontFamily:"Poppins-Black"
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
});



export default LogInScreen;





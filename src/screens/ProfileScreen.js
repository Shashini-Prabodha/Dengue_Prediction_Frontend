import React, {useState, useEffect} from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
} from 'react-native';

import WavyBackground from 'react-native-wavy-background';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from '../assets/data/Data.js';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SCREEN_HEIGHT = Dimensions.get('window').height;
import {ALERT_TYPE, Root, Toast} from 'react-native-alert-notification';
import * as Animatable from 'react-native-animatable';
import AwesomeAlert from 'react-native-awesome-alerts';
import Dialog from 'react-native-dialog';

const ProfileScreen = () => {
    // console.disableYellowBox = true;


    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [district, setDistrict] = useState();
    const [dno, setDno] = useState();
    const [name, setName] = useState();

    let [showAlert, setShowAlert] = useState(false);

    const viewAlert = () => {
        setShowAlert(true);


    };

    const saveAlert = async () => {

        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('district', district);
        await AsyncStorage.setItem('dno', dno);


        setShowAlert(false);

        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Done! Your profile updated!',
        });
    };

    const hideAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {

        AsyncStorage.getItem('name').then(async value => {
            console.log('name => ' + value);
            setName(value);
        });


        AsyncStorage.getItem('dno').then(async value => {
            // await AsyncStorage.setItem('district', value);
            setDno(value);
            console.log('Value ()=> ' + value);
        });


    }, []);


    return (
        <KeyboardAwareScrollView style={[{height: '100%'}]}>
            <Animatable.View animation="fadeInLeft">

                <Root>
                    <SafeAreaView>
                        <View style={[{height: SCREEN_HEIGHT}]}>

                            <View style={styles.container}>

                                <View style={styles.topTitleView}>
                                    <Text style={styles.title}>Profile</Text>
                                </View>

                                {/*<View style={styles.lottie}>*/}
                                    <LottieView style={styles.icon}
                                                source={require('../assets/icons/avator.json')}
                                                colorFilters={[{
                                                    keypath: 'button',
                                                    color: '#F00000',
                                                }, {
                                                    keypath: 'Sending Loader',
                                                    color: '#F00000',
                                                }]}
                                                autoPlay
                                                loop
                                    />
                                {/*</View>*/}
                                <View style={styles.loginDetailsView}>

                                    <View style={styles.nameTitleView}>
                                        <Text style={styles.label1}> Name</Text>
                                    </View>

                                    <View style={styles.nameView}>


                                        <TextInput style={styles.txtField}
                                                   placeholderTextColor="#ee5253"
                                                   value={name}
                                                   onChangeText={e => setName(e)}
                                            //        secureTextEntry={secureText}
                                        >
                                        </TextInput>
                                    </View>
                                    <View style={styles.nameTitleView2}>
                                        <Text style={styles.label2}> District</Text>
                                    </View>
                                    <View style={styles.dropdownView}>

                                        <Dropdown
                                            style={[styles.dropdown, isFocus && {borderColor: '#ee5253'}]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            inputSearchStyle={styles.inputSearchStyle}
                                            // iconStyle={styles.iconStyle}
                                            data={data}
                                            search
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={!isFocus ? 'Select item' : '...'}
                                            searchPlaceholder="Search..."
                                            value={dno}
                                            onFocus={() => setIsFocus(true)}
                                            onBlur={() => setIsFocus(false)}
                                            onChange={item => {
                                                setValue(item.value);
                                                setDistrict(item.label);
                                                setIsFocus(false);
                                            }}
                                            // renderLeftIcon={() => (
                                            //     <AntDesign
                                            //         style={styles.icon}
                                            //         color={isFocus ? 'blue' : 'black'}
                                            //         name="Safety"
                                            //         size={20}
                                            //     />
                                            // )}
                                        />
                                    </View>

                                    <View style={styles.btnView}>

                                        <TouchableOpacity
                                            style={styles.Save} mode="contained"
                                            onPress={() => {
                                                viewAlert();
                                            }}>
                                            <Text style={styles.SaveTxt}>Save</Text>
                                        </TouchableOpacity>

                                        <Dialog.Container visible={showAlert} style={styles.DialogContainer}
                                                          onBackdropPress={() => hideAlert()}>
                                            <Dialog.Title>Account delete</Dialog.Title>
                                            <Dialog.Description>
                                                Do you want to update your details?
                                            </Dialog.Description>
                                            <Dialog.Button label="Yes" onPress={() => saveAlert()}/>
                                            <Dialog.Button label="No" onPress={() => hideAlert()}/>
                                        </Dialog.Container>

                                    </View>

                                </View>
                            </View>
                            <View style={styles.bottomView}>
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
                            </View>
                        </View>
                    </SafeAreaView>
                </Root>
            </Animatable.View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height:'100%',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    // lottie: {
    //     backgroundColor: 'red',
    //     width:'35%',
    //     height:'35%'
    // },
    icon: {
        width: 240,
        alignSelf: 'center',
        // backgroundColor: 'pink',
    },

    topTitleView: {
        // marginTop: '10%',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    title: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
    },
    nameTitleView: {
        width: '80%',
        height: '11%',
        textAlign: 'left',
        // backgroundColor:'red'
    },
    label1: {
        fontSize: 14,
        color: 'grey',
        marginTop: '-8%',
    },
    nameTitleView2: {
        width: '80%',
        height: '11%',
        textAlign: 'left',
        // backgroundColor:'red'
    },
    label2: {
        fontSize: 14,
        color: 'grey',
    },
    imgView: {
        width: '100%',
        height: '30%',
        marginTop: '5%',
        // backgroundColor: 'red',
    },
    image: {
        width: '100%',
        height: 200,

    },
    checkBox: {
        marginLeft: 20,
    },
    loginDetailsView: {
        width: '100%',
        height: '45%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        top: '-8%',
    },

    nameView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: '-5%',
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

    location: {
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    Save: {
        width: '30%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#ee5253',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SaveTxt: {
        fontSize: 20,
        color: '#ffffff',
    },
    dropdownView: {
        // backgroundColor: '#ee5253',
        width: '80%',
    },
    dropdown: {
        height: 50,
        borderColor: '#ee5253',
        borderWidth: 1.5,
        borderRadius: 40,
        color: '#ee5253',

        paddingHorizontal: 8,
    },
    // icon: {
    //     marginRight: 5,
    // },
    label: {
        left: 5,
        padding: 5,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    bottomView: {
        width: '100%',
        height: '2%',
        // backgroundColor: '#ff6a00'
    },
    bottom: {
        width: '100%',
        height: '4%',
        // bottom: -55,
        rotation: 180,
        position: 'absolute',
        zIndex: 1,
    },
    bottom2: {
        width: '100%',
        height: '4%',
        bottom: -8,
        rotation: 180,
        position: 'absolute',
        zIndex: 2,
    },
});


export default ProfileScreen;





import React, {useEffect, useState} from 'react';
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
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from '../assets/data/Data.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {MONGO_USER_SIGN_UP, MONGO_USER_SIGN_UP_UPADTE} from '../api/api';


const SCREEN_HEIGHT = Dimensions.get('window').height;


const UserDataInputScreen = () => {
    // console.disableYellowBox = true;
    const useNavigate = useNavigation();

    const navigateHome = () => {
        useNavigate.navigate('HomeRoute');
    };

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [name, setName] = useState();
    const [district, setDistrict] = useState(null);
    const [email, setEmail] = useState(null);
    const [dno, setDno] = useState();

    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            setEmail(email)

        } catch (e) {
            // error reading value
        }
    }

    useEffect(() => {
        getData();
    }, []);


    const storeData = async () => {
        try {
            console.log('in ' + district + ' * ' + name);
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('district', district);
            await AsyncStorage.setItem('dno', value);
            console.log('EMAIL =>' + email);
            await signUpUser();

            navigateHome();
        } catch (e) {

        }

    };

    const signUpUser = () => {
        console.log('in sign up ' + MONGO_USER_SIGN_UP_UPADTE + email);
        try {
            fetch(MONGO_USER_SIGN_UP_UPADTE, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': email,
                    'name': name,
                    'district': district,
                }),
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <KeyboardAwareScrollView style={[{height: SCREEN_HEIGHT}]}>
            <View style={[{height: SCREEN_HEIGHT}]}>

                <View style={styles.container}>

                    <View style={styles.topTitleView}>
                        <Text style={styles.title}>User Details</Text>
                    </View>

                    <View style={styles.loginDetailsView}>

                        <View style={styles.nameTitleView}>
                            <Text style={styles.label1}> Your Name</Text>
                        </View>

                        <View style={styles.nameView}>


                            <TextInput style={styles.txtField}
                                       placeholderTextColor="#ee5253"
                                // value={valuData}
                                       onChangeText={e => setName(e)}
                                //        secureTextEntry={secureText}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.nameTitleView2}>
                            <TextInput style={styles.label2}> District</TextInput>
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
                                value={value}
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
                            <TouchableOpacity style={styles.go} mode="contained" onPress={() => storeData()}>
                                <Text style={styles.goTxt}>Go</Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                    <View style={styles.imgView}>
                        <Image
                            source={require('../assets/icons/img_1.png')}
                            resizeMode="contain"
                            style={styles.image}>
                        </Image>
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
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    topTitleView: {
        marginTop: '10%',
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
    },
    title: {
        color: '#ee5253',
        fontSize: 35,
        fontWeight: 'bold',
        // fontFamily: 'Poppins-Black',
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
        marginTop: '-2%',
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
        height: '50%',
        // backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
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
    go: {
        width: '30%',
        height: '100%',
        borderRadius: 40,
        backgroundColor: '#ee5253',
        justifyContent: 'center',
        alignItems: 'center',
    },
    goTxt: {
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

    // iconStyle: {
    //     width: 20,
    //     height: 20,
    // },
    // inputSearchStyle: {
    //     height: 40,
    //     fontSize: 16,
    // },
});


export default UserDataInputScreen;





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
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from '../assets/data/Data.js'
import LottieView from 'lottie-react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;



const ProfileScreen = () => {
    console.disableYellowBox = true;

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <KeyboardAwareScrollView style={[{height: SCREEN_HEIGHT}]}>
            <View style={[{height: SCREEN_HEIGHT}]}>

                <View style={styles.container}>

                    <View style={styles.topTitleView}>
                        <Text style={styles.title}>Profile</Text>
                    </View>

{/*<View style={styles.lottie}>*/}
                    <LottieView style={styles.icon}
                                source={require('../assets/icons/avator.json')}
                                colorFilters={[{
                                    keypath: "button",
                                    color: "#F00000"
                                }, {
                                    keypath: "Sending Loader",
                                    color: "#F00000"
                                }]}
                                autoPlay
                                loop
                    />
{/*</View>*/}
                    <View style={styles.loginDetailsView}>

                        <View style={styles.nameTitleView}>
                            <TextInput style={styles.label1}> Name</TextInput>
                        </View>

                        <View style={styles.nameView}>


                            <TextInput style={styles.txtField}
                                       placeholderTextColor="#ee5253"
                                // value={valuData}
                                //        onChangeText={onChangeData}
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
                            <TouchableOpacity style={styles.Save} mode="contained">
                                <Text style={styles.SaveTxt}>Save</Text>
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
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    icon: {
        width: 260,

        alignSelf: 'center'
    },
    lottie:{
        // backgroundColor: 'green',
        // height:'30%',
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
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
    },
    nameTitleView:{
        width:'80%',
        height:'11%',
        textAlign:'left',
        // backgroundColor:'red'
    },
    label1: {
        fontSize: 14,
        color:'grey',
        marginTop:'-8%'
    },
    nameTitleView2:{
        width:'80%',
        height:'11%',
        textAlign:'left',
        // backgroundColor:'red'
    },
    label2: {
        fontSize: 14,
        color:'grey',
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
        top:'-8%'
    },

    nameView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop:"-5%"
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
        justifyContent:'center',
        alignItems:'center'
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
        left:5,
        padding:5,
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


export default ProfileScreen;





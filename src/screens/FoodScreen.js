import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WavyBackground from 'react-native-wavy-background';
import Unorderedlist from 'react-native-unordered-list';

const ControlOutSideScreen = () => {

    const useNavigate = useNavigation();

    const navigateDemo = () => {
        useNavigate.navigate('DemoScreen');
    };


    return (
        <View style={styles.container}>
            <View style={styles.titleMainView}>
                <View style={styles.topView}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>
                            FOOD FOR DENGUE
                        </Text>
                    </View>
                    <Image
                        source={require('../assets/icons/d1.png')}
                        resizeMode="contain"
                        style={styles.logo}>
                    </Image>
                </View>
            </View>

            <View style={styles.content}>
                <ScrollView style={styles.screen}>

                    <View style={styles.details}>
                        <View style={styles.detailsView}>
                            <Text style={styles.h1}>
                                Best Foods to Recover From Dengue Fever
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Papaya leaf : </Text> Papaya extract is rich in
                                enzymes
                                like papain and chymopapain, which aid digestion, prevent bloating and other digestive
                                disorders.30ml of fresh papaya leaf juice helps in increasing the platelet count and,
                                therefore, in the treatment of dengue.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Pomegranate : </Text>Pomegranate is
                                rich in essential nutrients and minerals that provides the body with required energy.
                                Consumption of pomegranate reduces the feeling of exhaustion and fatigue. Being a rich
                                source of iron, pomegranate stands out to be quite beneficial for the blood. It also
                                helps in maintaining a normal blood platelet count which is essential to recover from
                                dengue. Pomegranate has been used since the ancient times for its healthy and medicinal
                                properties.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Garlic : </Text>Garlic is one of the best
                                anti-viral foods you will find today. Because of its soothing properties, it's often
                                added in heaps while cooking traditional meals. It's also an immunity enhancing food
                                which helps deal with symptoms like inflammation, fever, sore throat. The antimicrobial
                                and antifungal properties root out bad germs and toxins as well, speeding up recovery.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Yoghurt : </Text> Yoghurt is not just good for
                                your digestion but also to keep your immune system functioning well. It works as a
                                probiotic which stimulates the production of essential gut bacteria, eliminates toxins
                                and provides many more health benefits. Since it's also refreshing in taste, it makes
                                for a sumptuous snack.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Grapefruit : </Text> Grapefruit is a tropic fruit
                                full of flavours as well as nutrients. It comes power-packed with high vitamin C
                                content, antioxidants which recharge your immune system. The fruit is also known to work
                                as a fever reliever and boost the production of infection-fighting white blood cells
                                (WBCs) in the body.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Coconut Water: </Text>Dengue generally
                                results in dehydration. Thus, it is immensely beneficial to consume coconut water –
                                which is loaded with electrolytes and vital nutrients.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Turmeric : </Text> Being an antiseptic
                                and metabolism booster the consumption of turmeric with milk. This helps in faster
                                recovery.
                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Fenugreek : </Text>Methi is known to
                                induce sleep and acts like a mild tranquilizer that aids in easing pain. It is also
                                known to stabilizing the high fever that is a common dengue symptom.
                            </Text></Unorderedlist>


                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Orange : </Text> Rich in antioxidants
                                and Vitamin C, orange and its juice also help in treating and eliminating the dengue
                                virus.

                            </Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Broccoli: </Text> Broccoli is an excellent source
                                of Vitamin K which helps to regenerate blood platelets. If there's a sharp decline in
                                the platelet count, then broccoli must be included in the daily diet of a dengue
                                patient. It is also rich in antioxidants and minerals</Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Spinach : </Text>Spinach is a rich source of iron
                                and omega-3 fatty acids rich food which improves the immune system to a great extent. It
                                is an effective way to increase the platelet level count.</Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Kiwifruits : </Text>s contain good
                                amounts of vitamin A, vitamin E, along with potassium to balance the body's electrolytes
                                and limiting hypertension and high blood pressure. The copper in kiwifruit is especially
                                for the formation of healthy red blood cells and building immunity against
                                disease.</Text></Unorderedlist>

                            <Text style={styles.h1}>
                                Foods to be avoided during Dengue Fever
                            </Text>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Oily/Fried food : </Text>It’s best to
                                avoid oily food and opt for a lighter diet. Oily food contains a lot of fat which may
                                lead to high blood pressure and high cholesterol. This can put a damper on your road to
                                recovery as it weakens the immune system</Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Spicy Food : </Text> This is a big no for
                                dengue patients. It can cause acid to collect in the stomach and lead to ulcers and
                                damage to the wall. This damage hinders the recovery process as your body seems to be
                                fighting double the illnesses.</Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Avoid Non- vegetarian food:</Text>
                                Non-vegetarian food is a strict “No”. Up your fluid intake and consume warm water
                                instead of normal water.</Text></Unorderedlist>

                            <Unorderedlist style={{marginTop: '5%'}}><Text style={{marginTop: '5%'}}>
                                <Text style={{fontWeight: 'bold'}}>Caffeinated beverages: </Text>Your body
                                needs lots of fluid but caffeinated beverages are not the way to go. Since more
                                hydrating and relaxing fluid intake is recommended, caffeinated drinks should be avoided
                                at all costs. These drinks cause rapid heart rate, fatigue, caffeine crashes, and muscle
                                breakdown</Text></Unorderedlist>

                        </View>
                    </View>

                    <View style={styles.imageView}>
                        <View style={styles.detailsView}>

                            <ImageBackground
                                source={require('../assets/icons/foodchart.jpg')}
                                resizeMode="cover"
                                style={styles.infoImg}>
                            </ImageBackground>
                        </View>
                    </View>

                </ScrollView>
            </View>

            <View style={styles.footer}>
                {/*bottom view --------------------------------------------------------------------------------------*/}
                {/*<View style={styles.bottomView}>*/}
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
                {/*</View>*/}
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ffcf00'
    },
    titleMainView: {
        width: '100%',
        height: '10%',
        // backgroundColor: '#ff0f00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#f6a800',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    titleView: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        // backgroundColor: 'rgba(224,224,224,0.8)',

    },
    title: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',

    },

    screen: {
        // width: '100%',
        // height: '100%',
        // backgroundColor: '#ffcf00',

    },
    details: {
        width: '100%',
        height: 1610,
        // backgroundColor: '#b60000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsView: {
        width: '90%',
        height: '100%',
        // backgroundColor: '#4d29a9',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    imageView: {
        width: '100%',
        height: 395,
        // backgroundColor: '#13c7b0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    midSpace: {
        height: 10,
    },

    logo: {
        width: 55,
        height: 55,

    },
    h1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#820e8a',
        marginTop: '5%',
    },
    content: {
        width: '100%',
        height: '75%',
        // backgroundColor: '#377db6',
    },
    btn: {
        width: '80%',
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        // backgroundColor: '#ff6a00'
    },
    // bottomView: {
    //     width: '100%',
    //     height: '10%',
    //     // backgroundColor: '#ff6a00'
    // },
    bottom: {
        width: '100%',
        height: '8%',
        bottom: -55,
        rotation: 180,
        position: 'absolute',
        zIndex: 1,
    },
    bottom2: {
        width: '100%',
        height: '5%',
        bottom: -80,
        rotation: 180,
        position: 'absolute',
        zIndex: 2,
    },
    infoImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 10,

    },
});


export default ControlOutSideScreen;

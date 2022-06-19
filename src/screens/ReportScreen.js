// import React from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import WavyBackground from 'react-native-wavy-background';
// import {ScrollView} from 'react-native-gesture-handler';
// import * as Animatable from 'react-native-animatable';
// import ProgressChart from 'react-native-chart-kit/dist/ProgressChart';
//
// const ReportScreen = () => {
//     const data = {
//         labels: ['Done'], // optional
//         data: [0.7],
//     };
//     const chartConfig = {
//         backgroundGradientFromOpacity: 0,
//         backgroundGradientTo: '#f1f1f1',
//         backgroundGradientToOpacity: 0.5,
//         color: (opacity = 1) => `rgba(125, 100, 1, ${opacity})`,
//         strokeWidth: 2, // optional, default 3
//         barPercentage: 0.5,
//         useShadowColorFromDataset: false, // optional,
//     };
//
//     return (
//         <Animatable.View style={styles.container} animation="fadeInRight">
//
//
//             <View style={styles.topView}>
//                 <View style={styles.titleView}>
//                     <Text style={styles.title}>CHECK LIST</Text>
//                 </View>
//                 <Image
//                     source={require('../assets/icons/d1.png')}
//                     resizeMode="contain"
//                     style={styles.logo}>
//                 </Image>
//             </View>
//             <Animatable.View style={styles.progressChartContainer} animation="bounceIn" duration={2500}>
//                 <ProgressChart
//                     data={data}
//                     width={300}
//                     height={150}
//                     strokeWidth={16}
//                     radius={55}
//                     chartConfig={chartConfig}
//                     hideLegend={false}
//
//                 />
//             </Animatable.View>
//             <View style={styles.contentView}>
//                 <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                         <TouchableOpacity style={styles.btnDone}>
//                             <TouchableOpacity style={styles.btnDoneCircle}>
//                                 <Image
//                                     source={require('../assets/icons/Done_127px.png')}
//                                     resizeMode="contain"
//                                     style={styles.doneLogo}>
//                                 </Image>
//                             </TouchableOpacity>
//                         </TouchableOpacity>
//
//                         <TouchableOpacity style={styles.btnPending}>
//                             <TouchableOpacity style={styles.btnPendingCircle}>
//                                 <Image
//                                     source={require('../assets/icons/no_entry_127px.png')}
//                                     resizeMode="contain"
//                                     style={styles.pendingLogo}>
//                                 </Image>
//                             </TouchableOpacity>
//                         </TouchableOpacity>
//
//                     </View>
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                     </View>
//
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                     </View>
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                     </View>
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                     </View>
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                     </View>
//                     <View style={styles.task}>
//                         <Text style={styles.formLabel}>User Name</Text>
//                     </View>
//                 </ScrollView>
//             </View>
//             <View style={styles.bottom}>
//                 <WavyBackground
//                     height={400}
//                     width={1300}
//                     amplitude={50}
//                     frequency={1}
//                     offset={180}
//                     color="rgba(155,155,155,0.3)"
//                 />
//             </View>
//             <View style={styles.bottom2}>
//                 <WavyBackground
//                     height={400}
//                     width={1300}
//                     amplitude={50}
//                     frequency={1}
//                     offset={180}
//                     color="rgba(255,72,72,0.5)"
//                 />
//             </View>
//         </Animatable.View>
//     );
// };
//
// export default ReportScreen;
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // backgroundColor: '#ffffff',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     task: {
//         height: 80,
//         backgroundColor: '#fff',
//         borderRadius: 25,
//         width: '98%',
//         marginBottom: 10,
//         elevation: 5,
//         alignSelf: 'center',
//         flexDirection:'row'
//     },
//
//     formLabel: {
//         position: 'absolute',
//         left: 30,
//         top: 5,
//         color: 'grey',
//     },
//     contentView: {
//         width: '92%',
//         height: '55%',
//         justifyContent: 'center',
//         // backgroundColor: '#eb4d4b',
//         position: 'relative',
//         top: '-3%',
//
//     },
//     progressChartContainer: {
//         height: 150,
//
//     },
//     btnDone: {
//         width: '37%',
//         height: '100%',
//         borderTopRightRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     btnDoneCircle: {
//         width: 40,
//         height: 40,
//         borderRadius: 100,
//         marginLeft: '-12%',
//         backgroundColor: 'rgb(30,213,35)',
//         justifyContent: 'center',
//         alignItems: 'center',
//
//     },
//     doneLogo: {
//         width: '50%',
//         height: '50%',
//     },
//     btnPending: {
//         width: '37%',
//         height: '100%',
//         borderTopRightRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     btnPendingCircle: {
//         width: 40,
//         height: 40,
//         borderRadius: 100,
//         marginLeft: '-12%',
//         backgroundColor: 'rgb(232,14,14)',
//         justifyContent: 'center',
//         alignItems: 'center',
//
//     },
//     pendingLogo: {
//         width: '50%',
//         height: '50%',
//     },
//
//
//     bottom: {
//         width: '100%',
//         height: '8%',
//         bottom: -55,
//         rotation: 180,
//         position: 'absolute',
//         zIndex: 1,
//     },
//     bottom2: {
//         width: '100%',
//         height: '5%',
//         bottom: -80,
//         rotation: 180,
//         position: 'absolute',
//         zIndex: 2,
//     },
//     topView: {
//         width: '100%',
//         height: '12%',
//         // backgroundColor: '#f6a800',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//
//     },
//     titleView: {
//         width: '80%',
//         height: '60%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 100,
//         // backgroundColor: 'rgba(224,224,224,0.8)',
//
//     },
//     title: {
//         fontSize: 25,
//         fontFamily: 'Poppins-SemiBold',
//         color: '#000000',
//
//     },
//     logo: {
//         width: 55,
//         height: 55,
//         shadowColor: '#050505',
//         shadowOffset: {
//             width: 0,
//             height: 3,
//         },
//         shadowOpacity: 0.29,
//         shadowRadius: 4.65,
//         elevation: 7,
//     },
// });


import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ProgressChart from 'react-native-chart-kit/dist/ProgressChart';

const ReportScreen = () => {
    const data = {
        labels: ['Done'], // optional
        data: [0.7],
    };
    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#f1f1f1',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(125, 100, 1, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional,
    };

    return (
        <Animatable.View style={styles.container} animation="fadeInRight">
            <View style={styles.mainView}>

                <View style={styles.titleMainView}>
                    <View style={styles.topView}>
                        <View style={styles.titleView}>
                            <Text style={styles.title}>CHECK LIST</Text>
                        </View>
                        <Image
                            source={require('../assets/icons/d1.png')}
                            resizeMode="contain"
                            style={styles.logo}>
                        </Image>
                    </View>
                </View>

                <View style={styles.chartView}>
                    <Animatable.View style={styles.progressChartContainer} animation="bounceIn" duration={2500}>
                        <ProgressChart
                            data={data}
                            width={300}
                            height={150}
                            strokeWidth={16}
                            radius={55}
                            chartConfig={chartConfig}
                            hideLegend={false}
                        />
                    </Animatable.View>
                </View>

                <View style={styles.taskView}>

                    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

                        <View style={styles.task}>

                            {/*Task Number  -------------------------------------------------------------------------*/}
                            <View style={styles.taskNumberView}>
                                <Text style={styles.formLabel}>01.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>

                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle}>
                                            <Image
                                                source={require('../assets/icons/Done_127px.png')}
                                                resizeMode="contain"
                                                style={styles.doneLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                {/*Right Side Button ----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnPending}>
                                        <TouchableOpacity style={styles.btnPendingCircle}>
                                            <Image
                                                source={require('../assets/icons/no_entry_127px.png')}
                                                resizeMode="contain"
                                                style={styles.pendingLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.task}>

                            {/*Task Number  -------------------------------------------------------------------------*/}
                            <View style={styles.taskNumberView}>
                                <Text style={styles.formLabel}>02.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>

                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle}>
                                            <Image
                                                source={require('../assets/icons/Done_127px.png')}
                                                resizeMode="contain"
                                                style={styles.doneLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                {/*Right Side Button ----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnPending}>
                                        <TouchableOpacity style={styles.btnPendingCircle}>
                                            <Image
                                                source={require('../assets/icons/no_entry_127px.png')}
                                                resizeMode="contain"
                                                style={styles.pendingLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.task}>

                            {/*Task Number  -------------------------------------------------------------------------*/}
                            <View style={styles.taskNumberView}>
                                <Text style={styles.formLabel}>03.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>

                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle}>
                                            <Image
                                                source={require('../assets/icons/Done_127px.png')}
                                                resizeMode="contain"
                                                style={styles.doneLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                {/*Right Side Button ----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnPending}>
                                        <TouchableOpacity style={styles.btnPendingCircle}>
                                            <Image
                                                source={require('../assets/icons/no_entry_127px.png')}
                                                resizeMode="contain"
                                                style={styles.pendingLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.task}>

                            {/*Task Number  -------------------------------------------------------------------------*/}
                            <View style={styles.taskNumberView}>
                                <Text style={styles.formLabel}>04.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>

                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle}>
                                            <Image
                                                source={require('../assets/icons/Done_127px.png')}
                                                resizeMode="contain"
                                                style={styles.doneLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                {/*Right Side Button ----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnPending}>
                                        <TouchableOpacity style={styles.btnPendingCircle}>
                                            <Image
                                                source={require('../assets/icons/no_entry_127px.png')}
                                                resizeMode="contain"
                                                style={styles.pendingLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.task}>

                            {/*Task Number  -------------------------------------------------------------------------*/}
                            <View style={styles.taskNumberView}>
                                <Text style={styles.formLabel}>05.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>

                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle}>
                                            <Image
                                                source={require('../assets/icons/Done_127px.png')}
                                                resizeMode="contain"
                                                style={styles.doneLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                {/*Right Side Button ----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnPending}>
                                        <TouchableOpacity style={styles.btnPendingCircle}>
                                            <Image
                                                source={require('../assets/icons/no_entry_127px.png')}
                                                resizeMode="contain"
                                                style={styles.pendingLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.task}>

                            {/*Task Number  -------------------------------------------------------------------------*/}
                            <View style={styles.taskNumberView}>
                                <Text style={styles.formLabel}>06.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>

                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle}>
                                            <Image
                                                source={require('../assets/icons/Done_127px.png')}
                                                resizeMode="contain"
                                                style={styles.doneLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>

                                {/*Right Side Button ----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnPending}>
                                        <TouchableOpacity style={styles.btnPendingCircle}>
                                            <Image
                                                source={require('../assets/icons/no_entry_127px.png')}
                                                resizeMode="contain"
                                                style={styles.pendingLogo}>
                                            </Image>
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>

                {/*Bottom View --------------------------------------------------------------------------------------*/}
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
        </Animatable.View>
    );
};

export default ReportScreen;

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#ff00ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleMainView: {
        width: '100%',
        height: '8%',
        // backgroundColor: '#ff0f00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chartView: {
        width: '100%',
        height: '20%',
        // backgroundColor: '#00ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskView: {
        width: '100%',
        height: '60%',
        // backgroundColor: '#ffff00'
    },
    bottomView: {
        width: '100%',
        height: '12%',
        // backgroundColor: '#ff6a00'
    },
    taskNumberView: {
        width: '12%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#700a00'
    },
    taskDetailsView: {
        width: '58%',
        height: '100%',
        // backgroundColor: '#ad004e'
    },
    taskButtonView: {
        width: '30%',
        height: '100%',
        // backgroundColor: '#005ff3',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    taskButtonViewSide: {
        width: '50%',
        height: '100%',
        // backgroundColor: '#00ffae',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    task: {
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 25,
        width: '97%',
        marginBottom: 10,
        elevation: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '1%'
    },

    formLabel: {
        position: 'absolute',
        // left: 30,
        // top: 5,
        fontSize: 20,
        color: 'grey',
    },
    contentView: {
        width: '92%',
        height: '55%',
        justifyContent: 'center',
        // backgroundColor: '#eb4d4b',
        position: 'relative',
        top: '-3%',
    },
    progressChartContainer: {
        height: 150,

    },
    btnDone: {
        width: '37%',
        height: '100%',
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDoneCircle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: '-12%',
        backgroundColor: 'rgb(30,213,35)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    doneLogo: {
        width: '50%',
        height: '50%',
    },
    btnPending: {
        width: '37%',
        height: '100%',
        borderTopRightRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPendingCircle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: '-12%',
        backgroundColor: 'rgb(232,14,14)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    pendingLogo: {
        width: '50%',
        height: '50%',
    },


    bottom: {
        width: '100%',
        height: '100%',
        bottom: -55,
        rotation: 180,
        position: 'absolute',
        zIndex: 1,
    },
    bottom2: {
        width: '100%',
        height: '100%',
        bottom: -80,
        rotation: 180,
        position: 'absolute',
        zIndex: 2,
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
    logo: {
        width: 55,
        height: 55,

    },
});

import React ,{ useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WavyBackground from 'react-native-wavy-background';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import ProgressChart from 'react-native-chart-kit/dist/ProgressChart';

const ToDoScreen = () => {
    const data = {
        labels: ['Done'], // optional
        data: [0.7],
    };

    const [setColor] = useState(0);
    const onPress = () => setColor(styles.task.backgroundColor='red');

    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#f1f1f1',
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgb(253,59,59, ${opacity})`,
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
                <View style={styles.restView}>
                    <TouchableOpacity style={styles.btnReset}>
                        <Text style={styles.txtRest}>Reset</Text>
                    </TouchableOpacity>
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
                                <Text style={styles.taskText}>
                                    Check for water accumulation on the trays of dish drying rack
                                </Text>
                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone} onPress={onPress
                                    }>
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
                                <Text style={styles.taskText}>
                                    Use insecticide sprays in dark corners (under the bed, sofa and behind curtains) and
                                    burn repellent oils inside your home
                                </Text>
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
                                <Text style={styles.taskText}>
                                    Turn over all water storage containers when empty and store them under a shelter
                                </Text>
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
                                <Text style={styles.taskText}>
                                    Loosen soil in potted plants to prevent accumulation of stagnant water on surface
                                </Text>
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
                                <Text style={styles.taskText}>
                                    Change water in vases/bowls and remove water from flower/plant pot plates
                                </Text>
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
                                <Text style={styles.taskText}>
                                    Check for water ponding due to leakage underneath kitchen sink / bathroom basin
                                </Text>
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
                                <Text style={styles.formLabel}>07.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>
                                <Text style={styles.taskText}>
                                    Clear fallen leaves and other blockages in roof gutters
                                </Text>
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
                                <Text style={styles.formLabel}>08.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>
                                <Text style={styles.taskText}>
                                    Use sand granular insecticide in gully traps and roof gutters
                                </Text>
                            </View>

                            {/*Button View --------------------------------------------------------------------------*/}
                            <View style={styles.taskButtonView}>

                                {/*Left Side Button -----------------------------------------------------------------*/}
                                <View style={styles.taskButtonViewSide}>
                                    <TouchableOpacity style={styles.btnDone}>
                                        <TouchableOpacity style={styles.btnDoneCircle} >
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
                                <Text style={styles.formLabel}>09.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>
                                <Text style={styles.taskText}>
                                    Dispose of waste properly. If possible, use closed trash bins and take out your
                                    trash on a regular basis.
                                </Text>
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
                                <Text style={styles.formLabel}>10.</Text>
                            </View>

                            {/*Details View -------------------------------------------------------------------------*/}
                            <View style={styles.taskDetailsView}>
                                <Text style={styles.taskText}>
                                    Consider putting up screens on your windows and doors to prevent mosquitoes from
                                    entering your home.
                                </Text>
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

export default ToDoScreen;

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#ff00ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleMainView: {
        width: '100%',
        height: '8%',
        // backgroundColor: '#ff0f00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartView: {
        width: '100%',
        height: '20%',
        // backgroundColor: '#00ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    restView:{
        // backgroundColor: '#00ffff',
        width: '100%',
        height:'4.5%',
        position: 'absolute',
        top: '24%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        left:-5,
    },
    btnReset: {
        width: 100,
        height: 30,
        backgroundColor: '#f0c6ff',
        right: 30,
        bottom: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtRest: {
        fontSize: 15,
        fontWeight: 'bold',
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
        width: '8%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#700a00'
    },
    taskDetailsView: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ad004e',
        textAlign: 'justify',
    },
    taskButtonView: {
        width: '22%',
        height: '100%',
        // backgroundColor: '#005ff3',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    taskButtonViewSide: {
        width: '50%',
        height: '100%',
        // backgroundColor: '#00ffae',
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskText: {
        fontSize: 15,
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
        marginTop: '1%',
    },

    formLabel: {
        position: 'absolute',
        // left: 30,
        // top: 5,
        fontSize: 15,
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
        width: 38,
        height: 38,
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
        width: 38,
        height: 38,
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

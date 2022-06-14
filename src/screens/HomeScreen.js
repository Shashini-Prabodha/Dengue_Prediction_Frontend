import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const items = [
    {name: 'TURQUOISE', code: '#1abc9c'},
    {name: 'EMERALD', code: '#2ecc71'},
    {name: 'PETER RIVER', code: '#3498db'},
    {name: 'AMETHYST', code: '#9b59b6'},
    {name: 'CARROT', code: '#e67e22'},
    {name: 'ALIZARIN', code: '#e74c3c'},


];

const HomeScreen = () => {
    return (

        <View style={styles.container}>

            <View style={styles.topHomeView1}>

            </View>

            <View style={styles.topHomeView2}>

            </View>

            <View style={styles.midHomeView}>

                <View style={styles.homeRow1}>
                    <View style={styles.homeCol1}>

                    </View>

                    <View style={styles.midView}/>

                    <View style={styles.homeCol1}>

                    </View>
                </View>

                <View style={styles.botView}/>

                <View style={styles.homeRow1}>
                    <View style={styles.homeCol1}>

                    </View>

                    <View style={styles.midView}/>

                    <View style={styles.homeCol1}>

                    </View>
                </View>

            </View>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topHomeView1:{
        width:'95%',
        height:'10%',
        backgroundColor: 'blue',
    },
    topHomeView2:{
        width:'95%',
        height:'10%',
        backgroundColor: 'yellow',
    },
    midHomeView: {
        width: '95%',
        height: '80%',
        backgroundColor: 'green',
    },
    homeRow1:{
        width:'100%',
        height:'35%',
        backgroundColor:'pink',
        flexDirection:'row'
    },
    homeCol1:{
        width:'48%',
        height:'100%',
        backgroundColor:'#8c008c',
        borderRadius:20
    },
    midView:{
        width:'4%',
    },
    botView:{
        height:'4%'
    }

});

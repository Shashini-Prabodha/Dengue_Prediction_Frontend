
import React, { useState } from 'react';

import { Text, StyleSheet, Button, SafeAreaView } from 'react-native';

export default function App() {

    // Default Text Font Size.
    const [FontSize, setFontSize] = useState(20);
    const [Color, setColor] = useState(20);

    const [text, setText] = useState('Make Text Bigger');

    const letChangeTextSize = () => {
        setColor("#ee5253")
        if (FontSize == 20) {
            setFontSize(32);
            setText('Make Text Smaller')
        } else {
            setFontSize(20);
            setText('Make Text Bigger')
        }
    }

    return (
        <SafeAreaView style={styleSheet.MainContainer}>

            <Text style={[styleSheet.text, { fontSize: FontSize ,color: Color}]}>
                This is a Sample Text.
            </Text>

            <Button onPress={letChangeTextSize}
                    title={text} />

        </SafeAreaView>
    );
}

const styleSheet = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        textAlign: 'center',
        color: 'black',
        paddingBottom: 14
    }

});

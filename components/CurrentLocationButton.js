import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton = function(props) {
    const cb = props.cb ? props.cb : () => console.log('Callback function not passed not passed to CurrentLocationButton');
    const bottom = props.bottom ? props.bottom : 65;
    return(
        <View style={[styles.container, {top: HEIGHT - bottom}]}>
            <MaterialIcons
                name = "my-location"
                color='#000000'
                size={25}
                onPress={() => { cb() }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        left: (WIDTH-30),
        borderRadius: 50,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        alignItems: 'center',
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 1.0,
        justifyContent: 'space-around',
    },
})
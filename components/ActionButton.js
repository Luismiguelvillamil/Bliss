import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export const ActionButton = function(props) {
    return (
        <TouchableOpacity onPress={() => {}} style={styles.container}>
            <View style={styles.leftCol}>
                <Text style={{fontSize: 9}}>{'\u25A0'}</Text>
            </View>
            <View style={styles.centerCol}>
                <Text style={{fontSize: 18, color: '#545454'}}>
                    How will you change your world?
                </Text>
            </View>
            <View style={styles.rightCol}>
                <Ionicons name='md-globe' color = '#000000' size={24} style={{alignSelf: 'center'}}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        flexDirection: 'row',
        width: (WIDTH-40),
        height: 60,
        top: 60,
        left: 20,
        borderRadius: 2,
        backgroundColor: 'white',
        shadowColor: '#000000',
        alignItems: 'center',
        elevation: 6,
        shadowRadius: 3,
        shadowOpacity: 1.0,
    },
    leftCol: {
        flex: 1,
        alignItems: 'center'
    },
    centerCol:{
        flex: 4,
    },
    rightCol: {
        flex: 1,
        borderLeftWidth: 1,
        borderColor: 'black',
    },
})

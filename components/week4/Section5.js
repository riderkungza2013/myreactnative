import React from 'react';
import { View } from 'react-native';
import MyIcon from '../week3/MyIcon';


export default function Section5() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
            <MyIcon title='WiFi' name='wifi' size={30} color='red' />
            <MyIcon title='Coffee' name='coffee' size={30} color='red' />
            <MyIcon title='Buth' name='bath' size={30} color='red' />
            <MyIcon title='Car' name='car' size={30} color='red' />
            <MyIcon title='Paw' name='paw' size={30} color='red' />
        </View>

    );
}
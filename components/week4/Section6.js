import React from 'react';
import { View , Text , Image } from 'react-native';


export default function Section6() {
    return (
        <View style={{  flex: 1, marginTop: 10 }}>
            <Text style={{ fontSize : 20 }}>
                Location
            </Text>
            <Text>
            218 Austen Mountain, consectetur adipiscing,
             sed do eiusmod tempor incididunt ut labore et…
            </Text>
            <View style={{ flexDirection : 'row' }}>
            <Image style={{ flex : 1 , resizeMode : "cover" ,marginTop : 10 }} source={ require('../../assets/week3/map.jpg')} />
            </View>
        </View>

    );
}
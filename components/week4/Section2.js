import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ flex: 1, marginTop: -50 , margin: 15 ,padding: 15 , backgroundColor : '#E8E8E8', alignItems : 'center', borderRadius: 10 , }}>
            <Text style={{ fontSize: 30 }} >Hilton San Francisco</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
            </View>
            <Text style={{ textAlign : 'center'}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </View>

    );
}
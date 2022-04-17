import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';

export default function Section8() {
    return (
        <View style={{  flexDirection : 'row' , justifyContent : 'space-between' , marginTop : 20 }}>
            {/* View1 */}
            <View style={{ flexDirection : 'column'}}>
                <Text>Price</Text>
                <Text style={{ color : 'red'}}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            {/* View2 */}
            <View style={{ justifyContent : 'center'}}>
                <Button title="Book Now" color="tomato" />
            </View>
        </View>

    );
}
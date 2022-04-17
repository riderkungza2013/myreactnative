import React from 'react';
import { View, Image, Text } from 'react-native';

export default function Card() {
    return (
        <View style={{ padding : 20  }}>
            {/* View1 */}
            <View style= {{ flexDirection : 'row', paddingHorizontal : 10 }}> 
                <Image style={{ width: 50 , height : 50, borderRadius : 50/2 }} source={ require('../../assets/week3/profile-2.jpg')} />
                <View style={{ paddingLeft : 10 }}>
                    <Text style={{ fontSize : 20 }} >Steve Garrett</Text>
                    <Text style={{ color : 'gray' }} >5 hours ago | 100K views</Text>
                </View>
            </View>
            {/* View2 */}
            <View style={{ flexDirection : 'row', marginVertical: 10 }}>
                <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 16/9 }} source={ require('../../assets/week3/trip-2.jpg')} />
            </View>
            {/* View3 */}
            <View style={{ paddingHorizontal : 10 }}> 
                <Text style={{ fontSize : 20 }} >Overseas Adventure Travel In Nepal</Text>
                <Text style={{ color : 'gray' }} >Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. 
                    Located in one of the uprising areas of Tokyo
                </Text>
            </View>
        </View>    
    );
}

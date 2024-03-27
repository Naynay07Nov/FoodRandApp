import React from 'react';
import { Image, Text, View } from 'react-native';
import MyIcon from '../MyIcon';
import { useNavigation } from '@react-navigation/native';

export default function GoReview() {
    const navigation = useNavigation();
    return (
        <View style={{ justifyContent: 'space-between', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: 'gray', padding: 15, marginTop: 10 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
                {/* View ก้อนที่ 1  */}

                <View style={{ paddingLeft: 1 }}>
                    <Text style={{ fontSize: 22, color: 'red' }}>รีวิวร้านอาหาร</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
                <View style={{ marginRight: 20, marginTop: 5 }}>
                    <MyIcon name="chevron-right" size={35} color="red" onPress={() => { navigation.navigate("FRhome"); }} />

                </View>

            </View>

        </View >
    );
}

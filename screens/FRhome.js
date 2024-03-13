import React from "react";
import { ScrollView, View } from "react-native";

import Restaurant from "../components/Restaurant";
import RestaurantC from "../components/RestaurantC";
import RestaurantJ from "../components/RestaurantJ";
import { useNavigation } from '@react-navigation/native';


export default function FRhome() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
                
                <Restaurant />
                <RestaurantC />
                <RestaurantJ />
            </View>
        </ScrollView>


    );
}


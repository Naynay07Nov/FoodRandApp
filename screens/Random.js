import React from "react";
import { ScrollView, Text, View } from "react-native";

import Menu from "../components/Menu";
import { FontAwesome } from "@expo/vector-icons";

export default function Random() {
    return (
        <View style={{ flexDirection: 'column' }}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
                    

                </View>
            </ScrollView>
            <View style={{ justifyContent: 'flex-end', marginTop: 500, borderTopWidth: 1, borderTopColor: 'black', opacity: 0.5 }}>
                <Text style={{ backgroundColor: 'gray', fontSize: 20, padding: 18, textAlign: 'center' }}></Text>

             
            </View>
        </View>

    );
}


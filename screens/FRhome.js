import React from "react";
import { ScrollView, View } from "react-native";
import Review from "../components/Review";


export default function FRHome() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
                <Review style={{ margin: 20 }} />
            </View>
        </ScrollView>

    );
}


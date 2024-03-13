import React from "react";
import { ScrollView, View } from "react-native";
import Review from "../components/Review";
import TopMenu from "../components/FoodHome/TopMenu";
import Welcome from "../components/FoodHome/Welcome";
import RandomGroup from "../components/FoodHome/RandomGroup";
import GoReview from "../components/FoodHome/GoReview";

export default function FoodHome() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
                <TopMenu/>
                <Welcome/>
                <RandomGroup/>
                <GoReview/>
               
            </View>
        </ScrollView>


    );
}


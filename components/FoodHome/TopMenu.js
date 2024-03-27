import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "../MyIcon";

export default function TopMenu(props) {


    return (
        <View style={{ paddingTop: 20, paddingBottom: 1,justifyContent:"space-between" }}>
            <View style={{ flexDirection: "row",justifyContent:"space-between"}}>
               
                <MyIcon  name="gear" size={30} color="gray" />
                <MyIcon  name="heart" size={30} color="red" />

            </View>
           
        </View>

    );
}





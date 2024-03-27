import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Menu(props) {


    return (
        <View style={{justifyContent:'flex-end', flexDirection: "column",paddingTop:20, paddingBottom: 1 }}>
           
            <View style={{ flexDirection: "row", paddingBottom: 1 }}>
            <MyIcon  name="gear" size={30} color="orange" />
            <MyIcon  name="heart" size={30} color="orange" />
            </View>
        </View>

    );
}





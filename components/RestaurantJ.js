import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";


export default function RestaurantJ(props) {

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/Naynay07Nov/FoodRandApp/main/DataJapaneseRestaurant');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);


    return (
        <View style={props.style}>
            <View style={{ marginRight: 230, marginLeft: 5, alignItems: 'flex-start', flex: 1, marginTop: 20, padding: 1, backgroundColor: '#f9acc0', borderRadius: 15 }}>
                <Text style={{ fontSize: 20, padding: 10 }}>Japanese Food</Text>
            </View>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginLeft: 5, marginRight: 5, marginTop: 15 }}>
                                <Image style={{ width: 210, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ flexDirection: "row", marginTop: -30, height: 65, width: 210, paddingHorizontal: 10, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderColor: "gray", borderWidth: 1 }}>
                                    <View style={{ padding: 8 }}>

                                        <Text style={{ fontSize: 16, color: "red" }}>{item.rating}</Text>
                                        <Text style={{ textAlign: 'center', fontSize: 12, color: "gray" }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding: 8 }}>
                                        <Text style={{ fontSize: 12, color: "black" }}>{item.name}</Text>
                                        <Text style={{ fontSize: 10, color: "gray" }}>{item.address}</Text>
                                        <Text style={{ fontSize: 10, color: "gray" }}>{item.address2}</Text>
                                    </View>


                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>

    );
}





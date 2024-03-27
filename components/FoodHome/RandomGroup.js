import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";


export default function RandomGroup(props) {
    const tours = [
        { "id": "1", "title": "สุ่มทั้งหมด", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "เมนูข้าว", "uri": "https://raw.githubusercontent.com/Naynay07Nov/FoodRandApp/main/assets/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7.png"  },
        { "id": "3", "title": "เมนูเส้น", "uri": "https://raw.githubusercontent.com/Naynay07Nov/FoodRandApp/main/assets/%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99.png"  },
        { "id": "4", "title": "นานาชาติ", "uri": "https://raw.githubusercontent.com/Naynay07Nov/FoodRandApp/main/assets/%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4.png"  },
        { "id": "5", "title": "ของหวาน", "uri": "https://raw.githubusercontent.com/Naynay07Nov/FoodRandApp/main/assets/%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%99.png" },
        { "id": "6", "title": "เครื่องดื่ม", "uri": "https://raw.githubusercontent.com/Naynay07Nov/FoodRandApp/main/assets/%E0%B8%99%E0%B9%89%E0%B8%B3.png" }
    ];
    
    
   
    return (
        <View style={{marginRight:10,marginTop:20,padding:10}}>
            <Text style={{ fontSize: 22 }}>หมวดหมู่สุ่มอาหาร</Text>
            
            <FlatList
                horizontal={true}
                data={tours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{marginRight:10,marginTop:20}}>
                            <Image style={{ width:130, height :130, borderRadius:10 }} source={{ uri : item.uri}} />
                            <View style={{ marginTop : -30, height : 30 , width: 130, paddingHorizontal : 10, backgroundColor : 'white', opacity : 0.6, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10 }}>
                                <Text style={{ fontSize:20, color : "black"}}>{item.title}</Text>
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





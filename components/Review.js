import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";


export default function Review(props) {
    const menu = [
        { "type": "Thai Food", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "type": "Japanese Food", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
        { "type": "Korean Food", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
        { "type": "Chinese Food", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
        { "type": "Itarian Food", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" },
        { "type": "Indian Food", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
  
    return (
        <View style={{ flexDirection:"column",justifyContent:"space-between",borderBottomWidth:1,paddingBottom:10}}>
          
            <Text style={{backgroundColor: 'lightgreen', marginTop:10,fontSize: 20 ,padding:18,textAlign:'center' }}>Review</Text>
            
            <FlatList
                horizontal={true}
                data={menu}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{marginRight:1}}>
                          
                            <View style={{ marginTop : 15, height : 27 , width: 150, paddingHorizontal : 10, backgroundColor : 'green', borderRadius : 10 ,marginLeft:5 }}>
                                <Text style={{ fontSize:18, color : "white",textAlign:'center'}}>{item.type}</Text>
                            </View>            
                        </View>
                        );
                    }
                }
                keyExtractor={item => item.type}
            />
        </View>
    
    );
}





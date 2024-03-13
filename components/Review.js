import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, View } from "react-native";


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
        <View style={{ flexDirection:"column",justifyContent:"space-between",paddingBottom:10}}>
          
            <Text style={{backgroundColor: 'lightgreen', marginTop:10,fontSize: 20 ,padding:18,textAlign:'center' }}>Review</Text>
            
          
        </View>
    
    );
}





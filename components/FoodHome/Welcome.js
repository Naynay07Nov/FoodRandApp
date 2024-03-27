import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function Welcome() {
    return (
        <View style={{ padding: 1 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 6 / 2 }} source={require("../../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ (3).png")} />
            </View>
            {/* View ก้อนที่ 2 */}

            <View style={{ padding: 0 }}>


                {/* View ก้อนที่ 3 */}
                <View style={{ flexDirection: "row" }}>
                    <View style={{ alignItems: 'flex-start', flex: 1, marginTop: -80, padding: 10, backgroundColor: '#fffafa', borderRadius: 0, opacity: 0.6 }}>
                        <View style={{ marginTop: 0 }}>
                            <Text style={{ fontSize: 20 }}></Text>
                        </View>

                    </View>

                </View>
                <View style={{ alignItems: 'flex-start', marginTop: -70, marginLeft: 15 }}>
                    <View style={{ marginTop: 0 }}>
                        <Text style={{ fontSize: 27 }}>Welcome</Text>
                    </View>
                    <View style={{ marginTop: 0 }}>
                        <Text style={{ fontSize: 18 }}>ยินดีต้อนรับเข้าสู่....</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

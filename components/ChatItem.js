import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function chatItem(item) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/avatar.png")}
        style={{ height: hp(6), aspectRatio: 1, borderRadius: 10 }}
      />

      <View style={{ flex: 1, gap: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Nomi</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

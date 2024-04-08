import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { blurhash } from "../utils/common";

export default function chatItem(item, router, noBorder) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        alignItems: "center",
        marginHorizontal: 6,
        marginBottom: 16,
        paddingBottom: 8,
        borderBottomColor: "rgba(209, 213, 219, 0.5)",
        borderBottomWidth: 1,
      }}
    >
      <Image
        source={item?.profileUrl}
        style={{ height: hp(6), width: hp(6), borderRadius: 100 }}
        placeholder={blurhash}
        transition={500}
      />

      <View style={{ flex: 1, gap: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: hp(1.8) }}>{item?.username}</Text>
          <Text style={{ fontSize: hp(1.6) }}>Time</Text>
        </View>
        <Text style={{ fontSize: hp(1.6) }}>Last massage</Text>
      </View>
    </TouchableOpacity>
  );
}

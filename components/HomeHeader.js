import { View, Text, Platform } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ios = Platform.OS === "ios";
export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: ios ? top : top + 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp("5%"),
        backgroundColor: "#00C7FF", // bg-indigo-400
        paddingBottom: 6, // pb-6
        borderRadius: wp("5%"), // rounded-b-3xl
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}
    >
      <Text>HomeHeader</Text>
    </View>
  );
}

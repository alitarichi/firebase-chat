import { Text, View } from "react-native";
import { MenuOption } from "react-native-popup-menu";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const MenuItem = ({ text, action, value, icon }) => {
  return (
    <MenuOption onSelect={() => action(value)}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 4,
          paddingVertical: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>icon</Text>
        <Text>text</Text>
      </View>
    </MenuOption>
  );
};

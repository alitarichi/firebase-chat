import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatItem from "./ChatItem";

export default function ChatList(users) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => {
          item;
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ChatItem item={item} index={index} />}
      />
    </View>
  );
}

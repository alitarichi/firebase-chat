import { View, Text, FlatList } from "react-native";
import React from "react";
import ChatItem from "../components/ChatItem";

export default function ChatList(users) {
  return (
    <View>
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ChatItem item={item} />}
      />
    </View>
  );
}

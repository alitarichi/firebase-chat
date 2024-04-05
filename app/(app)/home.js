import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([1, 2, 3]);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      {users.lenght > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size="larger" color="#00C7FF" />
        </View>
      )}
    </View>
  );
}

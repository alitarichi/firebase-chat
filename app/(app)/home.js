import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChatList from "../../components/ChatList";
import { query, where } from "firebase/firestore";
import { usersRef } from "../../firebaseConfig";

export default function Home() {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([1, 2, 3]);

  useEffect(() => {
    if (user?.uid) getUsers();
  }, []);
  const getUsers = async () => {
    // fetch users
    const q = query(usersRef, where("userId", "!=", user?.uid));

    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });

    setUsers(data);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      {users.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}

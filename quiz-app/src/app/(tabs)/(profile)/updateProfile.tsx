import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import UpdateProfileForm from "@design/Form/UpdateProfileForm";
import { supabase } from "@/lib/supabase";
import { variables } from "@/style/theme";


const UpdateProfile = () => {
  const handleUpdateProfile = async (data: { username?: string; avatar?: string }) => {
    console.log("Updating profile with:", data);

    const { error } = await supabase.rpc("update_user_profile", {
      new_username: data.username || null,
      new_avatar: data.avatar || null,
    });

    if (error) {
      console.error("Error updating profile:", error.message);
      Alert.alert("Error updating profile", error.message);
    } else {
      Alert.alert("Profile updated successfully!");
    }
  };

  return (
    <View style={styles.container}>
      <UpdateProfileForm onSubmit={handleUpdateProfile} />
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: variables.padding.xxxLarge,
    backgroundColor: variables.colors.background,
    
  },
});

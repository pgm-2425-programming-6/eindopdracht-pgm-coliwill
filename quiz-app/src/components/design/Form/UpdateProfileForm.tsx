import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { SvgUri } from "react-native-svg";
import Button from "@design/Button/Button";
import ErrorText from "@design/global/ErrorText";
import { variables } from "@/style/theme";
import getAvatars from "@/core/modules/avatars/api";
import { getAvatarImageUrl } from "@/core/modules/storage/utils";

type Props = {
  onSubmit: (data: { username?: string; avatar?: string }) => void; // Allow optional fields
  defaultValues?: { username?: string; avatar?: string };
};

const UpdateProfileForm = ({ onSubmit, defaultValues = {} }: Props) => {
  const {
    data: avatars,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["avatars"],
    queryFn: getAvatars,
  });

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: defaultValues.username || "",
      avatar: defaultValues.avatar || "",
    },
  });

  const handleAvatarSelect = (avatar: string) => {
    setValue("avatar", avatar);
  };

  const handleFormSubmit = () => {
    const currentValues = getValues();

    // Ensure unchanged fields retain their default values
    const finalValues = {
      username: currentValues.username || defaultValues.username,
      avatar: currentValues.avatar || defaultValues.avatar,
    };

    // Skip submission if no changes were made
    if (
      finalValues.username === defaultValues.username &&
      finalValues.avatar === defaultValues.avatar
    ) {
      console.log("No changes made to the profile.");
      return;
    }

    console.log("Updating profile with:", finalValues);
    onSubmit(finalValues);
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading avatars!</Text>;
  }

  return (
    <View style={{ width: "100%" }}>
      {/* Username Input */}
      <Controller
        name="username"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={value}
              onChangeText={onChange}
            />
          </View>
        )}
      />
      {errors.username && (
        <ErrorText>{errors.username.message as string}</ErrorText>
      )}

      {/* Avatar Selection */}
      <Text style={styles.label}>Select an Avatar</Text>
      <View style={styles.avatarContainer}>
        {avatars && avatars.map((avatar) => {
          const imageUrl = getAvatarImageUrl(avatar.image_name);
          return (
            <TouchableOpacity
              key={avatar.id}
              style={[
                styles.avatar,
                avatar.image_name === defaultValues.avatar
                  ? styles.selectedAvatar
                  : {},
              ]}
              onPress={() => handleAvatarSelect(avatar.image_name)}
            >
              <SvgUri uri={imageUrl} width={80} height={80} />
            </TouchableOpacity>
          );
        })}
      </View>
      {errors.avatar && (
        <ErrorText>{errors.avatar.message as string}</ErrorText>
      )}

      {/* Submit Button */}
      <Button onPress={handleSubmit(handleFormSubmit)}>Update Profile</Button>
    </View>
  );
};

export default UpdateProfileForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: variables.colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedAvatar: {
    borderColor: variables.colors.primary,
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInputField from "@design/Form/TextInputField";
import Button from "@design/Button/Button";
import ErrorText from "@design/global/ErrorText";
import { variables } from "@/style/theme";


type Props = {
  onSubmit: (data: { username: string; avatar: string }) => void;
  defaultValues?: { username?: string; avatar?: string }; 
};

const UpdateProfileForm = ({ onSubmit, defaultValues = {} }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: defaultValues.username || "",
      avatar: defaultValues.avatar || "",
    },
  });

  return (
    <View style={{ width: "100%" }}>
     
      <Controller
        name="username"
        control={control}
        rules={{
          required: "Username is required",
          minLength: { value: 3, message: "Username must be at least 3 characters long" },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label="Username"
            placeholder="Enter your username"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.username && <ErrorText>{errors.username.message as string}</ErrorText>}

  
      <Controller
        name="avatar"
        control={control}
        rules={{
          required: "Avatar is required",
          pattern: {
            value: /^avatar[0-9]*$/,
            message: 'Avatar must be "avatar", "avatar1", "avatar2", etc.',
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label="Avatar"
            placeholder="Enter avatar (e.g., avatar or avatar1)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.avatar && <ErrorText>{errors.avatar.message as string}</ErrorText>}

     
      <Button onPress={handleSubmit(onSubmit)}>Update Profile</Button>
    </View>
  );
};

export default UpdateProfileForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: variables.padding.xxxLarge,
    backgroundColor: variables.colors.background,
  },
});

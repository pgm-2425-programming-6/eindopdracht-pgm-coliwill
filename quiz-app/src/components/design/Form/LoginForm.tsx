import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInputField from "@design/Form/TextInputField";
import Button from "@design/Button/Button";

type Props = {
  onSubmit: (data: any) => void;
};

const LoginForm = ({ onSubmit}: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={{ width: "100%" }}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label="Email"
            placeholder="Enter your email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && <Text>{errors.email.message as string}</Text>}

      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label="Password"
            placeholder="Password"
            value={value}
            secureTextEntry={true}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text>{errors.password.message as string}</Text>}

      <Button onPress={handleSubmit(onSubmit)}>Login</Button>
    </View>
  );
};

export default LoginForm;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInputField from "@design/Form/TextInputField";
import Button from "@design/Button/Button";
import ErrorText from "@design/global/ErrorText";
import { useRouter } from "expo-router";
import { variables } from "@/style/theme";

type Props = {
  onSubmit: (data: any) => void;
};

const LoginForm = ({ onSubmit}: Props) => {

  const router = useRouter();
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
      {errors.email && <ErrorText>{errors.email.message as string}</ErrorText>}

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
      {errors.password && <ErrorText>{errors.password.message as string}</ErrorText>}

      <Button onPress={handleSubmit(onSubmit)}>Login</Button>
      <Button color={variables.colors.secondary} onPress={() => router.push("/auth/register")}>Register</Button>
    </View>
  );
};

export default LoginForm;

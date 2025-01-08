import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInputField from "@design/Form/TextInputField";
import Button from "@design/Button/Button";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={{ width: "100%" }}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label="Email"
            placeholder="Enter your email"
            value={value}
            onChangeText={onChange}
          />
        )}
        rules={{ required: "Email is required",}}
      />

      {errors.email && <Text>Not valid email</Text>}

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInputField
            label="Password"
            placeholder="Password"
            value={value}
            onChangeText={onChange}
          />
        )}
        rules={{ required: "Email is required",}}
      />

      {errors.email && <Text>Not valid email</Text>}

      <Button onPress={handleSubmit(onSubmit)}>Login</Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});

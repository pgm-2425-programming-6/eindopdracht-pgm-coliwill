import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import ChevronDownIcon from "@assets/images/icons/chevronDown.svg";

import { variables } from "@/style/theme";


const CategoryDropdown = () => {
  const data = ["Category 1", "Category 2", "Category 3"];
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      renderButton={(selectedItem) => {
        return (
          <View style={styles.selectContainer}>
            <ChevronDownIcon width={20} height={20} />
            <Text style={styles.buttonText}>{selectedItem || "Category"}</Text>
          </View>
        );
      }}
      renderItem={(item, index) => {
        return (
          <View style={{ padding: variables.padding.medium }}>
            <Text>{item}</Text>
          </View>
        );

      }}
    />
  );
};

export default CategoryDropdown;

const styles = StyleSheet.create({
  selectContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: variables.margin.small,
    justifyContent: "space-between",
    color: variables.colors.buttonText,
    backgroundColor: variables.colors.primary,
    borderRadius: variables.borderRadius.medium,
    padding: variables.padding.medium,
  },

  buttonText: {
    color: variables.colors.buttonText,
    fontSize: variables.fontSizes.large,
    fontFamily: variables.fonts.bold,
  },
});

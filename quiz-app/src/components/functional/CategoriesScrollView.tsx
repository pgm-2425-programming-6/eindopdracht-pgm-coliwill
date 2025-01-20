import React from "react";
import { useQuery } from "@tanstack/react-query";
import LinkButton from "@design/Button/LinkButton";
import HorizontalScroll from "@design/ScrollContainer/HorizontalScroll";
import { Text } from "react-native";
import { Categories } from "@core/modules/categories/types";
import { getCategories } from "@core/modules/categories/api";
import { variables } from "@/style/theme";

const CategoriesScrollView = () => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading categories!</Text>;
  }

const linkButtons: Categories[] = categories?.map((category) => ({
  id: category.id,
  name: category.name,
  created_at: category.created_at,
})) || [];

  return (
    <HorizontalScroll<Categories>
      data={linkButtons ?? []}
      renderItem={({ item }) => (
        <LinkButton color={variables.colors.primary} onPress={() => {}}>{item.name}</LinkButton>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default CategoriesScrollView;
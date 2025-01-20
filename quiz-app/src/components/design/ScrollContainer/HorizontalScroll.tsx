import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

interface HorizontalScrollProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => JSX.Element;
  keyExtractor: (item: T, index: number) => string;
}

const HorizontalScroll = <T,>({ data, renderItem, keyExtractor }: HorizontalScrollProps<T>) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {
    flexDirection: "row",
    gap: 10,
  },
});

export default HorizontalScroll;

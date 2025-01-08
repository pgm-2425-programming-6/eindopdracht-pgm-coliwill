import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const HorizontalScrollView = () => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollViewContent}>
        {Array.from({ length: 20 }, (_, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{`Item ${index + 1}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scrollViewContent: {
    flexDirection: 'row', 
  },
  item: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HorizontalScrollView;

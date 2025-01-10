import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import LinkButton from '../Button/LinkButton';

import { variables } from '@/style/theme';

type Props = {
  children: React.ReactNode;
};  


const HorizontalScrollView = ({children}:Props) => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollViewContent}>
        {Array.from({ length: 10 }, (_, index) => (
          <React.Fragment key={index}>{children}</React.Fragment>
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
  },
  scrollViewContent: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default HorizontalScrollView;

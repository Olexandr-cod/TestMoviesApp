import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


interface LoadingIndicatorProps {
  loadingSize?: number | 'small' | 'large' | undefined;
  loadingColor?: string;
}
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  loadingSize,
  loadingColor,
}) => {
  return (
    <View style={cs.container}>
      <ActivityIndicator
        size={loadingSize ? loadingSize : 'small'}
        color={loadingColor ? loadingColor : 'black'}
      />
    </View>
  );
};

const cs = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingIndicator;

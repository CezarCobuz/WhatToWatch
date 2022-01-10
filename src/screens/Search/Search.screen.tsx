import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {getMovies} from '../../services/api';

export const SearchScreen = () => {
  return (
    <View>
      <Text>TODO: Search Input</Text>
      <Text>TODO: FlatList</Text>

      <Button
        onPress={() => getMovies()}
        title="Test API"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

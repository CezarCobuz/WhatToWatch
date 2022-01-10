import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {SearchScreen} from './src/screens/Search/Search.screen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SearchScreen />
    </SafeAreaView>
  );
};

export default App;

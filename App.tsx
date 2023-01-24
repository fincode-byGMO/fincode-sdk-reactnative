// **************************
// import
// **************************
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
  UIManager,
  requireNativeComponent,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import * as Fincode from './fincode_component/component';

// **************************
// view
// **************************
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
        <Fincode.FincodeVerticalView style={styles.box} />
        {/* <Fincode.FincodeHorizontalView style={styles.box} /> */}
      </View>
    </SafeAreaView>
  );
};

// **************************
// styles
// **************************
const styles = StyleSheet.create({
  box: {},
});

export default App;

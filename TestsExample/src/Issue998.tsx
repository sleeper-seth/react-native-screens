import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

function AccessibleHeaderLeft() {
  return (
    <Text accessible accessibilityRole="header">
      Left
    </Text>
  );
}

function AccessibleHeaderRight() {
  return (
    <Text accessible accessibilityRole="header">
      Right
    </Text>
  );
}

function AccessibleHeaderCenter() {
  return (
    <Text accessible accessibilityRole="header" accessibilityLabel="Center label">
      Center
    </Text>
  );
}

export default function App() {
  return (
    <View style={{flex: 1, paddingBottom: 200}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerLeft: AccessibleHeaderLeft,
            headerCenter: AccessibleHeaderCenter,
            headerRight: AccessibleHeaderRight,
            stackPresentation: 'fullScreenModal',
          }}>
          <Stack.Screen name="Top" component={First} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function First({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase>;
}) {
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <Button
        title="Tap me for second screen"
        onPress={() => navigation.push('Top1')}
      />
    </View>
  );
}

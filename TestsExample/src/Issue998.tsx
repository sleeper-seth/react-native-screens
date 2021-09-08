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
    <Text
      accessible
      accessibilityRole="header"
      accessibilityLabel="Center label">
      Center
    </Text>
  );
}

export default function App() {
  return (
    <View style={{flex: 1, paddingBottom: 200}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Top"
            component={First}
            options={{
              headerLeft: AccessibleHeaderLeft,
              headerCenter: AccessibleHeaderCenter,
              headerRight: AccessibleHeaderRight,
              stackPresentation: 'fullScreenModal',
            }}
          />
          <Stack.Screen
            name="Second"
            component={Second}
            options={{
              headerLeft: AccessibleHeaderLeft,
              headerCenter: AccessibleHeaderCenter,
              headerRight: AccessibleHeaderRight,
              stackPresentation: 'fullScreenModal',
            }}
          />
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
        onPress={() => navigation.push('Second')}
      />
    </View>
  );
}

function Second({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase>;
}) {
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <Button
        title="Tap me to go back"
        onPress={() => navigation.push('Top')}
      />
    </View>
  );
}

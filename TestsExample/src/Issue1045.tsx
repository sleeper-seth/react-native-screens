import * as React from 'react';
import {Alert, Button, View} from 'react-native';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

function AccessibleHeaderLeft() {
  return <Button title="Left" onPress={() => Alert.alert('Clicked')} />;
}

function AccessibleHeaderRight() {
  return <Button title="Right" onPress={() => Alert.alert('Clicked right ')} />;
}

function AccessibleHeaderCenter() {
  return (
    <Button title="Center" onPress={() => Alert.alert('Clicked center')} />
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
      <Button
        title="Open this screen again"
        onPress={() => navigation.push('Top')}
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

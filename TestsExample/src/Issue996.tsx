import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{gestureEnabled: true}}>
          <Stack.Screen
            name="First"
            component={First}
            options={{
              searchBar: {
                placeholder: 'Interesting places...',
                obscureBackground: false,
                autoCapitalize: 'none',
                onBlur: () => {
                  console.log('Blur');
                },
              },
            }}
          />
          <Stack.Screen
            name="Second"
            component={Second}
            options={{
              headerShown: false,
              searchBar: {
                hideNavigationBar: true,
              },
              headerLeft: () => null,
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
    <View style={{backgroundColor: '#000', flex: 1, justifyContent: 'center'}}>
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
    <View style={{backgroundColor: '#333', flex: 1, justifyContent: 'center'}}>
      <Button title="Tap me to go back" onPress={() => navigation.pop()} />
    </View>
  );
}

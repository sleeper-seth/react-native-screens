import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function headerLeft() {
  return <Text>1</Text>;
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{gestureEnabled: true}}>
          <Stack.Screen
            name="First"
            component={First}
            options={{
              gestureEnabled: true,
            }}
          />
          <Stack.Screen
            name="Second"
            component={Second}
            options={{
              headerShown: true,
              disableBackButtonMenu: true,
              headerLeft,
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
  const [addPadding, setAddPadding] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      searchBar: {
        onCancelButtonPress: () => {
          setIsFocused(false);
        },
        onFocus: () => {
          console.log('Focus')
          setIsFocused(true);
        },
        placeholder: 'Interesting places...',
        obscureBackground: false,
        autoCapitalize: 'none',
      },
    });
  }, []);
  navigation.addListener('transitionStart', () => {
    if (isFocused) setAddPadding(true);
  });
  navigation.addListener('appear', () => {
    setAddPadding(false);
  });
  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        paddingTop: addPadding ? 99 : 0,
      }}>
      <SafeAreaView>
        <Button
          title="Tap me for second screen"
          onPress={() => {
            navigation.push('Second');
          }}
        />
      </SafeAreaView>
    </View>
  );
}

function Second({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase>;
}) {
  return (
    <View style={{backgroundColor: '#777', flex: 1, justifyContent: 'center'}}>
      <Button
        title="Tap me to go back"
        onPress={() => {
          navigation.pop();
        }}
      />
      <Button
        title="Open this screen again"
        onPress={() => navigation.push('Second')}
      />
    </View>
  );
}

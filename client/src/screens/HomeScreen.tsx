import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Button} from 'react-native';
type RootStackParamList = {
  Home: undefined;
  Other: undefined;
  Minio: undefined;
  Test: undefined;
  Map: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Other Screen"
        onPress={() => navigation.navigate('Other')}
      />
      <Button
        title="Go to Minio Screen"
        onPress={() => navigation.navigate('Minio')}
      />
      <Button
        title="Go to Test Screen"
        onPress={() => navigation.navigate('Test')}
      />
      <Button
        title="Go to Map Screen"
        onPress={() => navigation.navigate('Map')}
      />
    </View>
  );
};

export default HomeScreen;

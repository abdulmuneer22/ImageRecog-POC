import React from 'react';
import { View, Text } from 'react-native';
import EntryModule from '../modules/entrymodule'
import FaceIdModule from '../modules/FaceId'


import { StackNavigator } from 'react-navigation';

    const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    </View>
    );

    const RootNavigator = StackNavigator({
        Entry: {
        screen: EntryModule
        },
        FaceRecog: {
        screen: FaceIdModule,
        },
        },
        {headerMode: 'none'}
);
  

export default RootNavigator;
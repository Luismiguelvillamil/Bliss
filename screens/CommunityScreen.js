import React from 'react';
import {Text,
    ScrollView, StyleSheet, View
} from 'react-native';
//import { ExpoConfigView } from '@expo/samples';

export default function CommunityScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return(
      <View>
          <Text style={{fontSize: 36, color: 'pink'}}>if you read this you are gay</Text>
      </View>
  );
}

CommunityScreen.navigationOptions = {
  title: 'Community',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
  });
import React from 'react';
import { ScrollView,
  StyleSheet,
  View,
  Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { MapView } from 'react-native-maps';
// import {MapView} from 'expo';

export default function LinksScreen() {
  return (
    // <ScrollView style={styles.container}>
    //   {/**
    //    * Go ahead and delete ExpoLinksView and replace it with your content;
    //    * we just wanted to provide you with some helpful links.
    //    */}
    //   {/* <ExpoLinksView /> */}
    // </ScrollView>
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <MapView
        initialRegion = {
          {latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,}}
        showsUserLocation = {true}
        showsCompass = {true}
        rotateEnabled = {false}
        style={{felx: 1}}>
      </MapView>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Community',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {Text,
    ScrollView, StyleSheet, View
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { ActionButton } from '../components/ActionButton';
import { CurrentLocationButton } from '../components/CurrentLocationButton';

export default class CommunityScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: null,
    }

    this._getLocationAsync();
  }

  _getLocationAsync = async() => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      console.log('Permission not granted')

    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.3,
      longitudeDelta: 0.3,
    }
    this.setState({region: region})
  }

  centerMap() {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = this.state.region;
    this.map.animateToRegion({
      latitude, longitude, latitudeDelta, longitudeDelta
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <ActionButton/>
        {/* <CurrentLocationButton cb={() => {this.centerMap()}}/> */}
        <CurrentLocationButton />
        <MapView
          initialRegion = {this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          // ref={(map) => {this.map = map}}
          style={{flex: 1, zIndex: 0}}/>
      </View>
    );
  }
}

CommunityScreen.navigationOptions = {
  title: 'Community',
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 15,
      backgroundColor: '#fff',
    },
  });
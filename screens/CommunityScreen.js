import React from 'react';
import {Text,
    ScrollView, StyleSheet, View, Image
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { ActionButton } from '../components/ActionButton';
import { CurrentLocationButton } from '../components/CurrentLocationButton';
import Events from '../components/Events';

import firebase from 'firebase'
import * as FirebaseAPI from '../utils/FirebaseAPI'

export default class CommunityScreen extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      region: null,
      marker: null, // to add a marker anywhere
    }
    
    this._getLocationAsync();
  }
/*
  componentDidMount(){
    const rootRef = firebase.database().ref();
    const location = rootRef.child('Locations');
    speedRef.on('value',snap =>{
      latitude: snap.val()
    });
  }
*/
  _getLocationAsync = async() => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      console.log('Permission not granted')

    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
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
        <CurrentLocationButton cb={() => {this.centerMap()}}/>
        <MapView
          initialRegion = {this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          ref={(map) => {this.map = map}}
          style={{flex: 1, zIndex: 0}}          
          onPress={(e)=> this.setState({ marker: e.nativeEvent}
            //,FirebaseAPI.storeMarker(e.nativeEvent)
                  //console.log(e)
            )
          //THIS IS FOR THE MARKER ON THE MAP
          }>
          {
            this.state.marker && <MapView.Marker 
            coordinate={this.state.marker.coordinate}
            >
              <Image
                source={require('../assets/images/Logo.png')}
                style={{width: 60,
                height: 40,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: -10,}}
              />
            </MapView.Marker>
            //FirebaseAPI.storeMarker(this.state.marker)
            /*<Events event={{uid: 'null',location:{
            latitude: 37.78825,
            longitude: -122.4324,
            }}}/>*/
          }
        </MapView>
      </View>
    );
  }
}

CommunityScreen.navigationOptions = {
  // title: 'Community',
  header: null,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 15,
      backgroundColor: '#fff',
    },
  });
import React from 'react';
import {
    View,
    Image,
} from 'react-native';
import MapView from 'react-native-maps';

export default class Events extends React.Component {
    constructor(props) {
        super(props);

        const event = this.props.event ?
            this.props.event :
            {
                uid : "noEventsAround",
                location: {latitude: 0, longitude: 0}
            }
        
        const coordinate = new MapView.AnimatedRegion({
            latitude: event.location.latitude,
            longitude: event.location.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0,
        })

        this.state = {
            event : event,
            coordinate :  coordinate,
        }
    }

    render(){
        return(
            <MapView.Marker.Animated
                coordinate={this.state.coordinate}
                anchor={{x: 0.35, y: 0.32}}
                ref = {marker => {this.marker = marker}}
                style = {{width : 50, height: 50}} >
                <Image 
                    source={require('../assets/images/jp.jpg')}
                    style = {{width : 32, height: 32}}/>
            </MapView.Marker.Animated>
        )
    }
}
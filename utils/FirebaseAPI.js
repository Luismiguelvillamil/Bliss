import firebase from 'firebase'

var config = require('../config');

export function storeMarker(marker){
    console.log("Here",marker)
    const data = {
        markid: 0,
        coordinate: marker.coordinate,
    }
    firebase.database().ref('bliss-1577163280205').child('markers').child(marker.id).set({data})
    console.log('stored marker.')
}
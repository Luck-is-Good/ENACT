/* eslint-disable */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';

function Store(props) {
    //user name
    //var template = require('./CreateCode.js');
    //console.log("name " + template.foo.name);
    
    var user_id = props.user_id;
    firestore.collection("USERS").doc("test1").set({
      //create_date: new Date(),
      user_id: user_id,
    })
    .then(function(docRef){
      console.log("Document written with ID: " + props.user_id);
    });

    return(
        <BodyText>{props.user_id}</BodyText>

    )
}

export default Store
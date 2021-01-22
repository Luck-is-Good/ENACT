/* eslint-disable */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';

function Store() {
	//user name
    //let name = 'test3';
    const path = require('./CreateCode.js');
    firestore.collection("USERS").doc("test3").set({
        //create_date: new Date(),
        //user_id: user_id,
      })
      .then(function(docRef){
        console.log("Document written with ID: ", path.name_path);
      });

    return(
        <BodyText>complete</BodyText>
    )
}

export default Store
/* eslint-disable */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';



class Store extends React.Component { 
    //user name
    //var template = require('./CreateCode.js');
    //console.log("name " + template.foo.name);
    

    //firestore.collection("USERS").doc("name").set({
      //create_date: new Date(),
      //user_id: user_id,
    //})
    //.then(function(docRef){
    //  console.log("Document written with ID: ", props.value);
    //});

  

    render() {
    return(
        <div>
        <BodyText>
          user_id : {this.props.location.state.userid}
          <br/>
          input value :{this.props.location.state.inputvalue}
        </BodyText>
        </div>
        
    );
    }
    
}



export default Store;
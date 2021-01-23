/* eslint-disable */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';



class Store extends React.Component { 
    render() {
      const inputvalue = this.props.location.state.inputvalue

      //firestore에 user_id저장
      firestore.collection("USERS").doc(inputvalue).set({
        //create_date: new Date(),
        user_id: this.props.location.state.userid,
      })
      .then(function(docRef){
       console.log("Document written with ID: ", inputvalue);
      });
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
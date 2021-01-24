/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import { firestore } from '../db/firebase';

let userName;

class Userinfo extends React.Component {
      // constructor(props) {
      //       super(props);
      //       this.state = {
      //             userName: 'hi'
      //       };
      //       this.handleChange = this.handleChange.bind(this);
      // }

      // handleChange(event) {
      //       this.setState({
      //             userName: event.target.value
      //       })
      // }

      render() {
            loadInfo()
            return (
                  <Panel>
                        <Heading>USER INFO</Heading>

                        <BodyText>Name: {userName}</BodyText>
                        <BodyText>Age :</BodyText>
                        <BodyText>Real-time Location :</BodyText>

                        <Button>See before Location</Button>
                        <p />
                        <Button>Search Shortest Path</Button>
                        <p />
                        <Button>Alert</Button>
                        <p />
                        <Button>Call</Button>
                        <p />
                        <Button>112</Button>
                  </Panel>
            )
      }
}

async function loadInfo() {
      await firestore
            .collection('USERS')
            .doc('test1')
            .get()
            .then(doc => {
                  if (doc.data()) {
                        userName = doc.data().user_id;
                        console.log("user_id: ", userName);
                  }
            });
}

export default Userinfo;
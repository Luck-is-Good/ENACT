/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';


const Userinfo = kind({
	name: 'Userinfo',

	render: (props) => (
		<Panel {...props}>
            <Heading>USER INFO</Heading>

            <BodyText>Name :</BodyText>
            <BodyText>Age :</BodyText>
            <BodyText>Real-time Location :</BodyText>

            <Button>See before Location</Button>
            <p/>
            <Button>Search Shortest Path</Button>
            <p/>
            <Button>Alert</Button>
            <p/>
            <Button>Call</Button>
            <p/>
            <Button>112</Button>
		</Panel>
	)
});

export default Userinfo;
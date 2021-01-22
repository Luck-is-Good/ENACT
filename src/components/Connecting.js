/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import BodyText from '@enact/moonstone/BodyText';

import Heading from '@enact/moonstone/Heading';
import Spinner from '@enact/moonstone/Spinner';
import {Link} from 'react-router-dom';
import Notification from '@enact/moonstone/Notification';
import Dialog from '@enact/moonstone/Dialog';
import CreateCode from '../components/CreateCode';


const Connecting = kind({
	
	name: 'Connecting',

	render: (props) => (
		<Panel {...props}>
			<CreateCode/>
        <Spinner>Connecting</Spinner>
		<p/>
		{/* When the web and app are connected, 
		a pop-up appears to confirm the location.*/}
		<Link to="/Store">
			<Button>complete</Button>
		</Link>
		</Panel>
	),
});

export default Connecting;

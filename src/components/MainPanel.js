/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import Routable from '@enact/ui/Routable';
import {Route} from '@enact/moonstone/Panels';
import { Link } from "react-router-dom";

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Link to="/"><IconButton >home</IconButton></Link>
			<Link to="/setting"><IconButton >gear</IconButton></Link>
			<Link to="/add"><IconButton >plus</IconButton></Link>
			
			{/*use repeater*/}

			<Link to="/user1"><Button >USER1</Button></Link>
			
		</Panel>
	)
});

export default MainPanel;

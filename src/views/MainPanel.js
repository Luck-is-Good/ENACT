/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import Routable from '@enact/ui/Routable';
import {Route} from '@enact/moonstone/Panels';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props} path="main">
			<IconButton size="large">home</IconButton>
			<IconButton size="large">gear</IconButton>
			<IconButton size="large">plus</IconButton>
			
			{/*use repeater*/}
			<Button size="large">USER1</Button>
			
		</Panel>
	)
});

export default MainPanel;

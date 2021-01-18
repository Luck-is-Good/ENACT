/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			
			<IconButton>home</IconButton>
			<IconButton>plus</IconButton>
			<IconButton>gear</IconButton>
			<Button>USER1</Button>
			<Button>USER2</Button>
		</Panel>
	)
});

export default MainPanel;

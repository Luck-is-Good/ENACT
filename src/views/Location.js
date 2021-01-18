/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import BodyText from '@enact/moonstone/BodyText';
import Popup from '@enact/moonstone/Popup';
import ContextualPopupDecorator from '@enact/moonstone/ContextualPopupDecorator';

const ButtonWithPopup = ContextualPopupDecorator(Button);


const Location = kind({
	name: 'Location',

	render: (props) => (
		<Panel {...props}>
			<BodyText centered>Your current location</BodyText>
			<Button>YES</Button>
			<Button>NO</Button>
		</Panel>
	)
});


export default Location;

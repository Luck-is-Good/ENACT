/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import BodyText from '@enact/moonstone/BodyText';

const InputForm = kind({
	name: 'InputForm',

	render: (props) => (
		<Panel {...props}>
            <BodyText>ADD USER INFO</BodyText>
            <Input placeholder="Name" />
            <Input placeholder="Age" />
            <BodyText>Maximum allowable distance</BodyText>
            <Input placeholder="KM"/>
            <Button>SAVE</Button>
		</Panel>
	)
});



export default InputForm;

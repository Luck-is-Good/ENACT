/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import ExpandableInput from '@enact/moonstone/ExpandableInput';
import Input from '@enact/moonstone/Input';
import BodyText from '@enact/moonstone/BodyText';
import Heading from '@enact/moonstone/Heading';
import ExpandablePicker from '@enact/moonstone/ExpandablePicker';


const Set = kind({
	name: 'Set',

	render: (props) => (
		<Panel {...props}>
            <Heading>Setting</Heading>
            <p/>
            
            <ExpandablePicker
                joined
                title="Text Size"
                width="large"
            >
                {['Default : normal', 'large']}
            </ExpandablePicker>
            <p/>

            <ExpandablePicker
                joined
                title="Skin Color"
                width="large"
            >
                {['Default : dark', 'light']}
            </ExpandablePicker>
		</Panel>
	)
});

export default Set;
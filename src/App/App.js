/* eslint-disable */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import MainPanel from '../views/MainPanel';
import css from './App.module.less';
import {Layout, Row, Cell, Column, Item} from '@enact/ui/Layout';
import {ResolutionDecorator,resolution} from '@enact/ui/resolution';
import InputForm from '../views/InputForm';
import Map from '../components/Map';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => (
		<div {...props}>
			<Panel>
			<Column>
				<Cell size="15%" component="header">
					<MainPanel />
				</Cell>
				<Cell>
				<Row> 
					<Cell >
						<Map />
					</Cell>
					<Cell size="30%">
						<InputForm/>
					
						
					</Cell>
				</Row>
				</Cell>
			</Column>
			</Panel>
		</div>
	)
});



export default MoonstoneDecorator(App) 

// Will have the resolution classes and will be updated when the window resizes
const AppWithResolution = ResolutionDecorator(App);
// Will have the resolution classes for the screen at the time of render only
const AppWithStaticResolution = ResolutionDecorator({dynamic: false}, App);
const AppWithScreenTypes = ResolutionDecorator({screenTypes: [
	{name: 'hd', pxPerRem: 16, width: 1280, height: 720, aspectRatioName: 'hdtv', base: true}
]}, App);





  
/* eslint-disable */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React ,{Component} from 'react';
import MainPanel from '../components/MainPanel';
import css from './App.module.less';
import {Layout, Row, Cell, Column, Item} from '@enact/ui/Layout';
import {ResolutionDecorator,resolution} from '@enact/ui/resolution';
import InputForm from '../components/InputForm';
import Map from '../components/Map';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";

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
					{/*react-router-nested : change right side*/}
				</Cell>
				<Cell>
				<Row> 
					<Cell >
						<Map />
					</Cell>
					<Cell size="30%">
						{/*rigth side */}
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





  
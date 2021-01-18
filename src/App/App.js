/* eslint-disable */

import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Panel from '@enact/moonstone/Panels';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Button from '@enact/moonstone/Button';
import Icon from '@enact/moonstone/Icon';
import MainPanel from '../views/MainPanel';
import css from './App.module.less';
import {Layout, Row, Cell, Column, Item} from '@enact/ui/Layout';
import IconButton from '@enact/ui/IconButton';
import {ResolutionDecorator,resolution} from '@enact/ui/resolution';
import Location from '../views/Location';
import InputForm from '../views/InputForm';



const containerStyle = {
	width: '100%',
  	height: '800px'
}

  
const knucenter = {
	lat: 12.935504285297199,
	lng: 77.60565231958368
};
  
const icons = {
	home: {
	  url: <Icon>home</Icon>,
	},
};
  
function MyComponent() {
	return (
		<LoadScript
		  googleMapsApiKey="AIzaSyBOluu7JbYoawEF0aMk4cgsPk_Fbx5GrGs"
		>
		  <GoogleMap
			mapContainerStyle={containerStyle}
			center={knucenter}
			zoom={17}
		  >
			{ /* Child components, such as markers, info windows, etc. */ }
			<Marker
			  position = {knucenter}
			  icon = {icons.home}
			/>
		  </GoogleMap>
		</LoadScript>
		
	 )
}

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
						<MyComponent />
					</Cell>
					<Cell size="30%">
						
					</Cell>
				</Row>
				</Cell>
			</Column>
			</Panel>
		</div>
	)
});


export default MoonstoneDecorator(App) 





  
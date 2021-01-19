/* eslint-disable */
import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';
import BodyText from '@enact/moonstone/BodyText';
import Popup from '@enact/moonstone/Popup';
import ContextualPopupDecorator from '@enact/moonstone/ContextualPopupDecorator';
import InputForm from './InputForm';


/*
const Location = kind({
	name: 'Location',
	
	handleClickNo(event) {
		//click No -> error 
		alert('error : wrong location');
		
	},

	render: (props) => (
		<Panel {...props}>
			<BodyText>Your current location</BodyText>
			<Button>YES</Button>
			<Button>NO</Button>
			
		</Panel>
	)
});
*/



class Location extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {showInputForm: false};
  
	  //this.handleClickYes = this.handleClickYes.bind(this);
	  this.handleClickNo = this.handleClickNo.bind(this);
	}
	
	// handler X -> using router
	//handleClickYes(event) {
	  //click yes -> InputForm
	  //this.setState({showInputForm: true});
	//}
	
	 
	
	handleClickNo(event) {
	  //click No -> error 
	  alert('error : wrong location');
	  
	}
	
	render() {
	  return (
		<Panel >
		  <BodyText>Your current location</BodyText>
		  <Button>YES</Button>
			<Button onClick={this.handleClickNo}>NO</Button>
		</Panel>
	  );
	}
  }



export default Location;

/* eslint-disable */
import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';
import Input from '@enact/moonstone/Input';
import { render } from 'react-dom';
import handle from '@enact/core/handle';

//user name
//let name = 'test3';
//랜덤으로 6자리 코드 생성(device연결코드)
var user_id = Math.random().toString(36).slice(7);

class CreateCode extends React.Component {
	constructor(props) {
		super(props);
		this.state={value: ''};

		this.handleChange = this.handleChange.bind(this);
		
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	//input value == {this.state.value}
	
	render() {
	return (
        <div>
			<form>
			<input placeholder="Please enter the code." 
			onChange={this.handleChange}></input> 
			<BodyText>code: {this.state.value}</BodyText>
			</form>

            <BodyText>{user_id}</BodyText>
        </div>
		
	);
	}
}

export default CreateCode;
/* eslint-disable */import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Icon from '@enact/moonstone/Icon';
import { firestore } from "../db/firebase";
import {BodyText, BodyTextBase} from '@enact/ui/BodyText';
import Input from '@enact/moonstone/Input';

function CreateCode() {
	//user name
	//let name = 'test3';
	//랜덤으로 6자리 코드 생성(device연결코드)
	let user_id = Math.random().toString(36).slice(7);
	return (
        <div>
            <Input placeholder="Name" id="db_name"></Input> 
            <BodyText>{user_id}</BodyText>
        </div>
		
	 )
}

export default CreateCode
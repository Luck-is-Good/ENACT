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


const InputForm = kind({
	name: 'InputForm',

	render: (props) => (
		<Panel {...props}>
            <Heading>ADD USER INFO</Heading>
            <Input placeholder="Name" />
            <Input placeholder="Age" />
            <BodyText>Maximum allowable distance</BodyText>
            <Input placeholder="KM"/>
            <Button>SAVE</Button>
		</Panel>
	)
});


/*
class InputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', age: null, distance: null};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      alert('User Name:' + this.state.username + ', Age:' + this.state.age + ', Distance:' + this.state.distance);
      event.preventDefault();
    }
  
    render() {
      return (
        <Panel>
        <form>
        <BodyText>ADD USER INFO</BodyText>
            <Input placeholder="Name" value={this.state.username} onChange={this.handleChange}/>
            <Input placeholder="Age" value={this.state.age} onChange={this.handleChange}/>
            <BodyText>Maximum allowable distance</BodyText>
            <Input placeholder="KM" value={this.state.distance} onChange={this.handleChange}/>
            <Button type="submit" onClick={this.handleSubmit}>SAVE</Button>
        </form>
        
        </Panel>
      );
    }
  }
  */



export default InputForm;

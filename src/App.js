import React from 'react';
import logo from './logo.svg';
import './App.css';
import { nullLiteral } from '../node_modules/@babel/types';
import { ENETDOWN } from 'constants';

function App() {
  return (
    <div>
      <Model2 />
    </div>
  );
}

class Model2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentsChange = this.handleContentsChange.bind(this);
    this.state = {name: '', contents: ""};
  }

  handleNameChange(name) {
    this.setState({name});
  }
  handleContentsChange(contents) {
    this.setState({contents});
  }

  render() {
    return (
      <div>
        <ValueInput
          title="name"
          value={this.state.name}
          onChange={this.handleNameChange} />
          {this.state.name}
        <ValueInput
          title="contents"
          value={this.state.contents}
          onChange={this.handleContentsChange} />
          {this.state.contents}
      </div>
    );
  }
}

class ValueInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>Enter {this.props.title} in ababa:</legend>
        <input value={this.props.value}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}


let scheduleList = [];
let itemList = [];
class Model extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: "",
      date: "",
      contents: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  };

  handleNameChange(value) {
    this.setState({name: value});
  }

  render(){
    const name = "Laisa"
    return(
      <div>
        {this.state.name}
        {this.state.date}
        {this.state.contents}
        <InputField
            type="name"
            value={name}
            onValueChange={this.handleValueChange} />
      </div>
    )
  }
}

class InputField extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    this.props.onValueChange(event.target.value)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.props.type}:
          <input type="text" value={this.props.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Schedule extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "ababa",
      date: "hogege",
      contents: "huga"
    }
  }

  render(){
    return(
      <div>
        <h1>
          {this.state.name}
        </h1>
        <label>
          {this.state.date}
        </label>
        <br />
        <textarea rows="10" cols="60">
          {this.state.contents}
        </textarea>
      </div>
    )
  }
}

export default App;

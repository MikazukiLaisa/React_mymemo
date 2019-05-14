import React from 'react';
import logo from './logo.svg';
import './App.css';
import { nullLiteral } from '../node_modules/@babel/types';
import { ENETDOWN } from 'constants';

function App() {
  return (
    <div>
      <Model />
    </div>
  );
}

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentsChange = this.handleContentsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {name: "", contents: ""};
  }

  handleNameChange(name) {
    this.setState({name});
  }
  handleContentsChange(contents) {
    this.setState({contents});
  }
  handleSubmit(event){
    alert('name: ' + this.state.name + " contents: " + this.state.contents);
    event.preventDefault();
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
          <br />
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit"/>
          </form>
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

export default App;

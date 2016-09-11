import React from 'react';

const elementBlackBox= (user,comp) => {
  const chart = [
  // E  W  Wi F
    [0,0.5,1,-1], //E
    [0.5,0,-1,1], //W
    [-1,1,0,0.5], //Wi
    [1,-1,0.5,0]  //F
  ];
  const convertEtoN = {
    earth: 0,
    water: 1,
    wind: 2,
    fire: 3
  }
  const u = Number(convertEtoN[user]);
  const c = Number(convertEtoN[comp]);
  console.log(c);
  console.log(u)
  console.log(chart[0][0]);
  const match = chart[u][c];
  switch(match) {
    case -1: {
      return 'Nothing happen on your competitor';
      break;
    }
    case 0: {
      return 'Normally Attack';
      break;
    }
    case 0.5: {
      return '50% effectly';
      break;
    }
    case 1: {
      return 'Super effective hits';
      break;
    }
    default: {
      return '...';
    }
  };
}
let analyzer = {};

export default class SectionBody extends React.Component {
  render() {
    return (
      <section id="body">
        <BoxSets />
      </section>
    );
  }
}

class Box extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
  }
  sendData(e) {
    const boxId = this.props.boxId;
    const data = this.refs[boxId].value || e.target.value;
    analyzer[boxId] = data;
    console.log(analyzer);
  }

  analysis() {
    const user = analyzer.user;
    const competitor = analyzer.competitor;
    const result = elementBlackBox(user,competitor);
    this.setState({
      result
    })
  }

  decisionBox(boxId) {
      if( boxId === "result") {
        return (
          <section>
            <button
              className="analysisBtn"
              type="button"
              onClick={ () => this.analysis() }
            >
            Analysis
            </button>
            <h1>Battle analysed : &nbsp;&nbsp;
              <u>{this.state.result}</u>
            </h1>
          </section>
        );
      }
      else {
        return (
          <section>
            <label>Elements: </label>
            <input
              ref={this.props.boxId}
              type="text"
              onBlur={ () => this.sendData() }
            />
            <form>
              <input onChange={ (e) => this.sendData(e) } type="radio" name="elements" value="fire"/>Fire <br/>
              <input onChange={ (e) => this.sendData(e) } type="radio" name="elements" value="water"/>Water <br/>
              <input onChange={ (e) => this.sendData(e) } type="radio" name="elements" value="earth"/>Earth <br/>
              <input onChange={ (e) => this.sendData(e) } type="radio" name="elements" value="wind"/>Wind <br/>
            </form>
            <button
              type="button"
            >
            Send
            </button>
          </section>
        );
      }
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.text}</h1>
        { this.decisionBox(this.props.boxId) }
      </div>
    );
  }
}

class BoxSets extends React.Component {
  render() {
    return (
      <section className="boxSet">
        <Box boxId="user" text="User's monster"/>
        <Box boxId="competitor" text="Competitor's monster"/>
        <Box boxId="result" text="Result"/>
      </section>
    );
  }
}

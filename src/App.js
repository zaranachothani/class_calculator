import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      disp: "",
      firstval: "",
      sign: ""
    };
  }

  getdata = (a) => {
    this.setState(prevState => ({
      disp: prevState.disp + a
    }));
  }

  caldata = (l) => {
    this.setState(prevState => ({
      firstval: prevState.disp,
      disp: "",
      sign: l
    }));
  }

  valueget = () => {
    const { disp, firstval, sign } = this.state;
    const lastval = disp;

    switch (sign) {
      case 1:
        this.setState({ disp: String(parseFloat(firstval) + parseFloat(lastval)) });
        break;
      case 2:
        this.setState({ disp: String(parseFloat(firstval) - parseFloat(lastval)) });
        break;
      case 3:
        this.setState({ disp: String(parseFloat(firstval) * parseFloat(lastval)) });
        break;
      case 4:
        if (parseFloat(lastval) === 0) {
          this.setState({ disp: "Error" });
        } else {
          this.setState({ disp: String(parseFloat(firstval) / parseFloat(lastval)) });
        }
        break;
      case 5:
        if (parseFloat(lastval) === 0) {
          this.setState({ disp: "Error" });
        } else {
          this.setState({ disp: String(parseFloat(firstval) % parseFloat(lastval)) });
        }
        break;
      default:
        this.setState({ disp: "not valid" });
    }
  }

  singletimeremove = () => {
    this.setState(prevState => ({
      disp: prevState.disp.slice(0, -1)
    }));
  }

  clear = () => {
    this.setState({ disp: "" });
  }

  render() {
    const { disp } = this.state;

    return (
      <div className="App">
        <div className="main_div">
          <div className="text">
            <input type="text" value={disp} size={25} className='py-3'></input>
          </div>
          <div className="six">
            <input type="button" name="" value={"MR"}></input>
            <input type="button" name="" value={"MR"}></input>
            <input type="button" name="" value={"MR"}></input>
            <input type="button" name="" value={"MR"}></input>
            <input type="button" name="" value={"MR"}></input>
            <input type="button" name="" value={"MR"}></input>
          </div>
          <div className="btn">
            <input type="button" name="" value={"%"}></input>
            <input type="button" name="" value={"CE"}></input>
            <input type="button" name="" value={"C"} onClick={this.clear}></input>
            <input type="button" name="" value={"Del"} onClick={this.singletimeremove}></input>
          </div>
          <div className="btn">
            <input type="button" name="" value={"1/x"}></input>
            <input type="button" name="" value={"x2"}></input>
            <input type="button" name="" value={"1/x"}></input>
            <input type="button" name="" value={"/"} onClick={() => this.caldata(4)}></input>
          </div>
          <div className="btn">
            <input type="button" name="" value={"7"} className="h7" onClick={() => this.getdata(7)}></input>
            <input type="button" name="" value={"8"} onClick={() => this.getdata(8)}></input>
            <input type="button" name="" value={"9"} onClick={() => this.getdata(9)}></input>
            <input type="button" name="" value={"*"} onClick={() => this.caldata(3)}></input>
          </div>
          <div className="btn">
            <input type="button" name="" value={"4"} onClick={() => this.getdata(4)}></input>
            <input type="button" name="" value={"5"} onClick={() => this.getdata(5)}></input>
            <input type="button" name="" value={"6"} onClick={() => this.getdata(6)}></input>
            <input type="button" name="" value={"-"} onClick={() => this.caldata(2)}></input>
          </div>
          <div className="btn">
            <input type="button" name="" value={"1"} onClick={() => this.getdata(1)}></input>
            <input type="button" name="" value={"2"} onClick={() => this.getdata(2)}></input>
            <input type="button" name="" value={"3"} onClick={() => this.getdata(3)}></input>
            <input type="button" name="" value={"+"} onClick={() => this.caldata(1)}></input>
          </div>
          <div className="btn">
            <input type="button" name="" value={"+"} onClick={() => this.caldata(1)}></input>
            <input type="button" name="" value={"0"} onClick={() => this.getdata(0)}></input>
            <input type="button" name="" value={"."} onClick={() => this.getdata('.')}></input>
            <input type="button" name="" value={"="} onClick={this.valueget}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

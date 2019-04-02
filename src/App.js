import React, { Component, Fragment } from 'react';
import './App.scss';

class App extends Component {

    state = {
        val1: 1,
        val2: 1
    };



    value1ChangHandler = (event) => {
      this.setState({val1: event.target.value});
    };
    value2ChangHandler = (event) => {
        this.setState({val2: event.target.value});
    };


    submitHandler = () => {
        let tr = document.querySelectorAll("tr");
        console.log(tr[this.state.val1 - 1].childNodes[this.state.val2 - 1]);
        tr[this.state.val1 - 1].childNodes[this.state.val2 - 1].className = "colored";
    };



      table = (n1 = " ", n2 = " ", n3 = " ", n4 = " ", n5 = " ", n6 = " ", n7 = " ", n8 = " ", n9 = " ") => {
          return (
           <tr>
              <td>{n1}</td>
              <td>{n2}</td>
              <td>{n3}</td>
              <td>{n4}</td>
              <td>{n5}</td>
              <td>{n6}</td>
              <td>{n7}</td>
              <td>{n8}</td>
              <td>{n9}</td>
          </tr>
          );
      };



  render() {
    return (
      <Fragment>
          <table>
              {this.table(1,2,3,4,5,6,7,8,9)}
              {this.table(2)}
              {this.table(3)}
              {this.table(4)}
              {this.table(5)}
              {this.table(6)}
              {this.table(7)}
              {this.table(8)}
              {this.table(9)}
          </table>

          <div className="control_panel">
              <div>
                  <input type="number" max="9" min="1" onChange={(event) => this.value1ChangHandler(event)} value={this.state.val1}/>
                  <span> X </span>
                  <input type="number" max="9" min="1" onChange={(event) => this.value2ChangHandler(event)} value={this.state.val2}/>
              </div>
              <p onClick={this.submitHandler}>SUBMIT</p>
          </div>
      </Fragment>
    );
  }
}

export default App;

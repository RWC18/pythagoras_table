import React, { Component, Fragment } from 'react';
import './App.scss';

class App extends Component {

    state = {
        val1: 1,
        val2: 1,
        err: null
    };



    value1ChangHandler = (event) => {
      this.setState({val1: event.target.value});
    };
    value2ChangHandler = (event) => {
        this.setState({val2: event.target.value});
    };

   
    submitHandler = () => {
        if( this.state.val1 > 0 && this.state.val1 < 10 && this.state.val2 > 0 && this.state.val2 < 10){
            this.setState({err: false})
            let tr = document.querySelectorAll("tr");
                console.log(tr[this.state.val1 - 1].childNodes[this.state.val2 - 1]);
                tr[this.state.val1 - 1].childNodes[this.state.val2 - 1].className = "colored";
        } else { 
            this.setState({err: true})
        }
        
    };



      table = (n1 = " ", n2 = " ", n3 = " ", n4 = " ", n5 = " ", n6 = " ", n7 = " ", n8 = " ", n9 = " ") => {
          return (
           <tr>
              <td className="first">{n1}</td>
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
              {this.table(1*2,2*2,3*2,4*2,5*2,6*2,7*2,8*2,9*2)}
              {this.table(1*3,2*3,3*3,4*3,5*3,6*3,7*3,8*3,9*3)}
              {this.table(1*4,2*4,3*4,4*4,5*4,6*4,7*4,8*4,9*4)}
              {this.table(1*5,2*5,3*5,4*5,5*5,6*5,7*5,8*5,9*5)}
              {this.table(1*6,2*6,3*6,4*6,5*6,6*6,7*6,8*6,9*6)}
              {this.table(1*7,2*7,3*7,4*7,5*7,6*7,7*7,8*7,9*7)}
              {this.table(1*8,2*8,3*8,4*8,5*8,6*8,7*8,8*8,9*8)}
              {this.table(1*9,2*9,3*9,4*9,5*9,6*9,7*9,8*9,9*9)}
          </table>

          <div className="control_panel">
            {this.state.err ? <p className="error">Value error !!!!!</p> : null }
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

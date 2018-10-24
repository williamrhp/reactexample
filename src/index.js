import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Chatroom extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      list: "This is a simple React app. Please type your shopping list in the box below and hit ENTER for each item you wish to add!",
      counter: 1
    };
    this.updateList = this.updateList.bind(this);
  }
    
  //functions
  
  updateList(event){
    if(event.key === "Enter" && event.shiftKey === false){
      this.setState({list:this.state.list + "\n" + this.state.counter + ". " + event.target.value, counter:this.state.counter + 1});
      event.target.value = "";
      return false;
    }
  }
  
  printList(event){
    window.print();
  }
  
  //final render code
  render() {
    return (
        <div className="chatroom">
          <div className="center">
            <h1>My Shopping List</h1>
          </div>
          <div className="chatDisplayDiv">
            <textarea className="chatDisplay" value={this.state.list}/>
          </div>
          <div className="inputBoxDiv">
            <input type="text" className="inputBox" onKeyPress={this.updateList}/>
          </div>
          <div className="center">
            <button onClick={this.printList}>Click to print!</button>
          </div>
        </div>
      );
  }
}

ReactDOM.render(
  <Chatroom />,
  document.getElementById('root')
);
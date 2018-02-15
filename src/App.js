import React, { Component } from 'react';
import './App.css';
import GControl from "./comps/GControl";
import GLists from "./comps/GLists";



class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            glists:[]
        }
        
        this.pushGItem = this.pushGItem.bind(this);
        this.spliceGItem = this.spliceGItem.bind(this);
        
    }
    
    pushGItem(data){
        var items = this.state.glists;
        items.push(data);
        
        this.setState({
            glists:items
        });
        
    }
    
    spliceGItem(index){
        
        var items = this.state.glists;
        items.splice(index, 1);
        
        this.setState({
            glists:items
        });
        
    }
    
    
  render() {
      
      
    return (
        
      <div className="App">
        
        <GControl 
            pushGItem={this.pushGItem}
        />
        <GLists 
            glists={this.state.glists}
            spliceGItem={this.spliceGItem} 
        />
        
      </div>
    );
  }
}


export default App;

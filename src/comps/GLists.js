import React, { Component } from 'react';

class GLists extends Component {
    
    constructor(props){
        super(props);
        
        this.removeItem = this.removeItem.bind(this);
        
    }
    
    removeItem(index){
        this.props.spliceGItem(index);
    }
    
  render() {
      
      var allItems = this.props.glists.map((obj, index)=>{
          
          return (
            <div key={index} class="classlist">
              <span class="spand">{obj}</span>
              <button
                onClick={this.removeItem.bind(this, index)}
              >
              Remove
              </button>
              
            </div>
          )
          
      });
      
    return (
      <div>
        {allItems}
      </div>
    );
  }
}

export default GLists;
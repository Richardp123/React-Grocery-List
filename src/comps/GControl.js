import React, { Component } from 'react';

class GControl extends Component {
    
     constructor(props){
        super(props);
        
        this.state = {
            num:0,
            itemName:""
        }
        
        this.addItem = this.addItem.bind(this);
        this.changeNum = this.changeNum.bind(this);
        this.changeItemName = this.changeItemName.bind(this);
        
    }
    
    addItem(){
        var numbo = this.state.num.toString();
        this.props.pushGItem(numbo + " - " + this.state.itemName);
    }
    
    changeNum(event){
        var numbo = event.target.value;
        
        this.setState({
            num:numbo
        });
        
        console.log("num" + numbo);
        
    }
    
    changeItemName(event){
        
        var title = event.target.value;
        
        this.setState({
            itemName:title
        });

        console.log("name" + title);
    }
    
  render() {
    return (
      <div class="control">
        <input class="input1" type="text" placeholder="#" onChange={this.changeNum}/>
        <input class="input2" type="text" placeholder="Item Name" onChange={this.changeItemName} />
        <button
        class="butt"
        onClick={this.addItem}
        >
        Add Item
        </button>
      </div>
    );
  }
}

export default GControl;
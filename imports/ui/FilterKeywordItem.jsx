import React, { Component } from 'react';

export default class FilterKeywordItem extends Component {
  
  constructor(props) {
    super(props);
    
    this.toggleOn = true;
  }
  
  onToggled(keywordObj, index) {
    this.toggleOn = !this.toggleOn;
    document.getElementById("keyword-"+index).className = 
      this.toggleOn ? "filter-bar-keyword-item-on" : "filter-bar-keyword-item-off";
    this.props.onKeywordToggled(keywordObj, this.toggleOn);
  }
  
  render() {
    return (
      <div id={"keyword-"+this.props.index} 
          className="filter-bar-keyword-item-on" 
          key={this.props.index}
          onClick={()=>this.onToggled(this.props.keywordObj, this.props.index)}>
        {this.props.keywordObj.keyword}
      </div>
    );
  }
}
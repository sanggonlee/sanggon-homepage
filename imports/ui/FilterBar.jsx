import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Keywords } from '../api/keywords.js';

import FilterKeywordItem from './FilterKeywordItem';

class FilterBar extends Component {
  
  onKeywordToggled(keywordObj, toggleOn) {
    this.props.onKeywordToggled(keywordObj, toggleOn);
  }
  
  renderItems() {
    return this.props.keywords.map((keywordObj, index) => {
      return (
        <FilterKeywordItem index={index} keywordObj={keywordObj}
          onKeywordToggled={this.onKeywordToggled.bind(this)} />
      );
    })
  }
  render() {
    return (
      <div id="filterBar">
        <div id="filterBarLabel">Keywords</div>
        <div id="filterBarKeywordList">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

FilterBar.propTypes = {
  keywords: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('keywords');
  
  return {
    keywords: Keywords.find({}, {sort: {keyword: 1}}).fetch()
  };
}, FilterBar);
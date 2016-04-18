import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="project-item">
        <div className="project-title">{this.props.title}</div>
        <div className="project-image-wrapper">
            <img className="project-image" src={this.props.imgUrl} />
        </div>
        <div className="project-item-keywords">{this.props.keywords.join(', ')}</div>
      </div>
    );
  }
})
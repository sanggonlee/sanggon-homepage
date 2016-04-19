import React from 'react';
import ProjectViewModal from './ProjectViewModal';

export default React.createClass({

  openViewItemModal() {
    document.getElementById('itemViewModal').style.display = 'block';
  },

  render() {
    return (
      <div className="project-item-wrapper">
        <div className="project-item" onClick={this.openViewItemModal}>
          <div className="project-title">{this.props.item.title}</div>
          <div className="project-image-wrapper">
            <img className="project-image" src={this.props.item.imgUrl} />
          </div>
          <div className="project-item-keywords">
            {this.props.item.keywords.join(', ')}
          </div>
        </div>
        <div id="itemViewModal" className="modal">
          <ProjectViewModal item={this.props.item}/>
        </div>
      </div>
    );
  }
})
import React from 'react';

export default class ProjectViewModal extends React.Component {

  closeModal() {
    document.getElementById('itemViewModal').style.display = 'none';
  }

  render() {
  	return(
  		<div className="modal-content">
        <span className="close-button" onClick={this.closeModal}>x</span>
        <h3>{this.props.item.title}</h3>
        <p>{this.props.item.description}</p>
        { (() => {
            if (this.props.item.url) {
              return(<a href={this.props.item.url} target='blank'>Project URL</a>);
            }
          })()
        }
        { (() => {
            if (this.props.item.githubUrl) {
              return(<a href={this.props.item.githubUrl} target='blank'>Github URL</a>);
            }
          })()
        }
      </div>
  	);
  }
}
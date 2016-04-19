import React from 'react';

export default class ProjectAddModal extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      imgUrl: "",
      url: "",
      githubUrl: "",
      description: "",
      keywords: ""
    };
  }
  
  closeModal() {
    document.getElementById('itemAddModal').style.display = 'none';
  }
  
  handleChange(event) {
    switch(event.target.id) {
      case 'titleEnterForm':
        this.state.title = event.target.value;
        break;
      case 'imgEnterForm':
        this.state.imgUrl = event.target.value;
        break;
      case 'urlEnterForm':
        this.state.url = event.target.value;
        break;
      case 'githubEnterForm':
        this.state.githubUrl = event.target.value;
        break;
      case 'descrEnterForm':
        this.state.description = event.target.value;
        break;
      case 'keywordEnterForm':
        this.state.keywords = event.target.value;
        break;
    }
  }
  
  handleSubmit() {
    console.log("Inserting a project with data: \n"+JSON.stringify(this.state));
    let keywords = this.state.keywords.split(', ');
    let defaultToggle = 
    Meteor.call('projects.insert', 
      this.state.title, this.state.imgUrl, this.state.url, this.state.githubUrl,
      this.state.description, keywords, (err, result) => {
        if (err != null) {
          if (err.error === 'not-authorized') {
            sAlert.error('You are not authorized to create a project item', {effect: 'slide'});
          }
        }
      });
    this.clearFields();
    this.closeModal();
  }
  
  clearFields() {
    this.state = {
      title: "",
      imgUrl: "",
      url: "",
      githubUrl: "",
      description: "",
      keywords: ""
    }
  }
  
  render() {
    return (
      <div className="modal-content">
        <span className="close-button" onClick={this.closeModal}>x</span>
        <h3>Add a new project</h3>
        <section className="form-section">
          <div className="text-enter-label">Project Title</div>
          <input type="text" id="titleEnterForm" className="text-enter-form" onChange={this.handleChange.bind(this)} />
        </section>
        <section>
          <div className="text-enter-label">Image URL</div>
          <input type="text" id="imgEnterForm" className="text-enter-form" onChange={this.handleChange.bind(this)} />
        </section>
        <section>
          <div className="text-enter-label">Project URL</div>
          <input type="text" id="urlEnterForm" className="text-enter-form" onChange={this.handleChange.bind(this)} />
        </section>
        <section>
          <div className="text-enter-label">Github URL</div>
          <input type="text" id="githubEnterForm" className="text-enter-form" onChange={this.handleChange.bind(this)} />
        </section>
        <section>
          <div className="text-enter-label">Description</div>
          <textarea id="descrEnterForm" className="text-enter-form-long" onChange={this.handleChange.bind(this)} />
        </section>
        <section>
          <div className="text-enter-label">Keywords</div>
          <div id="keywordsEnterList">
            <input type="text" id="keywordEnterForm" className="text-enter-form" onChange={this.handleChange.bind(this)} />
          </div>
        </section>
        <button id="submitButton" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}
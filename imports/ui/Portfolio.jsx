import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { union } from '../utils.js';

import FilterBar from './FilterBar';
import ProjectItem from './ProjectItem';
import ProjectAddModal from './ProjectAddModal';
import AccountsUIWrapper from './AccountsUIWrapper';

import { Projects } from '../api/projects.js';
import { Keywords } from '../api/keywords.js';


class Portfolio extends Component {

  constructor(props) {
    super(props);
    
    Session.keys = {}; // clear past history
  }
    
  openAddItemModal() {
      document.getElementById('itemAddModal').style.display = 'block';
  }
  
  addKeywordsToProjects(projects) {
      return projects.map((proj) => {
        proj['keywords'] = Keywords.find({
            // For some reason $eq operator is not working, so checking
            // equality by gte && lte for now
            projectIds: { $elemMatch: { $gte: proj._id, $lte: proj._id } }
        }).fetch().map((keywordObj) => {
            return keywordObj.keyword;
        });
        return proj;
      });
  }
  
  onKeywordToggled(keywordObj, toggleOn) {
    let keywords = Session.get('keywords');
    if (toggleOn) {
        keywords.push(keywordObj);
    } else {
        keywords.forEach((elem, i) => {
            if (keywordObj._id === elem._id) {
                keywords.splice(i, 1);
            }
        });
    }
    Session.set('keywords', keywords);
    this.forceUpdate();
  }
  
  renderItems() {
    return this.props.projects.map((item) => {
        return (
            <ProjectItem 
                title={item.title} 
                imgUrl={item.imgUrl} 
                keywords={item.keywords} />
        );
    })  
  }
  
  render() {
    return (
        <div id="portfolioContainer" className="portfolio-container">
            <FilterBar onKeywordToggled={this.onKeywordToggled.bind(this)} />
            <div className="portfolio-main-container">
                <div className="portfolio-grid-header">
                    <div id="portfolioGridTitle">Projects</div>
                    <button className="add-button" 
                            onClick={this.openAddItemModal}>
                        New project
                    </button>
                    <AccountsUIWrapper />
                </div>
                <div id="portfolio-grid">
                    {this.renderItems()}
                </div>
            </div>
            <div id="itemAddModal" className="modal">
                <ProjectAddModal />
            </div>
        </div>
    );
  }
}

Portfolio.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('projects');
    Meteor.subscribe('keywords');
    
    let keywords = Session.get('keywords');
    if (keywords == null) {
        keywords = Keywords.find({}).fetch();
        Session.set('keywords', keywords);
    }
    let projectIds = [];
    keywords.forEach((obj) => {
        //console.log(JSON.stringify(obj));
        projectIds = union(projectIds, obj.projectIds);
    });
    console.log(projectIds);
    
    return {
        projects: Projects.find(
            { _id: { $in: projectIds } }
        ).fetch().map((proj) => {
            proj['keywords'] = Keywords.find({
                // For some reason $eq operator is not working, so checking
                // equality by gte && lte for now
                projectIds: { $elemMatch: { $gte: proj._id, $lte: proj._id } }
            }).fetch().map((keywordObj) => {
                return keywordObj.keyword;
            });
            //console.log("Retrieved project: "+JSON.stringify(proj));
            //console.log("Retrieved "+proj['keywords'].length+" keywords for project "+proj.title);
            return proj;
        })
    };
}, Portfolio);
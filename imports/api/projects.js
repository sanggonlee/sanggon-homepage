import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Keywords } from './keywords.js';

export const Projects = new Mongo.Collection('projects');

if (Meteor.isServer) {
  Meteor.publish('projects', function projectsPublication() {
    return Projects.find({});
  });
}

Meteor.methods({
  'projects.insert'(title, imgUrl, url, githubUrl, description, keywords) {
    check(title, String);
    check(imgUrl, String);
    check(url, String);
    check(githubUrl, String);
    check(description, String);
    check(keywords, Array);
    
    if (!this.userId || this.userId !== process.env.ROOT_ID) {
      throw new Meteor.Error('not-authorized');
    }
    
    let doc = {
      title,
      createdAt: new Date(),
      imgUrl,
      url,
      githubUrl,
      description
    };
    
    Projects.insert(doc, (err, result) => {
      if (err) {
        throw err;
      }
      console.log("inserted doc: "+JSON.stringify(doc));
      console.log("inserted project: "+JSON.stringify(result));
      //console.log("inserted project with id "+result._id);
      
      keywords.forEach((keyword) => {
        Meteor.call('keywords.insert', keyword, result);
      });
    });
  }
});
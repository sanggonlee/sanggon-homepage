import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Keywords = new Mongo.Collection('keywords');

if (Meteor.isServer) {
  Meteor.publish('keywords', function keywordsPublication() {
    return Keywords.find({});
  });
}

Meteor.methods({
  'keywords.insert'(keyword, id) {
    console.log("Inserting keyword for project id "+id);
    check(keyword, String);
    
    Keywords.upsert({
      keyword: keyword
    }, {
      $setOnInsert: {
        keyword: keyword,
        projectIds: [id]
      },
      $addToSet: {
        projectIds: id
      }
    });
  }
})
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { UserInfos } from '../../api/userinfo/UserInfo';

/* eslint-disable no-console */
/** Initialize the database with a default data document. */
function addProfiles(data) {
  console.log(`  Adding: ${data.firstName} ${data.lastName} ${data.user} ${data.password}
    (${data.owner})`);
  UserInfos.define(data);
}

/** Initialize the User Infos collection if empty. */
if (UserInfos.count() === 0) {
  if (Meteor.settings.defaultUser) {
    console.log('Creating default User data from the defaultProfiles.');
    Meteor.settings.defaultUser.map(data => addProfiles(data));
  }
}

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

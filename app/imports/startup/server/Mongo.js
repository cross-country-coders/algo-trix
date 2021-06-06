import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Lesson } from '../../api/lesson/Lesson';
import generateUsers from '../../api/usergenerator/UserGenerator';
import { UserInfos } from '../../api/userinfo/UserInfo';

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addLesson(data) {
  console.log(`  Adding: ${data.lessonName} (${data.section})`);
}

function addUser(data) {
  console.log((`  Adding: ${data.firstName} (${data.lastName} ${data._id} ${data.userImage}) `));
  UserInfos.define(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

if (Lesson.collection.find().count() === 0) {
  if (Meteor.settings.defaultLesson) {
    console.log('Creating default Lessons.');
    Meteor.settings.defaultLesson.map(data => addLesson(data));
  }
}

const userIDarray = [];

if (UserInfos.count() === 0) {
  if (Meteor.settings.defaultUser) {
    console.log('Creating default Users.');
    Meteor.settings.defaultUser.map(data => addUser(data));
  }
}

/** Adding the mock users */
function createUser(user, role) {
  // eslint-disable-next-line no-undef
  const userID = Accounts.createUser({ username: user, email: user, password: 'changeme' });
  userIDarray.push(userID);
  if (role === 'admin') {
    // eslint-disable-next-line no-undef
    Roles.addUsersToRoles(userID, 'admin');
  }
}

function addProfile({ firstName, lastName, userImage, password }) {
  console.log(` Adding Fake Profiles: ${firstName} ${lastName}, ${userImage}`);
  const role = 'none';
  const email = `${firstName}${lastName}${_.random(1, 10)}@gmail.com`;
  createUser(email, role);
  UserInfos.define({ firstName, lastName, email, password, userImage });
}

if (Meteor.users.find().count() < 3) {
  const sampleUsers = generateUsers(3);
  sampleUsers.map(profile => addProfile(profile));
}

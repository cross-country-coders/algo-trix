import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Lesson } from '../../api/lesson/Lesson';
import generateUsers from '../../api/usergenerator/UserGenerator';
import { UserInfos } from '../../api/userinfo/UserInfo';

function addLesson(data) {
  console.log(`  Adding: ${data.lessonName} (${data.section})`);
}

/** Adding the mock users */
function createUser(user, password, role) {
  // eslint-disable-next-line no-undef
  const userID = Accounts.createUser({ username: user, email: user, password: password });
  if (role === 'admin') {
    // eslint-disable-next-line no-undef
    Roles.addUsersToRoles(userID, 'admin');
  }
}

function addUser(data) {
  console.log((`  Adding: ${data.firstName} ${data.lastName} (${data.owner} | ${data.userImage}) `));
  UserInfos.define(data);
  createUser(data.owner, data.password, data.role);
}

function addFakeProfile({ firstName, lastName, userImage, password }) {
  console.log(` Adding Fake Profiles: ${firstName} ${lastName}, ${userImage}`);
  const owner = `${firstName}${lastName}${_.random(1, 10)}@gmail.com`;
  createUser(owner, 'changeme', 'none');
  UserInfos.define({ firstName, lastName, owner, password, userImage });
}

if (UserInfos.count() === 0) {
  if (Meteor.settings.defaultUser) {
    console.log('Creating default Users.');
    Meteor.settings.defaultUser.map(data => addUser(data));
  }
}

if (UserInfos.count() < 3) {
  const sampleUsers = generateUsers(3);
  sampleUsers.map(profile => addFakeProfile(profile));
}

if (Lesson.collection.find().count() === 0) {
  if (Meteor.settings.defaultLesson) {
    console.log('Creating default Lessons.');
    Meteor.settings.defaultLesson.map(data => addLesson(data));
  }
}

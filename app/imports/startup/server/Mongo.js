import { Meteor } from 'meteor/meteor';
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

function addFakeProfile({ firstName, lastName, userImage, _id, password }) {
  console.log(`\tAdding Fake Profiles:\n\t\t${firstName} ${lastName} (${userImage})`);
  console.log(`\t\t${_id}  |  ${password}`);
  createUser(_id, password, 'none');
  UserInfos.define({ firstName, lastName, owner: _id, password, userImage });
}

if (UserInfos.count() < 3) {
  const sampleUsers = generateUsers(6);
  sampleUsers.map(profile => addFakeProfile(profile));
}

if (Lesson.collection.find().count() === 0 && false) {
  // TODO: remove && false from parameter once addLesson has been implemented
  if (Meteor.settings.defaultLesson) {
    console.log('Creating default Lessons.');
    Meteor.settings.defaultLesson.map(data => addLesson(data));
  }
}

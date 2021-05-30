import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { UserInfos } from '../../api/userinfo/UserInfo';

/* eslint-disable no-console */

function createUser(email, password, role, first, last, image) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'admin');
  }
  UserInfos.define({
    firstName: first, lastName: last, owner: email, password: password, userImage: image,
  });
}

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultUser) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultUser.map(({ owner, password, role, firstName, lastName, userImage }) => createUser(
      owner, password, role, firstName, lastName, userImage,
    ));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

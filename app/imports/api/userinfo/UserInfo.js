import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';

/** Encapsulates State and variable values for this collection. */
export const userInfoPublications = {
  userInfo: 'UserInfo',
  userInfoAdmin: 'UserInfoAdmin',
  landingPageuser: 'UserInfoLanding',
};

class UserInfoCollection extends BaseCollection {
  constructor() {
    super('UserInfos', new SimpleSchema({
      firstName: String,
      lastName: String,
      _id: String,
      email: String,
      password: String,
      userImage: {
        type: String,
        optional: true,
        defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/1200px-Stick_Figure.svg.png',
      },
    }));
  }

  /**
   * Defines a new UserInfo item.
   * @param firstName the first name of the person.
   * @param lastName the last name of the person.
   * @param user the user name of the person.
   * @param owner the owner of the item.
   * @param password the password of the person.
   * @param zipcode the zipcode of the person.
   * @return {String} the docID of the new document.
   */
  define({ firstName, lastName, owner, password, userImage }) {
    const docID = this._collection.insert({
      firstName: firstName,
      lastName: lastName,
      email: owner,
      _id: owner,
      password: password,
      userImage: userImage,
    });
    return docID;
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param firstName the first name of the person (optional).
   * @param lastName the last name of the person (optional).
   * @param password the password of the person (optional).
   * @param userImage the URL image of the person to (optional).
   */
  update(docID, { firstName, lastName, password, userImage }) {
    const updateData = {};

    if (firstName) {
      updateData.firstName = firstName;
    }
    if (lastName) {
      updateData.lastName = lastName;
    }

    if (password) {
      updateData.password = password;
    }

    if (userImage) {
      updateData.userImage = userImage;
    }

    this._collection.update(docID, { $set: updateData });
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } name A document or docID in this collection.
   * @returns true
   */
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the stuff associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the StuffCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(userInfoPublications.userInfo, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ _id: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(userInfoPublications.userInfoAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
          return instance._collection.find();
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user */
      Meteor.publish(userInfoPublications.landingPageuser, function publish() {
        if (!this.userId) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for UserInfo owned by the current user.
   */
  subscribeUserInfo() {
    if (Meteor.isClient) {
      return Meteor.subscribe(userInfoPublications.userInfo);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeUserInfoAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(userInfoPublications.userInfoAdmin);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeUserInfoLanding() {
    if (Meteor.isClient) {
      return Meteor.subscribe(userInfoPublications.landingPageuser);
    }
    return null;
  }

}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const UserInfos = new UserInfoCollection();

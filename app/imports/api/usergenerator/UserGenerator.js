import faker from 'faker';
import { _ } from 'meteor/underscore';

export default function generateUsers(num) {
  const testUsers = [];
  for (let i = 0; i < num; i++) {
    const fakeFirst = _.sample(['Janice', 'Elizabeth', 'Alex', 'Zach', 'Mac']);
    const fakeLast = 'foo';
    const fakePassword = 'ics427';
    const fakeEmail = `${fakeFirst}${fakeLast}${i}@gmail.com`;
    const profileImage = _.sample(['https://i0.wp.com/butwhythopodcast.com/wp-content/uploads/2021/04/Tropical-Rouge-PreCure-Episode-5-But-Why-Tho.jpg?fit=1500%2C844&ssl=1',
      // eslint-disable-next-line max-len
      'https://pbs.twimg.com/media/Eyg2DjEUUAUAl0N?format=jpg&name=large', 'https://pbs.twimg.com/media/EvHQgiEVIAYUBKg?format=jpg&name=large', 'https://pbs.twimg.com/media/EqdZY19VoAEEo7K?format=jpg&name=large']);

    const profileUser = {
      firstName: fakeFirst,
      lastName: fakeLast,
      password: fakePassword,
      userImage: profileImage,
      _id: fakeEmail,
    };

    testUsers.push(profileUser);
  }
  return testUsers;

}

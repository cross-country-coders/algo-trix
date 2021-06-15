import faker from 'faker';

export default function generateUsers(num) {
  const ret = [];
  for (let i = 0; i < num; i++) {
    ret.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      userImage: faker.internet.avatar(),
      _id: faker.internet.email(),
      password: 'changeme',
    });
  }
  return ret;
}

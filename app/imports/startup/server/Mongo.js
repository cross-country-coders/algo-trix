import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Lesson } from '../../api/lesson/Lesson';

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
}

function addLesson(data) {
  console.log(`  Adding: ${data.lessonName} (${data.section})`);
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
    Meteor.settings.defaultLesson.map(data => addLesson(data));
  }
}

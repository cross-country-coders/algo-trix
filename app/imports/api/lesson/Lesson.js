import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

class LessonCollection {
  constructor() {
    this.name = 'lesson';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      lessonName: String,
      description: String,
    }, { tracker: Tracker });
    this.collection.attachSchema(this.schema);
    this.lessonPublicationName = `${this.name}.publication.lesson`;
    this.cumulativeLessonPublicationName = `${this.name}.publication.cumulative`;
  }
}
export const Lesson = new LessonCollection();

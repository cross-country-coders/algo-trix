import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router';

class LessonCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src = {this.props.lesson.image} size={'medium'}/>
        <Card.Content>
          <Card.Header>{this.props.lesson.lessonName}</Card.Header>
          <Card.Description>
            {this.props.lesson.description}
          </Card.Description>
          <Link to={`/listing/${this.props.lesson._id}`}>Take A Look</Link>
        </Card.Content>
      </Card>
    );
  }
}

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,
};

export default withRouter(LessonCard);
